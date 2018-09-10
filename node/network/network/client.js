const drgam = require('dgram');
const client = new drgam.Socket('udp4');

client.send('hello', 9999, '127.0.0.1');
