import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      trim: true,
    },
    link: {
      type: String,
      required: false,
    },
    pubDate: {
      type: String,
      required: false
    },
    isoDate: {
      type: Date,
      required: false
    },
    creator: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    contentSnippet: {
      type: String,
      required: false
    },
    guid: {
      type: String,
      required: false
    },
    categories: [{
        type: String
    }],
  },
  {
    timestamps: true
  }
);

NewsSchema.plugin(mongoosePaginate);
NewsSchema.plugin(mongooseUniqueValidator);

export default mongoose.model('News', NewsSchema);
