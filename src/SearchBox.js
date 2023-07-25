import { useContext } from "react";
import ValueProvider from "./ValueProvider";
import {FaSearch} from "react-icons/fa"

const SearchBox =() =>
{
    const [items,setItems,refresh,setRefresh,usrs,setUsrs]=useContext(ValueProvider)
return (<div className="searchbox-cont">
    <input type="text" placeholder="Search" onChange={(e)=>setUsrs(e.target.value)}></input>
    <div><FaSearch></FaSearch></div>
</div>)

}
export default SearchBox;