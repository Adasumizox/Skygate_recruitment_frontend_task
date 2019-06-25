let $ = require('jquery');
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
        let myTable = "";
        const dict2 = {
            'Landes': 'Landes_(department)',
            'Marne': 'Marne_(department)',
            'Calvados': 'Calvados_(department)',
            'Rhône': 'Rhône_(department)',
            'Castellón/Castelló':'Castellón_de_la_Plana',
            'Valencia/València':'Valencia'
        };
        for (let item of set1) {
            myTable+="<tr><td>" + item;
            //redirections on wiki are really weird so i hardcoded values :(
            //could propably be replaced by using regex in case of spain and adding _(department) in case of french
            for(var key in dict2) {
                if (item==key){
                    item=dict2[key];
                }
            }
            let url2 = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + item + '&redirects&format=json&prop=description&formatversion=2&origin=*';
            $.ajax({
                tpye: "GET",
                url: url2,
                async: false,
            }).done(function(data) {
                myTable+= " - " + data.query.pages[0].description + "</td>";
            }).fail(function(e) {
                console.log(e.message());
            });
        }
        document.getElementById('polrec').innerHTML=myTable;
    })
    .catch(function(error) {
        console.log(error);
    })
}