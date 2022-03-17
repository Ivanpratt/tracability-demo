
console.log("Jeddy")


const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json())


let button = document.getElementById('button')


let myfunction = function() {
    axios.get("/api/error")
}

button.addEventListener('click', myfunction)