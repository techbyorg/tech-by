const fs = require('fs')
const path = require('path')

const presets = [
  ['@babel/preset-env', {
    useBuiltIns: false
  }]
]

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-optional-chaining'
  // lodash-es doesn't really work on node.js w/o type module
  // ['babel-plugin-replace-imports', {
  //   test: /lodash-es/i,
  //   replacer: 'lodash'
  // }]
]

// const ignore = [new RegExp(
//   fs.readFileSync(path.resolve('./.non_es5'), 'utf-8').slice(1, -2)
// )]

// console.log('ignore', ignore)


module.exports = { presets, plugins } // , ignore }
