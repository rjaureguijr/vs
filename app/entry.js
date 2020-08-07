import './styles';
// import { response } from '../server/app';

const url = 'http://localhost:8080/events';

console.log(url);

fetch(url)
.then( (response) => 
    response.json()           
)
.then( (data) => {
    console.warn(data)
    console.info(data.length)
    for( let i = 0; i < data.length; i++ ) {
    console.info(data[i]);
    document.getElementById('tableBody').innerHTML +=
    `<tr><td>${data[i].name}<td><td> ${data[i].date} <td><td> ${data[i].venue.name} <td><td> ${data[i].venue.city} <td><td> ${data[i].venue.state} <td></tr>`
    }
    })
.catch(err => {
throw new Error('An error occurred!!!')
});
