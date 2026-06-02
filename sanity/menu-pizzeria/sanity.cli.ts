import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'fpf8d751',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    appId: 'hxfj7c37mtrwtiaxqgvahgfd',
  }
})
