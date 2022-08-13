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
    'no-console': 'off',
    'consistent-return': 'off',
  }
};
