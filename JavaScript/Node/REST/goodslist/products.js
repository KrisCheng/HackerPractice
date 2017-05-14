// prodect DB as a service;

var id = 0;

function nextId(){
  id++;
  return 'p' + id;
}

function Product(name, manufacturer, price){
  this.id = nextId();
  this.name = name;
  this.manufacturer = manufacturer;
  this.price = price;
}

 var products = [
   new Product('iPhone 7', 'Apple', 5888),
   new Product('Xiaomi 6', 'Xiaomi', 2888),
   new Product('Samsung s8', 'Samsung', 6888)
 ];

 module.exports = {
   getProducts: () => {
     return products;
   },

   getProduct: (id) => {
     for(var i = 0; i < products.length; i++){
       if(products[i].id === id){
         return products[i];
       }
     }
     return null;
   },

   createProduct: (name, manufacturer, price) => {
     var p = new Product(name, manufacturer, price);
     products.push(p);
     return p;
   },

   deleteProduct: (id) => {
     var index = -1;
     for(var i = 0; i < products.length; i++){
       if(products[i].id === id){
         index = i;
         break;
       }
     }
     if(index >= 0){
       return products.splice(index, 1)[0];
     }
     return null;
   }
 };
