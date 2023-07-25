import { useContext } from "react";
import ValueProvider from "./ValueProvider";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import SavedResponse from "./SavedResponse";
import SearchBox from "./SearchBox";
import Statics from "./Statics";



const Table = () =>
{
    const [items,setItems,refresh,setRefresh,usrs,setUsrs]=useContext(ValueProvider)

   
    const handleRefresh =()=>
    {
    document.getElementById("rf-btn").classList.add('rotate')
    
    const timer = setTimeout(() => {
        document.getElementById("rf-btn").classList.remove('rotate')
      },100)
     
     setRefresh(refresh+1)
     
    }


return(<div>
    <div className="return-btn">
        <Link to={"/"}>
        <button>Return</button>
        </Link>
    </div>
    <Link to={"/table/Statistics"}>
    <Statics></Statics>
    </Link>
   <SavedResponse></SavedResponse>
   <SearchBox></SearchBox>
    <button className="refresh-btn" id="rf-btn" onClick={handleRefresh}>
     ↻
    </button>
{items.length>0? <div className="table"> <table >
        <thead>
        <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Phone NO</th>
            <th>Dob</th>
            <th>City</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
        items.filter(i=>i.name.includes(usrs)).map( i => 
            {

                return(<tr key={i.id}>
                    <td >
                       {i.name}
                    </td>
                    <td>{i.id}</td>
                    <td>{i.phno}</td>
                    <td>{i.dob}</td>
                    <td>{i.city}</td>
                    <td>
                        <Buttons id={i.id}></Buttons>
                    </td>
                </tr>)
            }
            )
              }
    </tbody>
   
    
</table>
</div> : <div className="errormsg"><h1>No data Found</h1></div>
}
</div>)
}

export default Table;