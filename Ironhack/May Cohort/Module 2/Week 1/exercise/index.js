const axios = require('axios')


//async await
//.then()

axios.get('https://restcountries.com/v3.1/name/fiji')
.then((countries)=>{
    // console.log(countries.data)
})

//exercise 2:
// 1. access the 4th character in the star wars api (darth vader)
// 2. console.log only the name of the character
// 3. bonus: add a second .then() after and pass down the hair color to it and console.log that

// axios.get('https://swapi.dev/api/people/4')
// .then((vader)=>{
//     console.log(vader.data.name)
//     console.log(vader.data)
//     return axios.get(vader.data.homeworld)
// })
// .then((homeWorld)=>{
//     console.log(homeWorld.data)
// })
// .catch((error)=>{
//     console.log(error)
// })


//exercise 3:
//convert to async await


async function getDarthVader(){
    try{
        const darthVader = await axios.get('https://swapi.dev/api/people/4')
        const planet = await axios.get(darthVader.data.homeworld)
        console.log(darthVader.data)
        console.log(planet.data)
     
    }
    catch(error){
        console.log(error)
    }
}

//getDarthVader()


//exercise 3:
// 1. use the rest countries api 
// 2. retrieve the data for the netherlands
// 3. display the name of the country on the console

axios.get('https://restcountries.com/v3.1/name/netherlands')
.then((country)=>{
    //console.log(country.data[0].name.common)
})


fetch('https://restcountries.com/v3.1/name/netherlands')
.then(response=>{
    return response.json()
})
.then(netherlands=>{
    console.log(netherlands)
})


async function getNetherlands(){
    const response = await fetch('https://restcountries.com/v3.1/name/netherlands')
    const netherlands = await response.json()
    console.log(netherlands)
}

