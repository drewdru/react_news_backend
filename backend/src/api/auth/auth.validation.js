import Joi from '@hapi/joi';

// password and confirmPassword must contain the same value
export const signupValidationSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  gender: Joi.string(),
  birthday: Joi.date(),
  username: Joi.string(),
  about: Joi.string(),
  email: Joi.string()
    .email()
    .lowercase()
    .required(),
  password: Joi.string()
    .min(4)
    .required()
    .strict(),
});

export const loginValidationSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string()
    .min(4)
    .max(255)
    .required()
});

export const validateEmail = Joi.object({
  email: Joi.string().email().required(),
});

export const logoutValidationSchema = Joi.object({
  token: Joi.string().required()
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
});

export const verifyCodeValidationSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  code: Joi.string()
    .length(6)
    .regex(/\d/)
    .required()
});

export const resetPasswordSchema = Joi.object({
  newPassword: Joi.string()
    .min(4)
    .max(255)
    .required(),
  confirmNewPassword: Joi.string()
    .required()
    .valid(Joi.ref('newPassword'))
});

export const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().optional()
});
