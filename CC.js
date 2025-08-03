const fromselect = document.querySelectorAll("#fromselect") ;

const toselect = document.querySelectorAll("#toselect") ;

const button = document.querySelector(".btn") ;

let msg = document.querySelector("#msg") ;

const itag = document.querySelector("i") ;

let fromsel = "IND";

let tosel = "USD" ;

const updateflag = (element) => {
    let currcode = element.value ;
    let countrycode = countryList[currcode] ;
    let newsrc = 'https://flagsapi.com/'+countrycode+'/flat/64.png' ;
    let img = element.parentElement.parentElement.querySelector("img") ;
    img.src = newsrc ;
}

for(let select of fromselect) {

    for(code in countryList) {
        let newopt = document.createElement("option") ;
        newopt.innerText = code ;
        newopt.value = code ;
        select.append(newopt) ;
    }

    select.addEventListener("change",(evt) => {
        fromsel = evt.target.value ;
        updateflag(evt.target) ;
    });

}

for(let select of toselect) {

    for(code in countryList) {
        let newopt = document.createElement("option") ;
        newopt.innerText = code ;
        newopt.value = code ;
        select.append(newopt) ;
    }

    select.addEventListener("change",(evt) => {
        tosel = evt.target.value ;
        updateflag(evt.target) ;
    });

}

button.addEventListener("click", (evt) => {

    evt.preventDefault() ;

    let amtval = document.querySelector("#input") ;

    itag.id = "exchangeicon1" ;

    if(amtval.value > 0) {

        if(currencyvalue[fromsel] && currencyvalue[tosel]) {
            msg.innerText = (currencyvalue[tosel]/currencyvalue[fromsel])*amtval.value;
        }
        else {
             msg.innerText = "Sorry, No data Found..."
        }
    }

    setTimeout(() => {
        itag.removeAttribute('id'); 
    },701) ;

})
