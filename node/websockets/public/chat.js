// Make Connentcion
$(function () {
  var socket = io();
  let html = "";
  let typing = "";

  // Select Element
  let $message =  $('#message'),
      $handle  =  $('#handle'),
      $btn     =  $('#send'),
      $out     =  $('#output'),
      $feedback = $('#feedback');


  // Emit events
  $btn.on('click', e => {
    socket.emit('chat', {
      message: $message.val(),
      handle: $handle.val()
    })
  });

  $message.on('keydown', () => {
    socket.emit('typing', {
      name: $handle.val()
    })
  })

  // chat callback
  socket.on('chat', data => {
    // 如果发送成功并且回调函数接收到data
    // 则把值清空
    $message.val("");
    $handle.val("");
    $feedback.html("");
    html += `<p><strong>${data.handle}:</strong>${data.message}</p>`
    $out.html(html)
  })

  // typing callback
  socket.on('typing', data => {
    typing = `<p><em>${data.name}is typing a message...</em></p>`
    $feedback.html(typing)
  })
});
