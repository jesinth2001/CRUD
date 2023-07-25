
import './App.css';
import { useEffect ,useState} from 'react';
import  Header from './Header'
import Content from './Content';
import Table from './Table';
import StaticalData from './StaticalData';
import ValueProvider from './ValueProvider';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';



function App() {

const [items,setItems]=useState([])
const [refresh,setRefresh] = useState(0)
const [usrs,setUsrs] = useState('')
const [data,setData] = useState([])
const [dataCount,setDataCount] = useState([])





const API_URL='http://localhost:4000/data'

  useEffect (()=>{

    const fetchItems = async () =>
    {
      try{

        const response = await fetch(API_URL)
        
        const items = await response.json();
        console.log(items)
        if(response.ok)
        {
         console.log("fetching")
        }
        else
        {
          console.log("error fetching")
        }
       
        
        setItems(items)
      }
      catch(err)
      {
         console.log(err)
      }
      
      
    }
    (async ()=> await fetchItems())()

},[refresh])
 
  return (<div>


       <Header></Header>
      <ValueProvider.Provider value={[items,setItems,refresh,setRefresh,usrs,setUsrs,data,setData,dataCount,setDataCount]}>
       
         <BrowserRouter>
         <Routes>
         <Route path="/" elexment={<Content></Content>}></Route>
         <Route path="/table" element={<Table></Table>}></Route>
         <Route path="/table/Statistics" element={<StaticalData></StaticalData>}></Route>
         
         </Routes>
         </BrowserRouter>
         
         </ValueProvider.Provider>
    </div>
  )
}

export default App;
