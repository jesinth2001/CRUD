import { useContext } from "react"
import ValueProvider from "./ValueProvider"
import Chart from "react-apexcharts"
const StaticalData =()=>
{
    const [items,setItems,refresh,setRefresh,usrs,setUsrs,data,setData,dataCount,setDataCount]=useContext(ValueProvider)
 return(<div className="statisticpage">
    <div className="overview">Overview and Statistics</div>
    <Chart 
    type="pie"
    width={1500}
    height={550}
    series={dataCount}
    options={
        {
            labels:data
        }
    }
    
    ></Chart>
 </div>)
}
export default StaticalData;