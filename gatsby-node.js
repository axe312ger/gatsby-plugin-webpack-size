const SizePlugin = require('size-plugin')

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  console.log({ stage, env: process.env.NODE_ENV })
  if (
    (process.env.NODE_ENV === 'production' && stage === 'build-javascript') ||
    options.development
  ) {
    actions.setWebpackConfig({
      plugins: [new SizePlugin(options)]
    })
  }
}
