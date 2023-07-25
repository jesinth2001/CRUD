import { useContext ,useState} from "react"
import ValueProvider from "./ValueProvider"
import apiRequest from "./apiRequest"
const Buttons =({id})=>
{
const[items,setItems]=useContext(ValueProvider)
const [state,setState] = useState("Edit")
const API_URL='http://localhost:4000/data'

const handleDelete =async (id)=>
{
    const listItems=items.filter((item)=>
    item.id!==id)
    setItems(listItems)

    const postOpt=
    {
        method:'DELETE'
    }
    const deletereq=`${API_URL}/${id}`
   
    const submit= await apiRequest(deletereq,postOpt)
}


const handleClicked= async(e,id)=>
{
    console.log(e.target.innerHTML+":"+id)
    const selectRow=e.target.parentElement.parentElement.parentElement
    if(e.target.innerHTML==="Edit")
    {
    setState("Save")
    selectRow.cells[0].contentEditable="true"
    selectRow.cells[2].contentEditable="true"
    selectRow.cells[3].contentEditable="true"
    selectRow.cells[4].contentEditable="true"
    
       
    }
    

    else
    {
    document.getElementById("sr").classList.add("open-saveresponse")
    const ExitResponse = setTimeout(() => {
        document.getElementById("sr").classList.remove('open-saveresponse')
      },2000)
    setState("Edit")
    selectRow.cells[0].contentEditable="false"
    selectRow.cells[2].contentEditable="false"
    selectRow.cells[3].contentEditable="false"
    selectRow.cells[4].contentEditable="false"
    const listItems=items.map(item => 
        item.id===id ?{...item,
            name:selectRow.cells[0].innerHTML,
            id:selectRow.cells[1].innerHTML,
            phno:selectRow.cells[2].innerHTML,
            dob:selectRow.cells[3].innerHTML,
            city:selectRow.cells[4].innerHTML
        
        }:item
        )

    setItems(listItems)
    
    const filterlist = listItems.filter(item =>
        item.id===id)
     console.log(filterlist)
    
        const postOpt=
        {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'},
            body:JSON.stringify(filterlist[0])
        }
        const updatereq=`${API_URL}/${id}`
       
        const submit= await apiRequest(updatereq,postOpt)
        if(submit===null) 
        {
            console.log("Error submitting")
        }
    
    }
}

const handleEdit=(e,id)=>
{
    handleClicked(e,id)
  
   
   

}

return(<div className="button-cont" >
    <button onClick={(e)=>handleEdit(e,id)}>{state}</button>
    <button onClick={()=>handleDelete(id)}>Delete</button>
</div>)
}
export  default Buttons;

