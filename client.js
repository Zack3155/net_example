const conn = net.createConnection({ 
  host: '6.tcp.ngrok.io', // change to IP address of computer or ngrok host if tunneling
  port: 15336 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

// client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
});
conn.on('connect', () => {
  conn.write('Hello from client!');
});