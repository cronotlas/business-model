const helpers = require('../helpers')
const styleBuilder = require('../builds/style.build')

const config = helpers.getConfig()

// Task to build core styles
function buildStyleCore(done, browserSync) {
  return styleBuilder.buildStyle(
    helpers.getBuild('core', ['styles']).compile.styles,
    config.output.styles.core,
    browserSync
  )
} 

// Task to build 3rd-party styles
function buildStyleVendor(done, browserSync) {
  return styleBuilder.buildStyle(
    helpers.getBuild('optional', ['styles']).compile.styles,
    config.output.styles.vendor,
    browserSync
  )
}

exports.buildStyleCore = buildStyleCore
exports.buildStyleVendor = buildStyleVendor