module.exports = {
  apps: [{
    args: 'start',
    name: 'longdong-back',
    script: './app.js',
    instances: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    port: 3000
  }]
}
