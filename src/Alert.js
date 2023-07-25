const Alert = () =>
{
const handleAlert =() => {
    document.getElementById('AlertMsg').classList.remove('open-AlertMsg')
}
return(<div className="AlertMsg" id="AlertMsg">
    <div className="Alert-info">

    <h3>This Id already exists</h3>
  <h3 className="warning">!</h3>
    </div>

<div className="Alert-btn">
     <button onClick={handleAlert} >Ok</button>
   </div>
</div>)
}
export default Alert;