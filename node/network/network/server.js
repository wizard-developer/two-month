/**
 *  服务器端
 *   监听当前服务器上指定的ip与端口
 *
 */

 const drgam = require('dgram');
 const server = new drgam.Socket('udp4');

 server.on('listening', () => {
  console.log('服务器开启成功, 等待数据...')
 });

 server.on('message', data => {
   console.log('接收到的数据:', data.toString())
 });

 server.bind(9999, '127.0.0.1');