const apiBaseUrl = 'https://api.exchangerate.host';
/**
 * @type {HTMLFormElement}
 */
const currencyForm = document.querySelector('#currency-form');
const fromAmount = document.querySelector('input[name=from-amount]');
const toAmount = document.querySelector('input[name=to-amount]');
const fromCurrencyInfo = document.querySelector('#from-currency-info');
const toCurrencyInfo = document.querySelector('#to-currency-info');

currencyForm.addEventListener('submit', e => {
    e.preventDefault();
});

currencyForm.addEventListener('input', e => {
    initValues();
    if (fromAmount.value == 0)
        fromAmount.value = 0;
    if (fromAmount.value.length >= 0 && fromAmount.value[0] === '0')
        fromAmount.value = +fromAmount.value;
});

const initValues = async () => {
    const formData = new FormData(currencyForm);

    const data = {
        amount: formData.get('from-amount'),
        base: formData.get('from-curr'),
        symbols: formData.get('to-curr'),
        places: 4
    }

    if (data.amount == 0) {
        toAmount.value = 0;
        return;
    }

    const url = new URL('/convert', apiBaseUrl);
    url.searchParams.append('from', data.base);
    url.searchParams.append('to', data.symbols);
    url.searchParams.append('amount', data.amount);
    url.searchParams.append('places', '4');

    const result = await fetch(url).then(res => res.json());

    toAmount.value = result.result;

    fromCurrencyInfo.innerHTML = `1 ${data.base} = ${result.info.rate} ${data.symbols}`;
    toCurrencyInfo.innerHTML = `1 ${data.symbols} = ${Math.trunc(1 / result.info.rate * 10000) / 10000} ${data.base}`;

    
}

initValues();


// var numberMask = IMask(element, {
//     mask: Number,  // enable number mask
  
//     // other options are optional with defaults below
//     scale: 4,  // digits after point, 0 for integers
//     signed: false,  // disallow negative
//     thousandsSeparator: ' ',  // any single char
//     padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
//     normalizeZeros: true,  // appends or removes zeros at ends
//     radix: '.',  // fractional delimiter
//     mapToRadix: [','],  // symbols to process as radix
  
//     // additional number interval options (e.g.)
//     min: -10000,
//     max: 10000
//   });

class SaveData {
    constructor (type, currency, requests) {
        this.type = type;
        this.currency = currency;
        this.requests = requests;
    }
}

let saveData = new SaveData[2];