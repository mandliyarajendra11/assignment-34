
import {useState} from 'react'
import axios from 'axios';
import { Button } from 'rsuite';


const App = () => {

  const [data,setData]=useState([])
  const handleAdd =  async ()=>{
    console.log('sdf')
    let random = Math.random()*10;
  // const res= await  axios.get(`https://swapi.dev/api/people/${10}`)
  const res= await  axios.get(`https://dummyjson.com/users?limit=${random}&skip=${0}`)
    console.log(res)
    setData(res.data.users)
}

const handleRemove = (i:string)=>{


  const res= data.filter((val)=>val.id!=i)
  setData(res)
}

  return (
    <div>
 <button onClick={handleAdd} className='bg-primary'> Add Record</button>
 <table>
  <th>Name</th>
  <tbody>
    {data.map((val:any)=>(
 <tr>
 <td key={val.id}>
  {val.username}
  </td>
  <td  onClick={()=>handleRemove(val.id)}> <button>Delete</button></td>
</tr>
    ))}
 

  </tbody>
 </table>
      </div>
  );
};

export default App;
