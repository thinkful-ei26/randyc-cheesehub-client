import React from 'react';

export default function CheeseList(props) {

  const myCheeses = props.cheeses.map((cheeses,index) => {

    return (
      <li>
        {props.cheeses[index]}
      </li>

    )

  })

return (

  <ul>
  { myCheeses }
  </ul>


)

 
 


}