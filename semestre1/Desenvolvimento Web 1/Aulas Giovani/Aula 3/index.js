const cities [
    'Indaiatuba',

];

console.log(cities);

//for (let i = 0; i < cities.length; i++) {
//    console.log(cities[i]);
//}

//cities.forEach((city, index, sourceArray) => {
 //   console.log(city);
 //   console.log(index);
 //   console.log(sourceArray);
//});

let citiesbyIndex = []

cities.forEach((city, index, sourceArray) => {
    citiesbyIndex.push({
        index,
        city
    })
});

console.loog(citiesByIndex)

//cities.map((city, index) => {
    //console.log(city);
    //console.log(index);
//})