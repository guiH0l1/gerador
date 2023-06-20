const button = document.getElementById("generate");

button.addEventListener("click", function() {
    const min = parseInt(document.getElementById("min").value)
    const max = parseInt(document.getElementById("max").value)

    if (isNaN(result)){
        result = "Valor inválido"
    }

    let result = Math.floor(Math.random() * (max - min + 1)) + min

    document.querySelector("#result > span").textContent = result

})
