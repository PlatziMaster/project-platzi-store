const MongoLib = require('./../libs/mongo');

class OrdersService {

  constructor() {
    this.collection = 'orders';
    this.mongoClient = new MongoLib();
    this.createMapReduceTotal();
  }

  async getOrders() {
    return await this.mongoClient.getAll(this.collection, {});
  }

  async getTotal() {
    return await this.mongoClient.getAll('orders_total', {});
  }

  async createMapReduceTotal() {
    const mapFn = function() { emit(this.customer_id, this.price) }
    const reduceFn = function(keys, values) {
      return Array.sum(values);
    }
    const rta = await this.mongoClient.createMapReduce(
      this.collection,
      mapFn,
      reduceFn,
      {
        out: 'orders_total'
      }
    );
    console.log(rta);
    return rta;
  }
}

module.exports = OrdersService;