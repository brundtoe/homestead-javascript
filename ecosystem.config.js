/** filen er placeret i /vagrant
 *
 */
module.exports = {
    apps: [{
        name: 'jstraining',
        cwd: '/home/vagrant/code/jstraining-jasmine/web',
        script: '/home/vagrant/code/jstraining/web/bin/www',
        instances: 1,
        autorestart: true,
        watch: true,

        },
        {
            name: 'imgploadr',
            cwd: '/home/vagrant/code/imgploadr',
            script: '/home/vagrant/code/imgploadr/server.js',
            instances: 1,
            autorestart: true,
            watch: true,
        },
        {
            name: 'mysqldemo',
            cwd: '/home/vagrant/code/mysqldemo',
            script: '/home/vagrant/code/mysqldemo/bin/www',
            instances: 1,
            autorestart: true,
            watch: true,
        },
        {
            name: 'jsonserver',
            cwd: '/home/vagrant/code/mysqldemo',
            script: '/home/vagrant/code/mysqldemo/bin/json-server.sh',
            instances: 1,
            autorestart: true,
            watch: true,
        },
    ]
};
/**
 env: {
      DB_SERVER: 'localhost',
      DB_PORT: '3306',
      DB_NAME: 'mystore',
      DB_USERNAME: 'athlon38',
      DB_PASSWORD: 'trine-73-glf'
    }

 */
