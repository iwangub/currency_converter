
class Currencies {

    static get usd() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://www.floatrates.com/daily/usd.json', false);
        let usd;
        xhttp.onload = function () {
            usd = JSON.parse(xhttp.responseText);
        };
        xhttp.send()
        return usd;
    }

    static get eur() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://www.floatrates.com/daily/eur.json', false);
        let eur;
        xhttp.onload = function () {
            eur = JSON.parse(xhttp.responseText);

        };
        xhttp.send();
        return eur;
    }

    static get chf() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://www.floatrates.com/daily/chf.json', false);
        let chf;
        xhttp.onload = function () {
            chf = JSON.parse(xhttp.responseText);

        };
        xhttp.send();
        return chf;
    }

    static get gbp() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://www.floatrates.com/daily/gbp.json', false);
        let gbp;
        xhttp.onload = function () {
            gbp = JSON.parse(xhttp.responseText);

        };
        xhttp.send();
        return gbp;
    }

    static get jpy() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://www.floatrates.com/daily/jpy.json', false);
        let jpy;
        xhttp.onload = function () {
            jpy = JSON.parse(xhttp.responseText);

        };
        xhttp.send();
        return jpy;
    }

}

class Time {
    static get zone() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://raw.githubusercontent.com/sanohin/google-timezones-json/master/timezones.json', false);
        let zone;
        xhttp.onload = function () {
            zone = JSON.parse(xhttp.responseText);
        };
        xhttp.send()
        return zone;
    }
}

console.log(Time.zone["Europe/Paris"])

function calc() {

    let print = '';

    let outputCalc = document.getElementById('remove_result');
    if (outputCalc) {
        removeElement = document.getElementById('remove_result');
        removeElement.remove();
    }

    const element = document.createElement("p");

    if (currencyFrom.value === currencyTo.value) {
        print += '<div id="remove_result" class="mt-5">';
        print += `<button class="btn btn-lg btn-primary" disabled>equal currency</button>`;
        print += '</div>';
        element.innerHTML = print;
        document.getElementById("output_calc").append(element);
    } else {

        let from = currencyFrom.value;
        let to = currencyTo.value
        let getFaktor = Currencies[from][to].rate
        let result = currencyAmount.value * getFaktor;
        print += '<div id="remove_result">';
        print += `<button class="mt-5 btn btn-lg btn-primary" disabled>${currencyAmount.value} ${currencyFrom.value.toUpperCase()} is equivalent to ${result.toFixed(2)} ${currencyTo.value.toUpperCase()}.</button>`;
        //        print += `<p  class="mt-5" >${currencyAmount.value} ${currencyFrom.value.toUpperCase()} is equivalent to ${result.toFixed(2)} ${currencyTo.value.toUpperCase()}.</p>`;
        print += '</div>'
        element.innerHTML = print;
        document.getElementById("output_calc").append(element);
    }
}

function removeTable() {

    let element = document.getElementById('removeTable');
    element.remove();
};

function tableCurrency() {
    let element = document.getElementById('output_table')
    let print = '';
    print += '<div id="removeTable">'
    print += '<table class="table">'
    print += '<th>from / to</th>'
    print += '<th>CHF</th>'
    print += '<th>EUR</th>'
    print += '<th>USD</th>'
    print += '<th>GBP</th>'
    print += '<th>JPY</th>'


    print += '<tr>'
    print += '<th>CHF</th>'
    print += `<td>1.00</td>`
    print += `<td>${Currencies.chf.eur.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.chf.usd.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.chf.gbp.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.chf.jpy.rate.toFixed(2)}</td>`
    print += '</tr>'


    print += '<tr>'
    print += '<th>EUR</th>'
    print += `<td>${Currencies.eur.chf.rate.toFixed(2)}</td>`
    print += `<td>1.00</td>`
    print += `<td>${Currencies.eur.usd.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.eur.gbp.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.eur.jpy.rate.toFixed(2)}</td>`
    print += '</tr>'


    print += '<tr>'
    print += '<th>USD</th>'
    print += `<td>${Currencies.usd.chf.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.usd.eur.rate.toFixed(2)}</td>`
    print += `<td>1.00</td>`
    print += `<td>${Currencies.usd.gbp.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.usd.jpy.rate.toFixed(2)}</td>`
    print += '</tr>'


    print += '<tr>'
    print += '<th>GBP</th>'
    print += `<td>${Currencies.gbp.chf.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.gbp.eur.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.gbp.usd.rate.toFixed(2)}</td>`
    print += `<td>1.00</td>`
    print += `<td>${Currencies.gbp.jpy.rate.toFixed(2)}</td>`
    print += '</tr>'

    print += '<tr>'
    print += '<th>JPY</th>'
    print += `<td>${Currencies.jpy.chf.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.jpy.eur.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.jpy.usd.rate.toFixed(2)}</td>`
    print += `<td>${Currencies.jpy.gbp.rate.toFixed(2)}</td>`
    print += `<td>1.00</td>`
    print += '</tr>'


    print += '</table>'
    print += '<div class="center table">'
    print += '<button class="buttonCloseTable btn btn-primary" onclick="removeTable()">Close table</button>'
    print += '</div>'
    print += '</div>'
    element.innerHTML = print;
    document.getElementById("output_table").append(element);
};

function init() {
    showHomePage();
}

function showHomePage() {
    hideAllPages();
    document.getElementById("home").style.display = "block";
}

function showCalcPage() {
    hideAllPages();
    document.getElementById("currencyConverter").style.display = "block";
}

function showTablePage() {
    hideAllPages();
    document.getElementById("currencyTable").style.display = "block";

}

function hideAllPages() {
    const pages = document.querySelectorAll("main > section");
    for (let page of pages) {
        page.style.display = "none";
    }
}




// the next two functions are from " https://jsfiddle.net/DRSDavidSoft/zb4ft1qq/2/ "

function maxLengthCheck(object) {
    if (object.value.length > object.max.length)
        object.value = object.value.slice(0, object.max.length)
}

function isNumeric(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


