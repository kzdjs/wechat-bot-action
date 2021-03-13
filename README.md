# wechat-bot-action

企业微信机器人

## Inputs

### 1. wechat_bot_url

**Required** 企业微信 URL

### 2. type

**Not Required** 企业微信消息类型，默认为 markdown

### 3. content

**Required** 企业微信消息内容

## Example usage

```yaml
uses: kzdjs/wechat-bot-action@v1.0.0
with:
  wechat_bot_url: ${{ secrets.WECHAT_BOT_URL }}
  type: markdown
  content: |
    ## message
```
