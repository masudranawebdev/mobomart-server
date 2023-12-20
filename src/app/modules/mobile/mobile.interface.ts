import { Model } from 'mongoose';

export type IMobile = {
  title: string;
  brand: string;
  price: number;
  processor: string;
  memory: string;
  os: string;
  thumbnail: string;
  description: string;
  status: 'in-stock' | 'comming' | 'out-stock';
};

export type MobileModel = Model<IMobile, Record<string, unknown>>;

export type IPostFilterablefield = {
  searchTerm?: string;
};
