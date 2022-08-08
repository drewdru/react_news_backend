import httpStatus from 'http-status';
import { logger } from '../../services';
import Response from '../../helpers/response';
import authService from './auth.service';
import User from '../users/users.model';

import { validateEmail } from "./auth.validation"

export const signup = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await authService.signup(data);
    return Response.success(res, result, httpStatus.CREATED);
  } catch (exception) {
    next(exception);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = req.body;
    const email = data.email.toLowerCase();
    let user;
    const validation = validateEmail.validate({ email })
    if (!validation.error) {
      user = await User.findOne({ email });
    } else {
      user = await User.findOne({ username: email });
    }
    
    if (!user) {
      throw new Error(`User not found with this email or password`);
    }
    if (!user.verifyPassword(data.password)) {
      throw new Error(`User not found with this email or password`);
    }
    const ipAddress = req.ip;
    const result = await authService.login(user, ipAddress);
    setTokenCookie(res, result.refreshToken);
    // return the information including token as JSON
    return Response.success(res, result, httpStatus.OK);
  } catch (exception) {
    next(exception);
  }
};

export const logout = async (req, res, next) => {
  try {
    const { token } = req.body;
    const result = await authService.logout(token);
    return Response.success(res, null, httpStatus.OK);
  } catch (exception) {
    next(exception);
  }
};

export const checkEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await authService.checkEmailIsValid(email);
    return Response.success(res, result, httpStatus.OK);
  } catch (exception) {
    next(exception);
  }
};

export const checkUsername = async (req, res, next) => {
  try {
    const { username } = req.body;
    const result = await authService.checkUsernameIsValid(username);
    return Response.success(res, result, httpStatus.OK);
  } catch (exception) {
    next(exception);
  }
};

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    await authService.forgotPassword(email);
    return Response.success(res);
  } catch (exception) {
    next(exception);
  }
};

export const verifyCode = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await authService.verifyCode(data);
    return Response.success(res, result);
  } catch (exception) {
    next(exception);
  }
};

export const resetPassword = async (req, res, next) => {
  const { newPassword } = req.body;
  const user = req.user;
  try {
    const result = await authService.resetPassword(user, newPassword);
    return Response.success(res, result);
  } catch (exception) {
    next(exception);
  }
};

export const loginWithApple = async (req, res, next) => {
  try {
    const { access_token } = req.body

    let result = await authService.loginWithApple(access_token)

    return Response.success(res, result)
  } catch (e) {
    next(e)
  }
};

export const refreshToken = async (req, res, next) => {
  try {
    const token = req.body.refreshToken || req.cookies.refreshToken;
    const ipAddress = req.ip;
    const result = await authService.refreshToken(token, ipAddress);
    return Response.success(res, result);
  } catch (exception) {
    next(exception);
  }
};

const setTokenCookie = (res, token) => {
  const cookieOptions = {
    httpOnly: true
    // expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  };
  res.cookie('refreshToken', token, cookieOptions);
};
