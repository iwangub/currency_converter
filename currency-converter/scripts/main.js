

let currencies = [{
    chf: {
        chf: 1.000, eur: 0.9214, usd: 1.0283, gbp: 0.7862,
        jpy: 111.1671, value: "chf"
    },
    eur: {
        chf: 1.0850, eur: 1.0000, usd: 1.1159, gbp: 0.8520,
        jpy: 120.6350, value: "eur"
    },
    usd: {
        chf: 0.9725, eur: 0.8961, usd: 1.0000, gbp: 0.7645,
        jpy: 108.0800, value: "usd"
    },
    gbp: {
        chf: 1.2738, eur: 1.1720, usd: 1.3083, gbp: 1.0000,
        jpy: 141.4079, value: "gbp"
    },
    jpy: {
        chf: 0.0090, eur: 0.0083, usd: 0.0093, gbp: 0.0071,
        jpy: 1.0000, value: "jpy"
    }
}];


let output;
let currency;

let currencyAmount = document.getElementById("currencyAmount");
let currencyFrom = document.getElementById("currencyFrom");
let currencyTo = document.getElementById("currencyTo");



let remove_table = function () {
    let element = document.getElementById('remove_table');
    element.remove();
};

let tableCurrency = function () {
    let element = document.getElementById('output_table');
    let print = '';
    print += '<div id="remove_table">';
    print += '<table class="table">';
    print += '<th>von / nach</th>';
    print += '<th>CHF</th>';
    print += '<th>EUR</th>';
    print += '<th>USD</th>';
    print += '<th>GBP</th>';
    print += '<th>JPY</th>';


    // Looping through CHF
    for (let currency of currencies) {
        print += '<tr>';
        print += '<th>CHF</th>';
        print += `<td>${currency.chf.chf}</td >`;
        print += `<td>${currency.chf.eur}</td>`;
        print += `<td>${currency.chf.usd}</td>`;
        print += `<td>${currency.chf.gbp}</td>`;
        print += `<td>${currency.chf.jpy}</td>`;
        print += '</tr>';

    }

    // Looping through EUR
    for (let currency of currencies) {
        print += '<tr>';
        print += '<th>EUR</th>';
        print += `<td>${currency.eur.chf}</td>`;
        print += `<td>${currency.eur.eur}</td>`;
        print += `<td>${currency.eur.usd}</td>`;
        print += `<td>${currency.eur.gbp}</td>`;
        print += `<td>${currency.eur.jpy}</td>`;
        print += '</tr>';

    }

    // Looping through USD
    for (let currency of currencies) {
        print += '<tr>';
        print += '<th>USD</th>';
        print += `<td>${currency.usd.chf}</td>`;
        print += `<td>${currency.usd.eur}</td>`;
        print += `<td>${currency.usd.usd}</td>`;
        print += `<td>${currency.usd.gbp}</td>`;
        print += `<td>${currency.usd.jpy}</td>`;
        print += '</tr>';

    }

    // Looping through GBP
    for (let currency of currencies) {
        print += '<tr>';
        print += '<th>GBP</th>';
        print += `<td>${currency.gbp.chf}</td>`;
        print += `<td>${currency.gbp.eur}</td>`;
        print += `<td>${currency.gbp.usd}</td>`;
        print += `<td>${currency.gbp.gbp}</td>`;
        print += `<td>${currency.gbp.jpy}</td>`;
        print += '</tr>';

    }

    // Looping through JPY
    for (let currency of currencies) {
        print += '<tr>';
        print += '<th>JPY</th>';
        print += `<td>${currency.jpy.chf}</td>`;
        print += `<td>${currency.jpy.eur}</td>`;
        print += `<td>${currency.jpy.usd}</td>`;
        print += `<td>${currency.jpy.gbp}</td>`;
        print += `<td>${currency.jpy.jpy}</td>`;
        print += '</tr>';

    }

    print += '</table>';
    print += '<div class="center table">';
    print += '<button class="buttonCloseTable" onclick="remove_table()">Tabelle schliessen</button>';
    print += '</div>';
    print += '</div>';
    element.innerHTML = print;
    document.getElementById("output_table").append(element);
};



let calc = function () {
    let print = '';

    let outputCalc = document.getElementById('remove_result');
    if (outputCalc) {
        removeElement = document.getElementById('remove_result');
        removeElement.remove();
    }

    const element = document.createElement("p");

    if (currencyFrom.value === currencyTo.value) {
        print += '<div id="remove_result">';
        print += `<p>Ungültige Eingabe</p>`;
        print += '</div>';
        element.innerHTML = print;
        document.getElementById("output_calc").append(element);
    } else {

        print += '<div id="remove_result">';

        for (let currency of currencies) {
            let from = currencyFrom.value;
            let to = currencyTo.value;
            let getFaktor = currency[from][to];
            let result = currencyAmount.value * getFaktor;
            print += `${currencyAmount.value} ${currencyFrom.value.toUpperCase()} entspricht ${result} ${currencyTo.value.toUpperCase()}.`;
            print += '</div>';
            element.innerHTML = print;
            document.getElementById("output_calc").append(element);

        };
    };

};

    // Old Switch - Case solution
/*
        // condition for CHF
        let faktor;
        if (currencyFrom.value === 'chf') {
            switch (currencyTo.value) {
                case 'eur':
                    faktor = currencies.chf.ToEur;
                    break;
                case 'usd':
                    faktor = currencies.chf.ToUsd;
                    break;
                case 'gbp':
                    faktor = currencies.chf.ToGbp;
                    break;
                case 'jpy':
                    faktor = currencies.chf.ToJpy;
            }
        }
 
        // condition for EUR
        if (currencyFrom.value === 'eur') {
            switch (currencyTo.value) {
                case 'chf':
                    faktor = currencies.eur.ToChf;
                    break;
                case 'usd':
                    faktor = currencies.eur.ToUsd;
                    break;
                case 'gbp':
                    faktor = currencies.eur.ToGbp;
                    break;
                case 'jpy':
                    faktor = currencies.eur.ToJpy;
            }
        }
 
        // condition for USD
        if (currencyFrom.value === 'usd') {
            switch (currencyTo.value) {
                case 'chf':
                    faktor = currencies.usd.ToChf;
                    break;
                case 'eur':
                    faktor = currencies.usd.ToEur;
                    break;
                case 'gbp':
                    faktor = currencies.usd.ToGbp;
                    break;
                case 'jpy':
                    faktor = currencies.usd.ToJpy;
            }
        }
 
        // condition for GBP
        if (currencyFrom.value === 'gbp') {
            switch (currencyTo.value) {
                case 'chf':
                    faktor = currencies.gbp.ToChf;
                    break;
                case 'eur':
                    faktor = currencies.gbp.ToEur;
                    break;
                case 'usd':
                    faktor = currencies.gbp.ToUsd;
                    break;
                case 'jpy':
                    faktor = currencies.gbp.ToJpy;
            }
        }
 
        // condition for JPY
        if (currencyFrom.value === 'jpy') {
            switch (currencyTo.value) {
                case 'chf':
                    faktor = currencies.jpy.ToChf;
                    break;
                case 'eur':
                    faktor = currencies.jpy.ToEur;
                    break;
                case 'usd':
                    faktor = currencies.jpy.ToUsd;
                    break;
                case 'gbp':
                    faktor = currencies.jpy.ToGbp;
            }*/




































