import dotenv from 'dotenv';

dotenv.config();

export default {
  mongodb: {
    url: process.env.DATABASE_URL,
    secret: '!&!&OJpWXnDtB0eju7OE!zDp20G1JC%6bpq2',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD
    }
  },

  redis: {
    url: process.env.REDIS_URL
  },

  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  },

  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },

  firebase: {
    private_key: process.env.private_key,
    client_email: process.env.client_email,
    client_x509_cert_url: process.env.client_x509_cert_url
  },

  aws: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    bucketName: process.env.AWS_STORAGE_BUCKET_NAME
  },

  jwt: {
    secret: process.env.JWT_SECRET
  },

  app: {
    ROLE: {
      ADMIN: 'ADMIN'
    }
  },

  admin: {
    email: process.env.DEFAULT_ADMIN_EMAIL,
    password: process.env.DEFAULT_ADMIN_PASSWORD
  },

  test: {
    username: process.env.DEFAULT_TEST_USERNAME,
    email: process.env.DEFAULT_TEST_EMAIL,
    password: process.env.DEFAULT_TEST_PASSWORD
  },
  
  apn: {
    keyId: process.env.APN_KEY_ID,
    teamId: process.env.APN_TEAM_ID,
    topic: process.env.APN_TOPIC,
    production: process.env.APN_PRODUCTION
  },

  rss: {
    url: process.env.RSS_FEED_URL
  }
};
