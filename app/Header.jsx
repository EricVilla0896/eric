import React from 'react'
import {data} from "./data"

console.log(data);

const filter = data.filter((data) => data.profession ===
"Front end developer");

console.log(filter)

const Header = () => {
  return <div>
    {data.map((data, key)=> (
      <li key={key}>{data.name}</li>
    ))}
    </div>;
}

export default Header