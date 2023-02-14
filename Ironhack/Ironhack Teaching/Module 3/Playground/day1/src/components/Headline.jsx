// All Components need to be Pascal case
//MyFirstName
import Picture from "./Picture";

function Headline(){
    const myName = "Omar"
    const student = {name:"Cam",city:"London"}
    let myArray = [1,2,3,4,5]
    console.log("In the headline")
    // React components need to return jsx
    return(
        // All components need to only have 1 parent element
        <div>
            <Picture imageSrc="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRaz1FWyKO39nF8VEPV1bKF1DubYlmWqngXQV4TDf_mJPSG0rHn76nD8iyXpWA5UTuDjonyuArc2wmpaH4" actorName="The Rock" ></Picture>
            {/* All attributes are camel cased */}
            {/* If I want to use my js values I need to put it inside of a curly brakcets {} */}
            <h1 className="h1Element">My Name is {myName}</h1>
            <h2>Student name is {student.name}</h2>
            <h3>my Array is = {myArray[3]}</h3>
            <Picture imageSrc="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQJiEVUzLlly5B3wiUHTfUdys_FZ69ihj61IjZV4hyrnfYpl70NrjNd0Ftvoht_iL72ckAQ0d3EV7K1GG0" actorName="Ryan Gossling"></Picture>
            
        </div>
    )
}
export default Headline;