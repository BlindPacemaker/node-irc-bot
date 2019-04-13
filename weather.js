'use strict';

const axios = require('axios');

async function weather(location, client) {
  if (!location) return;

  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}\&appid\=${process.env.WEATHER_API_KEY}`);

    const description = data.weather[0].description;
    const temperature = data.main.temp - 273.15;

    client.say(`${process.env.CHANNEL}`, `Current weather in ${location}: ${description}, ${temperature.toFixed(2)}C`);
  } catch(err) {
    client.say(`${process.env.CHANNEL}`, 'Sorry, couldn\'t locate any city with that name');
    throw err;
  }
};

module.exports = weather;