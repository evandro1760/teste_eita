const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/eita', function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT | 80, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
