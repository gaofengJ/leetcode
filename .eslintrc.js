module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  ignorePatterns: [
    '.eslintrc.js',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
  }
};
