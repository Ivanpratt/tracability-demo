const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json())



console.log("Jeddy")

let button = document.getElementsById('button')

button.addEventListener('click', () => {
    console.log("Jeddy")

})