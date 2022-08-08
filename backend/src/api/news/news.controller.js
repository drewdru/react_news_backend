import { Controller } from '../../helpers/common';
import newsService from './news.service';

class NewsController extends Controller {
  constructor(service, name) {
    super(service, name);
  }
}

export default new NewsController(newsService, 'News');
