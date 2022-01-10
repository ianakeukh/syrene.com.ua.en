var LiqPay = require('liqpay');
var liqpay = new LiqPay(public_key, private_key);
var html = liqpay.cnb_form({
    'action'         : 'pay',
    'amount'         : '1',
    'currency'       : 'USD',
    'description'    : 'description text',
    'order_id'       : 'order_id_1',
    'version'        : '3'
});