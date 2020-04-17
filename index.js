const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();

app.use(cors());

app.get('/:type(country|us_state|us_metro)', (req, res) => {
    const type = req.params.type;

    const url = `http://coronamodel.com/standalone/covid19-dashboard/${type}.json`;

    // make request to corona model and forward response
    request(url).pipe(res);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
