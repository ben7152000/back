module.exports = {
  apps: [{
    name: 'back',
    script: 'app.js',
    exec_mode: 'cluster',
    instances: 'max',
    max_memory_restart: '1G',
    port: 3000,
    env_production: {
      name: 'back_production',
      port: 3000,
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
