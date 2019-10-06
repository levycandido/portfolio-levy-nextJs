const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfoliolevy.herokuapp.com/' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfoliolevy.herokuapp.com/',
  'process.env.CLIENT_ID': '1PHvrdYzLEQlnP5Pcsw1hNGW3Lb22uA5'
}