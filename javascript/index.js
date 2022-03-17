
console.log("Jeddy")


let button = document.getElementById('button')


let myfunction = function() {
    axios.get("/api/error")
}

button.addEventListener('click', myfunction)