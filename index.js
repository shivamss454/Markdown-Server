const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { marked } = require('marked');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/convert', (req, res) => {
    const { markdown } = req.body;
    console.log("🚀 ~ app.post ~ markdown:", markdown)
    const html = marked(markdown);
    console.log("🚀 ~ app.post ~ html:", html)
    res.send({ html });
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
