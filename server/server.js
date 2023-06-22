// import utils
const {fileReaderAsync, fileWriter} = require('./utils/fileReadAndWrite');
const {
    v1: uuidv1,
    v4: uuidv4
} = require('uuid');

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
const orderPath = path.join(`${__dirname}/dataBase/orders.json`);

app.get('/', (req, res) => {
    res.status(200).json({ msg: "working" });
})

app.get('/pizza', async (req, res) => {
    const rawData = await fileReaderAsync(productPath);
    const fileData = JSON.parse(rawData);
    res.status(200).send(fileData.pizza);
})

app.get('/drinks', async (req, res) => {
    const rawData = await fileReaderAsync(productPath);
    const fileData = JSON.parse(rawData);
    res.status(200).send(fileData.drinks);
})

app.get('/desserts', async (req, res) => {
    const rawData = await fileReaderAsync(productPath);
    const fileData = JSON.parse(rawData);
    res.status(200).send(fileData.desserts);
})

app.get('/allergens', async (req, res) => {
    const rawData = await fileReaderAsync(productPath);
    const fileData = JSON.parse(rawData);
    res.status(200).send(fileData.allergens);
})

app.post('/submit', async (req, res) => {
    const incoming = req.body;
    const order = {
        id: uuidv1(),
        order: incoming,
    }
    
    const existingOrders = await fileReaderAsync(orderPath);
    const ordersArr = JSON.parse(existingOrders);
    ordersArr.crustopia.push(order);



    fileWriter(orderPath, JSON.stringify(ordersArr));
    res.status(200).json({message: 'successful'});
})



app.get('/orders', async (req, res) => {
    const rawData = await fileReaderAsync(orderPath);
    const orderData = JSON.parse(rawData);
    res.status(200).send(orderData);
})



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})