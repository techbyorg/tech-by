module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  // plugins: ['babel'],
  rules: {
    // 'babel/no-unused-expressions': 'error',
    'no-unused-expressions': 'off'
  }
}
