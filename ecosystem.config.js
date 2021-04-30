module.exports = {
  apps: [{
    name: 'back_production',
    script: './app.js',
    exec_mode: 'cluster',
    instances: 'max',
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
