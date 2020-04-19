const shops = require('./shop.controller');

module.exports = (router) => {
    router.post('/shops', shops.createShop);
    router.get('/shops', shops.getAllShops);
    router.put('/shops/:shopId', shops.updateShop);
    router.delete('/shops/:shopId', shops.deleteShop);
}