const core = require('@actions/core')
const axios = require('axios')

try {
  const url = core.getInput('wechat_bot_url')
  const type = core.getInput('type')
  const content = core.getInput('content')

  axios.post(url, { msgtype: type, content })
} catch (error) {
  core.setFailed(error.message)
}