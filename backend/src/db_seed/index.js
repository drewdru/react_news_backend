import config from '../config';
import { mongoose, logger } from '../services';
import { createAdminAccount } from './user_seeder';
import { parseNews } from './news_seeder';
import User from '../api/users/users.model';
import News from '../api/news/news.model';

(async () => {
  try {
    logger.info('=======seeding data===========');
    await mongoose.connect(config.mongodb.url, config.mongodb.options);
    logger.info('=======seeded USERS===========');
    await createAdminAccount();
    await User.syncIndexes();
    logger.info('=======seeded NEWS===========');
    await parseNews();
    await News.syncIndexes();
    logger.info('=======seeded data was successfully===========');
  } catch (error) {
    logger.error('==============error==========%j', error);
  }
})();
