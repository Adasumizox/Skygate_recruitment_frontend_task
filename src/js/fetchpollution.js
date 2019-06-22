export default function fetchpollution(name)
{
    const dict = {
        'Poland': 'PL',
        'Germany': 'DE',
        'Spain': 'ES',
        'France': 'FR'
    };
    const set1 = new Set();
    let url = 'https://api.openaq.org/v1/measurements?&country=' + dict[name] + '&order_by=value&parameter=pm25&sort=desc&limit=250';
    fetch(url)
    .then((response) => response.json())
    .then(function(myJson) {
        for(let i = 0; i < 250; i++) {
            if (set1.size == 10) {
                break;
            } else {
                set1.add(myJson.results[i].city);
            }
        }
        document.getElementById('pollution').innerHTML= 'Top 10 most polluted cities in country';
        var myTable = "";
        for (let item of set1) {
            myTable+="<tr><td>" + item + "</td>";
        }
        document.getElementById('polrec').innerHTML=myTable;
    })
    .catch(function(error) {
        console.log(error);
    })
}