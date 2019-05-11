module.exports = {
    apps: [{
        name: 'API',
        script: 'app.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],

    deploy: {
        production: {
            user: 'mac',
            host: '192.168.2.100',
            ref: 'origin/master',
            repo: 'git@github.com:chenggang321/pm2-demo.git',
            path: '/Users/mac/Desktop/project/pm2-demo/pm2-demo',
            ssh_options: "StrictHostKeyChecking=no",
            env: {
                "NODE_ENV": "production"
            },
            'post-deploy': 'pm2 reload ecosystem.config.js --env production'
        }
    }
};
