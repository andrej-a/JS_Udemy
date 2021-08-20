"use strict";

class MenuItem {        //create class
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

const container = document.querySelector(".menu__field .container");    //clear cards
container.innerHTML = '';

const getItemsFromServer = async (url) => {     //use async ff for get data
    const data = await fetch(url);
        
    if (!data.ok) {
            throw new Error(`Could not fetch ${url}, status ${data.status}`);
        }

    return await data.json();
};

getItemsFromServer("http://localhost:3000/menu")        //post it to cards of the content
.then(data => {
    data.forEach( ({img, altimg, title, descr, price}) => {
        container.innerHTML += new MenuItem(img, altimg, title, descr, price).setItems();
    });
});


//GET BY AXIOS LIBRARY

/*axios.get("http://localhost:3000/menu")
.then(data => {
    data.data.forEach( ({img, altimg, title, descr, price}) => {
        container.innerHTML += new MenuItem(img, altimg, title, descr, price).setItems();
    });
});*/

