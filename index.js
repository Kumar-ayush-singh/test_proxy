const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res) => {
    console.log(req)
    res.status(200).json({message: 'hello this is express project\n\n\n', headers: req.headers});
});
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('app is listending on', PORT);
});