const presets = [
  ['@babel/preset-env', {
    useBuiltIns: false
  }]
]

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-optional-chaining',
  // lodash-es doesn't really work on node.js w/o type module
  ['babel-plugin-replace-imports', {
    test: /lodash-es/i,
    replacer: 'lodash'
  }]
]

module.exports = { presets, plugins }
