const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
    const response = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne');
    const photos = response.data.items;

    res.send(photos);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
