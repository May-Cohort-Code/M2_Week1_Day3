import Picture from "./Picture"
import Ryan from '../RYan.jpg'

function Footer(){

    function sayMyName(name){
        console.log(name)
    }

    sayMyName("omar")

    return(
        <div className="footer">
            <img src={Ryan}></img>
            <Picture imageSrc="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQJiEVUzLlly5B3wiUHTfUdys_FZ69ihj61IjZV4hyrnfYpl70NrjNd0Ftvoht_iL72ckAQ0d3EV7K1GG0" actorName="Ryan Gossling"></Picture>

            <p><b></b></p>
            <p></p>
        </div>
    )
}

export default Footer