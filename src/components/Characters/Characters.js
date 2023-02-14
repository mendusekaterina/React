import {Character} from "../Character/Character";

const Characters = () => {
    let characters=[
        {   id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
        {   id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            },
        {   id: 3,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        }
    ]
 return (
  <div>
      {
          characters.map(character=><Character key={character.id} character={character}/>)
      }
  </div>
 );
};

export {Characters};