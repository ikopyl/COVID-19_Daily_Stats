const express = require('express');

const app = express();

app.use('/covidstats', require('./routes/covidstats'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
