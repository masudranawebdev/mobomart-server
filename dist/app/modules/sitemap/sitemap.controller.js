"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
const express_1 = require("express");
const sitemap_1 = require("sitemap");
const zlib_1 = require("zlib");
const post_model_1 = require("../post/post.model");
const post_service_1 = require("../post/post.service");
const generateSlug_1 = require("../../../helpers/generateSlug");
const category_model_1 = require("../category/category.model");
// import fs from 'fs';
let sitemap;
const router = (0, express_1.Router)();
const date = new Date().toISOString();
router.get('/sitemap.xml', async function (req, res) {
    // Set the Content-Type header with charset=utf-8
    res.header('Content-Type', 'application/xml; charset=utf-8');
    res.header('Content-Encoding', 'gzip');
    // if we have a cached entry send it
    if (sitemap) {
        res.send(sitemap);
        return;
    }
    try {
        const smStream = new sitemap_1.SitemapStream({
            hostname: 'https://packnshift.com.bd/',
        });
        const pipeline = smStream.pipe((0, zlib_1.createGzip)());
        const posts = await post_model_1.Post.find({}).select({ _id: 0, slug: 1 });
        const tagData = await post_service_1.PostService.getAllTags();
        const tags = tagData && tagData[0].tags;
        const categoriesData = await category_model_1.Category.find({}).select({ _id: 0, title: 1 });
        const categories = categoriesData.map(category => category.title);
        console.log(categories);
        // Write todo URL to the stream
        posts.forEach(post => smStream.write({
            url: post.slug,
            lastmod: date,
            changefreq: 'daily',
            priority: 0.7,
        }));
        if (tags) {
            tags.forEach(tag => smStream.write({
                url: `/tag/${(0, generateSlug_1.generateSlug)(tag)}`,
                lastmod: date,
                changefreq: 'daily',
                priority: 0.7,
            }));
        }
        if (categories) {
            categories.forEach(category => smStream.write({
                url: `/c/${(0, generateSlug_1.generateSlug)(category)}`,
                lastmod: date,
                changefreq: 'daily',
                priority: 0.7,
            }));
        }
        // Manually add all the other important URLs
        smStream.write({
            url: '/',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/services',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/about',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/moving-tips',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/video-gallery',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/blog',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/contact',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/sitemap',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/privacy-policy',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        smStream.write({
            url: '/terms-conditions',
            lastmod: date,
            changefreq: 'monthly',
            priority: 0.9,
        });
        // cache the response
        (0, sitemap_1.streamToPromise)(pipeline).then(sm => (sitemap = sm));
        // make sure to attach a write stream such as streamToPromise before ending
        smStream.end();
        // Convert the stream to a buffer
        // const buffer = await streamToPromise(smStream);
        // Save the sitemap to the public folder
        // fs.writeFileSync('http://localhost:3000/public/sitemap.xml', buffer);
        // stream write the response
        pipeline.pipe(res).on('error', e => {
            throw e;
        });
    }
    catch (e) {
        console.error(e);
        res.status(500).end();
    }
});
exports.default = router;
