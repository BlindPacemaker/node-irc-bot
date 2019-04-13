'use strict';

const totalKarma = {};

function calculateKarma(user, amountToAdd) {
  if(totalKarma[user]) {
    totalKarma[user] += amountToAdd;
    return totalKarma[user];
  }
  totalKarma[user] = amountToAdd;
  return totalKarma[user];
}

function doKarma(recipient, client) {
  if (!recipient) {
    client.say(`${process.env.CHANNEL}`, 'No recipient specified - I can\'t give a high five to nobody!');
    return;
  }
  const karmaAmount = Math.floor(1000 * Math.random());
  const newKarma = calculateKarma(recipient, karmaAmount);
  client.say(`${process.env.CHANNEL}`, `${recipient} received ${karmaAmount} karma. ${recipient} currently has ${totalKarma[recipient]} karma.`);
}

module.exports = doKarma;
