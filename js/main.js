//1
let kassa = document.querySelector('#kassa');
let inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
let menu = document.querySelector('.menu');
let moduleWindow = document.querySelector('.module-window');
let closeBtn = document.querySelector('.closeBtn');
let orderList = document.querySelector('.orderList');
let totalCost = document.querySelector('.totalCost');
let sale = document.querySelector('.sale');
let container = document.querySelector('.container');
let rublSimbol = document.querySelector('.rubl');

//2
let price = [369,349,189,179,299,149,199];
let kassaScore = 0; 


//3
document.addEventListener('click', function(event) {
    if(event.target.tagName == "INPUT") {
        if(event.target.checked) {
            event.target.setAttribute("checked","");
        }
        else {
            event.target.removeAttribute('checked');
        }
    }
})


document.addEventListener('click', function(event) {
    if(event.target.tagName == "INPUT") {
        let checkbox = event.target;
        let checkboxValue = checkbox.getAttribute('value');

        if(checkbox.getAttribute('checked') == "") {
            menu.src = `./image/${checkboxValue}.jpg`;
            kassaScore+= price[Number(checkboxValue)];
        }
        else {
            menu.src = "./image/menu.jpg";
            kassaScore -= price[Number(checkboxValue)];
        }
    }
    kassa.textContent = kassaScore + " " + rublSimbol.textContent; 
})


btn.addEventListener('click', function() {
    let orderCounter = 0;
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked) {
            moduleWindow.style.display = 'block';
            let nameProduct = inputs[i].nextElementSibling.textContent;
            orderList.innerHTML += `<b>${nameProduct}</b>:  <i>${price[i]} ${rublSimbol.textContent}</i><br>`;
            orderCounter++;
        }
    }

    if(orderCounter == 0) {
        alert("Вы ничего не выбрали!");
    }
    else {
        container.style.display = "none";
    }

    totalCost.textContent = `Общая стоимость: ${kassaScore} ₽`;
    sale.innerHTML = `Скидка от разработчика 26% <br><u>К оплате: ${Math.round(kassaScore - (kassaScore * 26 / 100))} ₽</u>`
})

closeBtn.addEventListener('click', function() {
    moduleWindow.style.display = "none";
    orderList.innerHTML = "";
    container.style.display = "block";
})
