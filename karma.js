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
  }
  const karmaAmount = 1000 * Math.random();
  const newKarma = calculateKarma(recipient, karmaAmount);
  client.say(`${process.env.CHANNEL}`, `${recipient} received ${karmaAmount} karma. You currently have ${totalKarma[recipient]} karma`);
}

module.exports = doKarma;
