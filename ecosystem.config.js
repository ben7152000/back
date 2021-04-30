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
      user: 'ec2-user',
      host: ['16.162.62.160'],
      port: 3000,
      ref: 'origin/master',
      repo: 'git@github.com:ben7152000/back.git',
      path: '/home/ec2-user/back',
      ssh_options: 'StrictHostKeyChecking=no',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
