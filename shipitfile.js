// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/apps/my-pokedex',
      repositoryUrl: 'https://github.com/leomSipios/my-pokedex.git',
    },
    staging: {
      servers: 'deploy@staging.super-project.com',
    },
  })
}