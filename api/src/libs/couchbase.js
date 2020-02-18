const { Cluster } = require('couchbase');

const COUCHBASE_URI = `couchbase://${config.cdbHost}:${config.cdbPort}`;

class CouchbaseLib {

  constructor() {
    this.cluster = new Cluster(COUCHBASE_URI, {
      username: 'admin',
      password: 'admin.2010'
    });
    this.bucket = this.cluster.bucket(config.cdbName);
    this.collection = this.bucket.defaultCollection();
  }

  async getAll(query, params) {
    const rta = this.cluster.query(query, params);
    return rta.rows;
  }

}

module.exports = CouchbaseLib;