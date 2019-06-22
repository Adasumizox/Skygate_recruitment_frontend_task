const css = require('../css/style.scss');
import autocomplete from './autocomplete';
import validation from './validation';
import fetchwiki from './fetchwiki';
import fetchpollution from "./fetchpollution";

const avaibleCountries = [
    "Poland",
    "Germany",
    "Spain",
    "France"
];

if(sessionStorage.getItem('country') != null) {
    document.getElementById('myInput').value = sessionStorage.getItem('country').valueOf();
};
autocomplete(document.getElementById("myInput"), avaibleCountries);
validation(avaibleCountries);
const inval = document.getElementById("myInput").value;
fetchwiki(inval);
fetchpollution(inval);