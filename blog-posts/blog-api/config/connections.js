module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  mongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    database: 'blog-api'
  }

};
