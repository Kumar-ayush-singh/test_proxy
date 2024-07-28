const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res) => {
    console.log(req)
    res.status(200).json({message: 'hello this is express project\n\n\n', headers: req.headers});
});

app.listen(8000, (e) => {
    console.log('app is listending on 8000', e);
});