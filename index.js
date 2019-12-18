const path = require('path')
const { platform, arch } = process

/**
 * @private
 */
const X264_COMMAND = 'x264'

/**
 * Resolved based on the running process platform.
 * @default
 * @public
 */
const X264_PATH = path.resolve( __dirname, 'bin', platform, arch, X264_COMMAND)

/**
 * Module exports.
 */
module.exports = {
  X264_COMMAND,
  X264_PATH,

  path: X264_PATH
}
