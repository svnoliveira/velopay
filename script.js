const togglePriceButton = () => {
    const btn1Dia = document.querySelector("#dia")
    const btnNaHora = document.querySelector("#nahora")
    const txtCredito = document.querySelector("#credito")
    const txtParcelado = document.querySelector("#parcelado")

    btn1Dia.addEventListener("click", (event) => {
        if (!btn1Dia.classList.contains("selected")){

            btnNaHora.classList.remove("selected");
            txtCredito.innerText = "2.96%"
            txtParcelado.innerText = "9.97%"
            btn1Dia.classList.add("selected");
        }
    })

    btnNaHora.addEventListener("click", (event) => {
        if (!btnNaHora.classList.contains("selected")){

            btn1Dia.classList.remove("selected");
            txtCredito.innerText = "3.51%"
            txtParcelado.innerText = "12.39%"
            btnNaHora.classList.add("selected");
        }
    })
}

togglePriceButton()

