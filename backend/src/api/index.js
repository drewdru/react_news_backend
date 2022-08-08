import { Router } from 'express';
import auth from './auth';
import news from './news';
import users from './users';
import uploads from './uploads';
import configs from './configs';

const router = new Router();

router.use('/auth', auth);
router.use('/news', news);
router.use('/users', users);
router.use('/uploads', uploads);
router.use('/configs', configs);

export default router;
