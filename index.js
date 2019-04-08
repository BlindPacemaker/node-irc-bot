require('dotenv').config();
const irc = require('irc');

const client = new irc.Client('irc.freenode.net', 'jabbadebott', {
    userName: 'jabbadebott',
    realName: 'jabbadebott bot for irc',
    port: 6667,
    localAddress: null,
    debug: false,
    showErrors: false,
    autoRejoin: false,
    autoConnect: true,
    channels: ['#foo123bar'],
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: false,
    floodProtectionDelay: 1000,
    sasl: false,
    retryCount: 0,
    retryDelay: 2000,
    stripColors: false,
    channelPrefixes: "&#",
    messageSplit: 512,
    encoding: ''
});

setTimeout(() => {
  client.say('NickServ', `identify ${process.env.PASSWORD}`);
  client.join('#learnjavascript');
}, 60000);

client.addListener('message', function (from, to, message) {
  // console.log('FROM: ', from);
  // console.log('TO: ', to);
  // console.log('MESSAGE: ', message);
  // console.log(from + ' => ' + to + ': ' + message);

  if (message.startsWith('!')) {
    client.say('#learnjavascript111', "Say something silly!");
  }
  if (message.startsWith('>')) {
    client.say('#learnjavascript111', "Parse some javascript!");
  }
  if (message.startsWith('mezod is a dick')) {
    client.say('#learnjavascript111', "I totally agree!");
  }
});

client.addListener('error', function(message) {
  console.log('error: ', message);
});