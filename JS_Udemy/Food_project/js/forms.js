"use strict";
import {modalWindow} from "./modalWIndow";
import {postData} from "./services/services";
export function forms(formSlector) {
    
    const forms = document.querySelectorAll(formSlector);
    
    const message = {
            loading: "img/form/spinner(1).svg",
            done: "Данные отправлены. Спасибо!",
            error: "Произошла ошибка. Попробуйте еще раз."
        };
    
    forms.forEach((e) => {
        bindPostData(e, message);
    });

    

    /*function postData(form) {                         //XML IN POST
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
    
            const statusMessage = document.createElement("div");
            statusMessage.innerText = message.loading;
            form.append(statusMessage);
            
            const xml = new XMLHttpRequest();
            xml.open("POST", "server.php");
            xml.send(formData);
    
    
            xml.addEventListener("load", () => {
                if (xml.status === 200) {
                    statusMessage.innerText = message.done;
                    formsTimer(form, statusMessage, 2000);
    
                    console.log(xml.response);
                } else {
                    statusMessage.innerText = message.error;
                    formsTimer(form, statusMessage, 2000);
                }
            });
        });
    }*/


    /*function postData(form) { //XML    JSON and FormData to JSON IN POST
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
    
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            with: 50px;
            height: 50px;
            `;
    
            form.insertAdjacentElement("afterend", statusMessage);
            formsTimer(form, statusMessage, 2000);
            
            const xml = new XMLHttpRequest();
            xml.open("POST", "server.php");
            xml.setRequestHeader("Content-type", "application/json");
            const object = {};
    
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            xml.send(JSON.stringify(object));
    
    
            xml.addEventListener("load", () => {
                if (xml.status === 200) {
                    showThanksModal(message.done);
    
                    console.log(xml.response);
                } else {
                    showThanksModal(message.error);
                }
            });
        });
    }*/


    /*function postData(form) {                         //FETCH IN POST
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
    
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            with: 50px;
            height: 50px;
            `;
    
            form.insertAdjacentElement("afterend", statusMessage);
            
            fetch("server.php", {
                method: "POST",
                body: formData
            })
            .then(data => data.text())
            .then(data => {
                showThanksModal(message.done);
    
                console.log(data);
            })
            .catch(() => {
                showThanksModal(message.error);
            }).finally(() => {
                formsTimer(form, statusMessage, 2000);
            });
        });
    }*/



    // FETCH API IN JSON

   

    function bindPostData(form, objectMessage) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form); //get formses data

            const statusMessage = document.createElement("img");
            statusMessage.src = objectMessage.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            with: 50px;
            height: 50px;
            `;

            form.insertAdjacentElement("afterend", statusMessage);
            formsTimer(form, statusMessage, 2000);

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //from formData to JSON

            /*const object = {};
    
                    formData.forEach(function(value, key) {   //up its better formData to JSON
                        object[key] = value;
                    });*/

            postData("http://localhost:3000/requests", "POST", json)
                .then(result => {
                    showThanksModal(objectMessage.done);
                    console.log(result);
                })
                .catch(() => {
                    showThanksModal(objectMessage.error);
                })
                .finally(() => {
                    formsTimer(form, statusMessage, 2000);
                });

        }); //FORM ADDEVENTLISTENER
    } //POSTDATA*/



    function formsTimer(resetElement, removeElement, ms) {
        setTimeout(() => {
            removeElement.remove();
            resetElement.reset();
        }, ms);
    }

    function showThanksModal(status) {
        modalWindow.style.display = "block"; ///do modal window block

        const modalContentFormToNone = document.querySelector(".modal__content form"); //forms = none
        modalContentFormToNone.style.display = "none";
        const modalContent = document.querySelector(".modal__content"); //get empty modal content

        const statusMessageInModal = document.createElement("div"); //create message content for modal window
        statusMessageInModal.innerText = status;
        statusMessageInModal.classList.add("modal__title");

        modalContent.append(statusMessageInModal); // and use it

        setTimeout(() => {
            modalWindow.style.display = "none"; //close modal window
            document.body.style.overflow = "";

            modalContent.removeChild(statusMessageInModal); // and do past modal content
            modalContentFormToNone.style.display = "block";
        }, 4000);
    }
} //forms

