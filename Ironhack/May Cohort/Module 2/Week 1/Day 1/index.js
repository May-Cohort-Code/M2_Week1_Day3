//synchrnous and asynchronous

//synchronous: WRITE DEFINITIONS

//asynchronous:




// setTimeout(() => {
//     console.log('first console log')

// }, 0);


console.log("Second console log")


function eatBreakfast(marcos){
    console.log("Eat Breakfast")
    marcos()
}


function eatDinner(){
    console.log("Eat Dinner")
}


eatBreakfast(eatDinner)



const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
  ];
   
   
  function getDirections(step, callback) {
    setTimeout(() => {
        console.log( directions[step] );
      
        callback();
 
    }, 1000);
  }

  getDirections(0,()=>{
    getDirections(1,()=>{
        getDirections(2,()=>{

        })
    })
  })


//Promises

//2 potential results of my promise
//1. successful
//2. fail
function directionsPromises(step){
    return new Promise((resolve,reject)=>{
        if(directions[step]){
            resolve()
        }
        else{
            reject("Step does not exist")
        }
    })
}

//.then()

directionsPromises(0)
.then(()=>directionsPromises(1))
.then(()=>directionsPromises(2))


function getRandomStudent(){
    setTimeout(() => {
        return "Nicolas"
    }, 1000);
}


let student = getRandomStudent()

// alert(`yay you win ${student}`)

console.log("Everything else")

function randomStudentPromise(){
    return new Promise((resolve,reject)=>{
        let student = "Nicolas"
        setTimeout(() => {
            if(student){
                resolve(student)
            }
            else{
                reject("There are no students")
            }
        
        }, 2000);
    })
    
}



//handling promise using .then()
randomStudentPromise()
.then((student)=>{
    alert(`hello ${student}`)
    return "Marcos"
})
.then((anything)=>{
    alert("Second alert " + anything)

})
.then((everything)=>{
    console.log(everything)
})
alert("After my promises")



const practicePromise = new Promise((resolve,reject)=>{
    let myNumber =.7 //random number between 0 and .999999
    
    if(myNumber<.8){
        resolve(myNumber)
    }
    else{
        reject("Sorry number is not below .8 and is " + myNumber)
    }
    })
//exercise:
// handle this promise
// incase the promise is resolved I want you to console.log the value when it's resolved like this "Number was below .8 and is .4"

//exercise 2
//turn the promise handling of practicePromise into an async/await

async function handlePractice(){
    try{
        let myNumber = await practicePromise
        console.log(`Your number is below .8 and is ${myNumber}`)

    }
    catch(error){
        console.log(error)
    }
}
practicePromise
.then((anything)=>{
    console.log(`your number was below .8 and is ${anything}`)
})
.then(()=>{
    console.w("console")

})
//handles the reject if my promise has failed
// .catch((error)=>{
//     console.log(error)
// })

//handling the promise using async await

async function handleRandomStudent(){
    try{
        let myStudent = await randomStudentPromise()
        let promiseValue = await practicePromise
        console.log("My Student " + myStudent)
        console.log("After myStudent")
    
    }
    catch(error){
        console.log(error)
    }
    }




handleRandomStudent()


try{
    console.jnfejbfe("Hello")
}
catch(err){
console.log(err)
}