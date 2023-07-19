const WebSocket = require('ws');
const readline = require('readline');

var ws = new WebSocket('ws://localhost:8765');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    ws.send(input);
});

ws.on('open', function open() {
});

ws.on('message', function incoming(data) {
    console.log(data.toString());
});

ws.on('error', function error(err) {
    console.log('\nMusa returned an Error.\n\nWe are sorry for the inconvenience and will fix it as soon as possible.\nPlease try again or create an issue on GitHub.');
});

ws.on('close', function close() {
    process.exit(0);
});
