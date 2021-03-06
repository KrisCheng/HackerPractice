//Get请求

//模拟数据
var products = [{
  name: 'iPhone',
  price: 5999
}, {
  name: 'Xiaomi6',
  price: 2999
}];

module.exports = {
  'GET /api/products': async (ctx, next) => {
    //设置Context-Type:
    ctx.response.type = 'application/json';
    //设置Response Body:
    ctx.response.body = {
      products: products
    };
  },

  'POST /api/products': async (ctx, next) => {
    var p = {
      name: ctx.request.body.name,
      price: ctx.request.body.price
    };
    products.push(p);
    ctx.response.type = 'application/json';
    ctx.response.body = p;
  }
};
