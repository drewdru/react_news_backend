import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import {
  errorHandle,
  notFoundHandle,
  logErrors
} from './helpers/handle-errors';
import { logger, mongoose, swagger } from './services';
import api from './api';
import config from './config';

require('./services/passport');

const rootApi = '/api/v1';
const ROOT_FOLDER = path.join(__dirname, '..');
const SRC_FOLDER = path.join(ROOT_FOLDER, 'src');

const app = express();

app.set('trust proxy', 1); // trust first proxy

// Security
app.use(helmet());
app.use(cors());
// compression
app.use(compression());

app.use(cookieParser());
// logs http request
app.use(morgan(process.env.LOG_FORMAT || 'dev', { stream: logger.stream }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// passport
app.use(passport.initialize());

// database
mongoose.connect(config.mongodb.url, config.mongodb.options);

app.use(express.static(path.join(ROOT_FOLDER, 'build'), { index: false }));
app.use('/static', express.static(path.join(SRC_FOLDER, 'public')));
app.use('/media', express.static(path.join(ROOT_FOLDER, 'uploads')));
app.get('/', (req, res) =>
  res.json({ message: 'Welcome to react_news_backend API!' })
);

app.use('/api-docs', swagger());

app.use(rootApi, api);

app.use(notFoundHandle);
app.use(logErrors);
app.use(errorHandle);

export default app;
