const Card = ({name, image, action, description, characters}) => {
    return(

        <div className="card">
            <div className="img-box">
                <img src={image} alt="{name}" />
            </div>
            <h1 className="card-title"> {name} </h1>
            <p> {characters[0]} </p>
            <p> {characters[1]} </p>
            <p> {characters[2]} </p>
            <p> {characters[3]} </p>
        
            <button onClick={() => action(name, description, characters)} className="btn">button</button>
        </div>
    )
}
   



export default Card;