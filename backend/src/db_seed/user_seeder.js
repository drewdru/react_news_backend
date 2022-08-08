import config from '../config';
import User from '../api/users/users.model';

export const createAdminAccount = async () => {
  const defaultEmail = config.admin.email;
  const defaultPassword = config.admin.password;
  const admin = await User.findOne({ email: defaultEmail });
  console.log('======admin======', admin);
  if (!admin) {
    await User.create({
      email: defaultEmail,
      firstName: 'admin',
      lastName: 'admin',
      password: defaultPassword,
      role: 'admin'
    });
  } else {
    admin.password = defaultPassword;
    await admin.save();
  }

  const defaultTestEmail = config.test.email;
  const defaultTestPassword = config.test.password;
  const defaultTestUsername = config.test.username;
  const testUser = await User.findOne({ email: defaultTestEmail });
  console.log('======test user======', testUser);
  if (!testUser) {
    await User.create({
      email: defaultTestEmail,
      username: defaultTestUsername,
      firstName: 'test',
      lastName: 'test',
      password: defaultTestPassword,
      role: 'user'
    });
  } else {
    testUser.password = defaultTestPassword;
    await testUser.save();
  }
};
