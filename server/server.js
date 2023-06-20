// import utils
const {fileReaderAsync, fileWriter} = require('./utils/fileReadAndWrite');

// express init
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productPath = path.join(`${__dirname}/dataBase/products.json`);

app.get('/', (req, res) => {
    res.status(200).json({ msg: "working" });
})

app.get('/pizza', async (req, res) => {
    const rawData = await fileReaderAsync(productPath);
    const fileData = JSON.parse(rawData);
    res.status(200).send(fileData.pizza);

})



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})