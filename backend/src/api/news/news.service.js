import { Service } from '../../helpers/common';
import News from './news.model';

class NewsService extends Service {
  constructor(model) {
    super(model);
  }
}

export default new NewsService(News);
