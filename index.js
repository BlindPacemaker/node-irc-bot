var irc = require('irc');
var client = new irc.Client('irc.freenode.net', 'someBot', {
    channels: ['##someRandmChnl'],
});

client.addListener('message', function (from, to, message) {
  // console.log('FROM: ', from);
  // console.log('TO: ', to);
  // console.log('MESSAGE: ', message);
  // console.log(from + ' => ' + to + ': ' + message);

  if (message.startsWith('!')) {
    client.say('##someRandmChnl', "Execute a silly command!");
  }
  if (message.startsWith('>')) {
    client.say('##someRandmChnl', "Parse some javascript!");
  }
});

client.addListener('error', function(message) {
  console.log('error: ', message);
});