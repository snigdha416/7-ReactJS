 


const PersonCard = (props) => {
    return(
        <div className="personcss">
              <h1>Employee Information </h1>
            <h3>Full Name :{`${props.firstName} ${props.lastName}`}</h3>
            <p>Age :{props.age}</p>
            <p>Job :{props.job} </p>

        </div>
    )
}

export default PersonCard;