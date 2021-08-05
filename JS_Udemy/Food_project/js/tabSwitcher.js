"use strict";

const tabheaderItemsParent = document.querySelector(".tabheader__items");
const tabcontent = document.querySelector(".tabcontent");

TabSwitcher(tabheaderItemsParent, tabcontent);

function TabSwitcher(parent, content, ) {
    parent.addEventListener("click", (e) => {
        if (e.target && e.target.matches(".tabheader__item")) { 

            document.querySelectorAll(".tabheader__item").forEach((item) => {   /*get all tabs and toggle classes*/
                item.classList.remove("tabheader__item_active");
            });

            e.target.classList.add("tabheader__item_active");
        }

        switch (e.target.innerText) {       /*switch content IMG and describes*/
            case "Фитнес":
                content.innerHTML =
                    `<img src="img/tabs/vegy.jpg" alt="vegy">
            <div class="tabcontent__descr">
                Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. 
                Для людей, которые интересуются спортом; активных и здоровых. 
                Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
            </div>`;
                break;

            case "Премиум":
                content.innerHTML =
                    `<img src="img/tabs/elite.jpg" alt="prem">
            <div class="tabcontent__descr">
                Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. 
                Красная рыба, морепродукты, фрукты - ресторанное меню 
                без похода в ресторан!                                     
            </div>`;
            content.classList.add("fade");
            content.classList.remove("fade");
                break;

            case "Постное":
                content.innerHTML =
                    `<img src="img/tabs/post.jpg" alt="postnoe">
            <div class="tabcontent__descr">
                Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов 
                животного происхождения. Полная гармония с собой и природой в каждом элементе! 
                Все будет Ом!                                     
            </div>`;
                break;

            case "Сбалансированное":
                content.innerHTML =
                    `<img src="img/tabs/hamburger.jpg" alt="balans">
            <div class="tabcontent__descr">
                Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. 
                Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
            </div>`;
                break;

        }

    });
}

