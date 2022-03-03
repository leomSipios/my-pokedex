// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/home/leom/my-pokedex',
      repositoryUrl: 'https://github.com/leomSipios/my-pokedex.git',
    },
    staging: {
      servers: 'leom@34.125.55.105',
      key: 'C:/Users/leome/OneDrive/Documents/Sipios/sshKey'
    },
  })
}