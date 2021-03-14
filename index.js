const core = require('@actions/core')
const axios = require('axios')

async function run() {
  try {
    const url = core.getInput('wechat_bot_url')
    const type = core.getInput('type')
    const content = core.getInput('content')

    console.log('type', type)
    console.log('content', content)

    const res = await axios.post(url, { msgtype: type, content })
    console.log('res', res)
  } catch (error) {
    console.log('error', error)
    core.setFailed(error.message)
  }
}

run()
