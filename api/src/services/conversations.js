const CouchbaseLib = require('./../libs/couchbase');

class ConversationsService {

  constructor() {
    this.type = 'conversation';
    this.couchbaseClient = new CouchbaseLib();
  }

  async getConversations() {
    const query = `
      SELECT doc.*
      FROM platzi_store AS doc
      WHERE doc.type = ${this.type}
    `;
    return await this.couchbaseClient.getAll(query, []);
  }

  async getStats() {
    return await this.couchbaseClient.getStats();
  }


}

module.exports = ConversationsService;