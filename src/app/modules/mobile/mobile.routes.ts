import { Router } from 'express';
import { MobileController } from './mobile.controller';

const router = Router();

router.get('/', MobileController.getAllData);
router.post('/create-mobile', MobileController.insertIntoDB);

export const MobileRoutes = router;
