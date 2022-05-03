const cards = document.getElementsByClassName("card");

const cardsArray = Array.prototype.slice.call( document.getElementsByClassName("card") );

for (let card of cards) {
    card.style.visibility = "hidden"
}

let flag = 0;

window.onscroll = function() {
    for (let card of cards) {
        const called = checkVisible(card);
        if (called && card.style.visibility == "hidden") {
            const index = cardsArray.indexOf(card);

            card.classList.add("show-cards");

            if (index == 1 || index == 4 || index == 7 || index == 10 || index == 13 || index == 16) {
                card.style.animationDelay = "0.3s";
            }

            if (index == 2 || index == 5 || index == 8 || index == 11 || index == 14 || index == 17) {
                card.style.animationDelay = "0.6s";
            }
        }
        
        card.onanimationstart = () => {
            console.log("a")
            card.style.visibility = "visible";
        };
    }
};

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function showSearch() {
    element = document.getElementById("search-box");

    if (element.classList.contains("show-search-box")) {
        element.classList.add("hide-search-box");
        element.classList.remove("show-search-box");
    } else {
        element.style.visibility = "visible";
        console.log("aaa")
        element.classList.add("show-search-box");
        if (element.classList.contains("hide-search-box")) {
            document.getElementById("search-box").classList.remove("hide-search-box");
        }
    }
   
 
    const showTransition = document.querySelector('.show-search-box');
    const hideTransition = document.querySelector('.hide-search-box');

    if (showTransition != null) {
        showTransition.ontransitionend = () => {
            if (element.classList.contains("show-search-box")) {
                console.log('Show box');
            }
        };
    } else {
        hideTransition.ontransitionend = () => {
            if (element.classList.contains("hide-search-box")) {
                console.log('Hide box');
                element.style.visibility = "hidden";
            }
        };
    }
}