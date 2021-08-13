"use strict";

const forms = document.querySelectorAll("form");

const message = {
    loading: "img/form/spinner(1).svg",
    done: "Данные отправлены. Спасибо!",
    error: "Произошла ошибка. Попробуйте еще раз."
};

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


function postData(form) { //JSON and FormData to JSON IN POST
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
}

function formsTimer(resetElement, removeElement, ms) {
    setTimeout(() => {
        removeElement.remove();
        resetElement.reset();
    }, ms);
}

forms.forEach((e) => {
    postData(e);
});


function showThanksModal(status) {
    document.querySelector(".modal").style.display = "block"; ///do modal window block

    const modalContentFormToNone = document.querySelector(".modal__content form"); //forms = none
    modalContentFormToNone.style.display = "none"; 
    const modalContent = document.querySelector(".modal__content"); //get empty modal content
    
    const statusMessageInModal = document.createElement("div"); //create message content for modal window
    statusMessageInModal.innerText = status;
    statusMessageInModal.classList.add("modal__title");

    modalContent.append(statusMessageInModal); // and use it

        setTimeout(() => {
            document.querySelector(".modal").style.display = "none"; //close modal window
            document.body.style.overflow = "";

            modalContent.removeChild(statusMessageInModal);  // and do past modal content
            modalContentFormToNone.style.display = "block"; 
        }, 4000);
}
