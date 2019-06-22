export default function fetchwiki(country)
{
    let url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + country + '&format=json&prop=description&formatversion=2&origin=*'
    fetch(url)
    .then((response) => response.json())
    .then(function(myJson) {
        document.getElementById('description').innerHTML = myJson.query.pages[0].description
    })
    .catch(function(error) {
        console.log(error);
    })
}