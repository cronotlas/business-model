const helpers = require('../helpers')
const pageTasks = require('../tasks/page.task.js')
const assetTasks = require('../tasks/asset.task.js')
const styleTasks = require('../tasks/style.task.js')
const scriptTasks = require('../tasks/script.task.js')
const browserSync = require('browser-sync').create()
const { watch } = require('gulp')
const { browserSyncConfig } = require('../configs/browser-sync.config')

const config = helpers.getConfig()

// Function to serve compiled code
function serve() {
  // Get all assets
  let assetList = {
    core: helpers.getBuild('core', ['styles', 'scripts']),
    mandatory: helpers.getBuild('mandatory', ['styles', 'scripts']),
    vendor: helpers.getBuild('optional', ['styles', 'scripts']),
  }

  // Initialize Browser Sync
  browserSync.init(browserSyncConfig)

  // Watching style assets
  const buildStyleCore = (done) => styleTasks.buildStyleCore(done, browserSync)
  const buildStyleVendor = (done) => styleTasks.buildStyleVendor(done, browserSync)
  watch(assetList.core.watch.styles, buildStyleCore)
  watch(assetList.vendor.watch.styles, buildStyleVendor)

  // Watching script assets
  const buildScriptCore = (done) => scriptTasks.buildScriptCore(done, browserSync)
  const buildScriptMandatory = (done) => scriptTasks.buildScriptMandatory(done, browserSync)
  const buildScriptVendor = (done) => scriptTasks.buildScriptVendor(done, browserSync)
  const buildScriptApp = (done) => scriptTasks.buildScriptApp(done, browserSync)
  watch(assetList.core.watch.scripts, buildScriptCore)
  watch(assetList.mandatory.watch.scripts, buildScriptMandatory)
  watch(assetList.vendor.watch.scripts, buildScriptVendor)
  watch(`${config.path.src_app}/**/*.js`, buildScriptApp)
  
  // Watching page assets
  const buildPage = (done) => pageTasks.buildPage(done, browserSync)
  watch(`${config.path.src_pages}/**/*.njk`, buildPage)

  // Watching additional assets
  const assets = (done) => assetTasks.assets(done, browserSync)
  watch(`${config.path.src_assets}/**/*`, assets)
}

exports.serve = serve