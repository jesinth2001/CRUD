import { useContext } from "react"
import ValueProvider from "./ValueProvider"

const Statics =()=>
{
    const [items,setItems,refresh,setRefresh,usrs,setUsrs,data,
      setData,dataCount,setDataCount]=useContext(ValueProvider)
    const handleData=()=>
    {
        let arr=[];
        let countArr=[];
    items.map ((i)=>
    {
      
    if(arr.indexOf(i.city.toLowerCase())===-1)
    {
        
      arr=[...arr,i.city.toLowerCase()]
       
    }})
    setData(arr)

   
  arr.map((j)=>
  {const count=items.filter((k)=> k.city.includes(j))
    countArr=[...countArr,count.length]})

    console.log(countArr)
    setDataCount(countArr) 
  }
    return(<div className="statics-btn">
        <button onClick={handleData}>Statistics</button>
    </div>)
}
export default Statics