const { storeId, storePassword } = require('../secret');

const SSLCommerzPayment = require('sslcommerz-lts');
const store_id = storeId;
const store_passwd = storePassword;
const is_live = false;

exports.makePayment = async (req, res) => {
  const data = {
      total_amount: req.body.amount,
      currency: 'BDT',
      tran_id: 'REF123', // use unique tran_id for each api call
      success_url: `https://rentaxo-web.vercel.app/payment/success`,
      fail_url: 'https://rentaxo-web.vercel.app/payment/fail',
      cancel_url: 'https://rentaxo-web.vercel.app/payment/cancel',
      ipn_url: 'https://rentaxo-web.vercel.app/payment/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: 'Customer Name',
      cus_email: 'customer@example.com',
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
  };
  
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
  sslcz.init(data).then(apiResponse => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL
      res.send({ url: GatewayPageURL });
      
  });
};

exports.success = async (req, res) => {
  return res.redirect(`https://rentaxo-web.vercel.app/payment/${"success"}`);
};

exports.fail = async (req, res) => {
  return res.redirect(`https://rentaxo-web.vercel.app/payment/${"fail"}`);
};

exports.cancel = async (req, res) => {
  return res.redirect(`https://rentaxo-web.vercel.app/payment/${"cancel"}`);
}