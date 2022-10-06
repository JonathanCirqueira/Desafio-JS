

const button = document.getElementById('botao')
const select = document.getElementById('currench-select')
const dolar = 5.17
const euro = 5.8
const bitcoin = 105214.22
const convertValues = () => {
    const inputReias = document.getElementById('input-reais').value
    const realValueText = document.getElementById('real-value-text')
    const dolarValueText = document.getElementById('dolar-value-text')


    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",

    }).format(inputReias)


    if (select.value === "Bitcoin") {
        dolarValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8



        }).format(inputReias / bitcoin)

    }

    if (select.value === "US$ Dólar americano") {
        dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "URL",

        }).format(inputReias / dolar)
    }

    if (select.value === "€ Euro") {
        dolarValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",

        }).format(inputReias / euro)
    }

}
changeCurrench = () => {
    const currenchName = document.getElementById('currench-name')
    const currenchImg = document.getElementById('currench-img')
    const bodyColor = document.getElementById('body-color')
    const headerColor = document.getElementById('cabeçalho-color')
    const paragraphColor = document.getElementById('real-value-text')
    const paragraph2Color = document.getElementById('dolar-value-text')
    const buttonColor = document.getElementById('botao')




    if (select.value === 'US$ Dólar americano') {
        currenchName.innerHTML = "Dólar Americano"
        currenchImg.src = "./assets/estados-unidos (1) 1.png"
        bodyColor.style.backgroundImage = "url('./assets/dólar-2.jpg')"
        headerColor.style.backgroundImage = 'linear-gradient(to right, rgba(185, 197, 9),rgba(18, 145, 6))';
        paragraphColor.style.color = "#0b7a10f5"
        paragraph2Color.style.color = "#0b7a10f5";
        buttonColor.style.backgroundImage = 'linear-gradient(to right, rgba(185, 197, 9),rgba(18, 145, 6))';
    }

    if (select.value === '€ Euro') {
        currenchName.innerHTML = "Euro"
        currenchImg.src = "./assets/Euro.png"
        bodyColor.style.backgroundImage = "url('./assets/euro-desenho-6.png')"
        headerColor.style.backgroundImage = "linear-gradient(to right, rgba(21, 21, 91, 0.703), rgba(27, 13, 211))";
        paragraphColor.style.color = "rgba(27, 13, 211)";
        paragraph2Color.style.color = "rgba(27, 13, 211)";
        buttonColor.style.backgroundImage = "linear-gradient(to right, rgba(21, 21, 91, 0.703), rgba(27, 13, 211))";

    }
    if (select.value === 'Bitcoin') {
        currenchName.innerHTML = "Bitcoin"
        currenchImg.src = "./assets/bitcoin.png"
        bodyColor.style.backgroundImage = "url('./assets/bitcoin-10.jpg')"
        headerColor.style.backgroundImage = "linear-gradient(to right, rgb(57, 61, 3), rgb(241, 180, 2))";
        paragraphColor.style.color = "rgb(159, 120, 5)";
        paragraph2Color.style.color = "rgb(159, 120, 5)";
        buttonColor.style.backgroundImage = "linear-gradient(to right, rgb(57, 61, 3), rgb(241, 180, 2))";

    }

    convertValues()
}
button.addEventListener('click', convertValues)

select.addEventListener('change', changeCurrench)
