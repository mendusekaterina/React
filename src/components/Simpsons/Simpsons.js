import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons=[
        {id:1, name:'Homer', surname:'Simpson', phrase:'Doh'},
        {id:2, name:'Marge', surname:'Simpson', phrase:'Yes'}
    ]
 return (
  <div>
      {
          // [
          //     <Simpson key={simpsons[0].id} name={simpsons[0].name} surname={simpsons[0].surname} phrase={simpsons[0].phrase}/>,
          //     <Simpson key={2} name={'Marge'} surname={'Simpson'} phrase={'Yes'}/>
          // ]

          // або

          // simpsons.map(simpson=><Simpson key={simpson.id}
          //                                name={simpson.name}
          //                                surname={simpson.surname}
          //                                phrase={simpson.phrase}/>)

          //    або

          simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
      }
  </div>
 );
};

export {Simpsons};