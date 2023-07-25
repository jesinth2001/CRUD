const Popup = () => {

    const handleClick = () =>
    {
        document.getElementById('pop').classList.remove('open-popup')
        document.getElementById('name').value=""
        document.getElementById('id').value=""
        document.getElementById('Phno').value=""
        document.getElementById('dob').value=""
        document.getElementById('city').value=""
        document.getElementById('name').placeholder=""
        document.getElementById('id').placeholder=""
        document.getElementById('Phno').placeholder=""
        document.getElementById('Phno').classList.remove('Throwerrorr')
        document.getElementById('name').classList.remove('Throwerrorr')
        document.getElementById('id').classList.remove('Throwerrorr')
    }

return (<div className="pop-up" id="pop">
   <div className="info">
      <h3>Submitted SuccessFully</h3>
      <h3 className="tick">✓</h3>
   </div>
   <div className="info-btn">
     <button onClick={handleClick}>Ok</button>
   </div>
</div>)
}
export default Popup