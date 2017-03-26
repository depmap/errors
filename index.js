const chalk = require('chalk')
module.exports = { error, warn }

function error (error) {
  let tmp = error.stack.split('\n')
  let stack = { msg: tmp[0] }
  tmp.shift()
  stack.trace = tmp.join('\n')

  // only print error message if it's not in the stack message
  if (stack.msg.indexOf(error.msg) > -1) console.log(chalk.red(error.message))
  console.log(chalk.red(stack.msg))
  console.log(chalk.gray(stack.trace))

  process.exit(1)
}

function warn (warning) { console.log(chalk.yellow(warning)) }
