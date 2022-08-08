import config from '../config';
import News from '../api/news/news.model';
import Parser from 'rss-parser';

export const parseNews = async () => {
  try {
    let parser = new Parser();
    const data = await parser.parseURL(config.rss.url)
    await News.bulkWrite(
      data.items.map((item) => {
        return {
          insertOne: {
            document: item,
          },
        };
      })
    );
  } catch(error) {
    console.log(error)
  }
  // data.forEach((item) => console.log(item));  
};
