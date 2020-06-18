module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-declaration': true,
  },
};
