'use strict';

require('dotenv').config();
const irc = require('irc');

const weather = require('./weather');
const doKarma = require('./karma');

const client = new irc.Client('irc.freenode.net', 'jabbadebott', {
    userName: 'jabbadebott',
    realName: 'jabbadebott bot for irc',
    port: 6667,
    localAddress: null,
    debug: false,
    showErrors: false,
    autoRejoin: false,
    autoConnect: true,
    channels: [`${process.env.CHANNEL}`],
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
  client.join(`${process.env.CHANNEL}`);
}, 20000);

client.addListener('message', function (from, to, message) {
  console.log('FROM: ', from);
  console.log('TO: ', to);
  console.log('MESSAGE: ', message);

  if (message.startsWith('good bot')) {
    client.say(`${process.env.CHANNEL}`, "Don\'t patronise me.");
  }

  if(message.startsWith('!highfive')) {
    if(message.length > 150) {
      client.say(`${process.env.CHANNEL}`, "Too much words brotha!");
      return;
    }
    const recipient = message.split(' ')[1] || null;
    doKarma(recipient, client);
  }

  if (message.startsWith('!help')) {
    if(message.length > 150) {
      client.say(`${process.env.CHANNEL}`, "Too much words brotha!");
      return;
    }
    // TODO: add function that will write common list of commands for jabbadebott
    client.say(`${process.env.CHANNEL}`, "No!");
  }
  if (message.startsWith('!w ')) {
    if(message.length > 150) {
      client.say(`${process.env.CHANNEL}`, "Too much words brotha!");
      return;
    }

    const [ _, location = null ] = message.split(' ');
    weather(location, client);
  }

  if (message.startsWith('>')) {
    if(message.length > 150) {
      client.say(`${process.env.CHANNEL}`, "Too much words brotha!");
      return;
    }

    client.say(`${process.env.CHANNEL}`, "Parse some javascript!");
  }
});

client.addListener('error', function(message) {
  console.log('error: ', message);
});