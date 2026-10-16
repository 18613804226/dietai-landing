module.exports = {
  apps: [
    {
      name: 'DieTai-landing',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      cwd: '/home/deploy/dietai-landing',
      env: {
        NODE_ENV: 'production'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      max_restarts: 3,
      min_uptime: '10s'
    }
  ]
}
