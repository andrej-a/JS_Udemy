"use strict";

class MenuItem {
    constructor(img, alt, subtitle, describe, total) {
        this.imgSRC = img;
        this.alt = alt;
        this.subtitle = subtitle;
        this.describe = describe;
        this.costTotal = total;
    }

    static convertorToBYN(price) {
        return Math.floor(price * 2.6);
    }

    setItems () {
        return `<div class="menu__item">
        <img src=${this.imgSRC} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        <div class="menu__item-descr">${this.describe}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${MenuItem.convertorToBYN(this.costTotal)}</span> BYN/день</div>
        </div>
    </div>`;
    }
}

const menuFitnes = new MenuItem("img/tabs/vegy.jpg", 
    "vegy", 
    "Меню 'Фитнес'", 
    `Меню "Фитнес" - это новый подход 
    к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. 
    Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`, 
    7);

const menuPremium = new MenuItem("img/tabs/elite.jpg", 
    "elite", 
    "Меню 'Премиум'", 
    `В меню “Премиум” 
    мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, 
    морепродукты, фрукты - ресторанное меню без похода в ресторан!`, 
    15);

const menuPostnoe = new MenuItem("img/tabs/post.jpg", 
    "post", 
    "Меню 'Постное'", 
    `Меню “Постное” - это тщательный 
    подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, 
    кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`, 
    11);


const container = document.querySelector(".menu__field .container");
container.innerHTML = '';

container.innerHTML += menuFitnes.setItems();
container.innerHTML += menuPremium.setItems();
container.innerHTML += menuPostnoe.setItems();