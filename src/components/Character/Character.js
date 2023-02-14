const Character = ({character}) => {
    const {id,name,status,species,gender,image}=character
 return (
  <div>
    <h1>name: {name}</h1>
      <ul>
          <li>id: {id}</li>
          <li>status: {status}</li>
          <li>species: {species}</li>
          <li>gender: {gender}</li>
      </ul>
      <img src={image} alt={name}/>
  </div>
 );
}

export {Character};