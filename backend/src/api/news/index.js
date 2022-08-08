import express from 'express';
import { celebrate } from 'celebrate';
import newsController from './news.controller';
import {
  paginateNewsValidateSchema,
} from './news.validation';

const router = express.Router();

router.get(
  '/',
  celebrate({ query: paginateNewsValidateSchema }),
  newsController.findAll
);

export default router;
