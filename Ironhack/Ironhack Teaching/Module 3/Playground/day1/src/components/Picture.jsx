function Picture(props){
    return(
        <div>
        <img src={props.imageSrc} alt="" />
        <h1>{props.actorName}</h1>
        <button className="btn btn-primary">My Button CLick Me</button>
    </div>
    )
}

export default Picture