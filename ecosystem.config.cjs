module.exports = {
  apps: [
    {
      name: 'web-weekend-tjendana-bistro',
      port: '3702',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}