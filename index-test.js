const test = require('tape');
const toCSS = require('./dist/cjs');

test('#toCSS', t => {
  t.equals(toCSS({fontSize: 1}), 'font-size:1px !important;', 'default to px');
  t.equals(toCSS({flex: 1}), 'flex:1 !important;', 'unitless numbers');
  t.equals(toCSS({color: 'red', width: '100%'}), 'color:red !important;width:100% !important;', 'default to px');
  t.end();
});
