import Joi from '@hapi/joi';
import { paginateValidationSchema } from '../../helpers/schemas';

export const paginateNewsValidateSchema = paginateValidationSchema.keys({
  theme: Joi.string().optional()
});
