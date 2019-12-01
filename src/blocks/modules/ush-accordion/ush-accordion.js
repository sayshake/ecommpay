

    ;(function () {
        'use strict';

    let accordion = document.querySelector('.ush-accordion-js');
// вешаем обработчик
    accordion.addEventListener("click", tabsToggle);
    // фунцкия реализация аккордеона
    function tabsToggle(event){
        // 
        let eventTarget = event.target,
            accordionButton = eventTarget.closest('li');
        
        // проверяем всплытие на узле с классом активатором аккордеона
        if (accordionButton.classList.contains("ush-accordion__row-js")){
            console.log("button-accordeon"); 
            
        // получаем скрытую высоту скрытого элемента вкладки(внутренняя высота элементов, нужна для записи максимальной высоты)
        let  hiddenTabInner = 0; 
            for (let i= 0; i<accordionButton.nextElementSibling.children.length; i++){
                hiddenTabInner += parseInt(`${accordionButton.nextElementSibling.children[i].offsetHeight}`);
                console.log(hiddenTabInner);
            }
            hiddenTabInner =`${hiddenTabInner}px`;

            // логика для открытия вкладки
            if(accordionButton.classList.contains("ush-active")){
                accordionButton.nextElementSibling.style.maxHeight = null;
                accordionButton.classList.remove("ush-active");
                for (let j= 0; j<accordionButton.children.length; j++){
                    if(accordionButton.children[j].classList.contains("ush-accordion__angle-js")){
                        accordionButton.children[j].classList.remove("ush-active");
                    }
                }
                
            }else{
                accordionButton.classList.add("ush-active");
                accordionButton.nextElementSibling.style.maxHeight = hiddenTabInner;
                for (let j= 0; j<accordionButton.children.length; j++){
                    if(accordionButton.children[j].classList.contains("ush-accordion__angle-js")){
                        accordionButton.children[j].classList.add("ush-active");
                    }
                }
            }
            

            // console.log(accordionButton.nextElementSibling.style.maxHeight);
            // console.log(accordionButton.nextElementSibling.children);
            // console.log(accordionButton.nextElementSibling.children[0].offsetHeight);
            
        }
    }



    })();