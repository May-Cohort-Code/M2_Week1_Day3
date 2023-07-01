const express = require('express')

const app = express()
const hbs       = require("hbs");

const axios = require('axios')

//this tells our program that all of my views files are in the views folder
app.set('views',__dirname+'/views')
//this tells my application that I will be using handlebars for my viewing engine
app.set('view engine','hbs')

hbs.registerPartials(__dirname + "/views/partials");


app.use(express.static('public'))

// 4 main additional functionalities with hbs

// 1. we can pass values from the server to the client
// 2. have access to the hbs helpers
// 3. layouts
// 4. partials


//if:
//unless:
//each:

app.get('/home',(req,res)=>{
    let ironhacker = {
        name:"Marcos",
        course: "Web Dev",
        layout:false,
        address: {
            street: "Your heart",
            number: 87
          },
        languages:["English","Porgtugese","French"],
        image: 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*'
    }
    
    //render method has an optional second parameter
    
    res.render('home-page',ironhacker)
})

app.get('/about-me',(req,res)=>{
    res.render('about',{name:"Messi"})
})

//exercise 2:
// 1. create a route just like the lab you just did for the about
// 2. convert to handlebars
// 3. pass the name from the server to the client

app.listen(3000,()=>{console.log("server is running")})


//exercise 3:

// 1. create a route for displaying a movie and pass the movie object
// 2. in the hbs page render the movie if it has a name
// 3. print all of the actors for the movie on the page


let movie = {
    name: "Fast and Furious",
    genre: "Action",
    actors:["Vin Diesel","Paul Walker","The Rock","Michelle Rodeiguez"]
}

app.get('/movie',(req,res)=>{
    res.render('movie',movie)
})


app.get("/", (req, res, next) => res.render("index"));
 
app.get("/players", (req, res, next) => {
    const players = [
        {
          name: "Rusell",
          lastName: "Westbrook",
          team: "OKC",
          photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 82 },
            { year: 2015, points: 60 },
            { year: 2016, points: 46 },
            { year: 2017, points: 67 },
            { year: 2018, points: 80 }
          ]
        },
        {
          name: "Kevin",
          lastName: "Durant",
          team: "GSW",
          photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
          average: [
            { year: 2013, points: 76 },
            { year: 2014, points: 80 },
            { year: 2015, points: 65 },
            { year: 2016, points: 50 },
            { year: 2017, points: 67 },
            { year: 2018, points: 78 }
          ]
        },
        {
          name: "Lebron",
          lastName: "James",
          team: "CLE",
          photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
          average: [
            { year: 2013, points: 78 },
            { year: 2014, points: 82 },
            { year: 2015, points: 76 },
            { year: 2016, points: 84 },
            { year: 2017, points: 67 },
            { year: 2018, points: 60 }
          ]
        },
        {
          name: "Emanuel",
          lastName: "Ginóbilli",
          team: "SAS",
          photo: "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 76 },
            { year: 2015, points: 74 },
            { year: 2016, points: 80 },
            { year: 2017, points: 66 },
            { year: 2018, points: 63 }
          ]
        },
        {
          name: "Kyrie",
          lastName: "Irving",
          team: "BOS",
          photo: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf",
          average: [
            { year: 2013, points: 74 },
            { year: 2014, points: 72 },
            { year: 2015, points: 66 },
            { year: 2016, points: 82 },
            { year: 2017, points: 64 },
            { year: 2018, points: 61 }
          ]
        }
      ];
    res.render("players",{players})
});
 
app.get("/teams", (req, res, next) => res.render("teams"));


app.get('/spain',async (req,res)=>{
   let spain = await axios.get('https://restcountries.com/v3.1/name/spain')
    res.render('spain',{country:spain.data[0]})
    })
