import { Link } from "react-router-dom"
import Form from "./Form"
import Popup from "./Popup"
import Alert from "./Alert"




const Content = () => {


    return(<div className="content" >
        <Form></Form>
        <div className="record-btn">
           <Link to="/table">
        <button>records</button>  
        </Link>   
        </div>
        <Popup></Popup>
        <Alert></Alert>
        </div>
    )

}
export default Content