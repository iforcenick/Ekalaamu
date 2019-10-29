const newUser = {
  id: 12,
  firstname: 'testFistname',
  email: 'testuser@dev.com',
  verified: true,
  update: async () => null,
  validatePassword: async () => true,
};

const signupData = {
  firstname: 'testFirstname',
  lastname: 'testLastname',
  email: 'testuser@dev.com',
  password: 'testpassword',
};

export { newUser, signupData };
