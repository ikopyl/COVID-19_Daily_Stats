/** @author Ilya Kopyl */
const axios = require('axios');
const express = require('express');
const router = express.Router();
const moment = require('moment');

router.get('/', (req, res) => {
  const url = `https://pomber.github.io/covid19/timeseries.json`;

  console.log(req.query);
  const result = [];
  headers = 'Country,Date,Confirmed,Deaths,Recovered';
  result.push(headers);
  console.log(headers);

  axios
    .get(url)
    .then((networkResponse) => {
      for (country in networkResponse.data) {
        // console.log(country);
        days = networkResponse.data[country];
        for (recordNumber in days) {
          day = days[recordNumber];
          const { date, confirmed, deaths, recovered } = day;

          const resultRecord = `${country},${date},${confirmed},${deaths},${recovered}`;

          result.push(resultRecord);
          console.log(resultRecord);
        }
      }
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      throw new Error();
    });
});

module.exports = router;
