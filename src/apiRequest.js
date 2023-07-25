
const apiRequest =async (url='',options=null)=>
{
 try {
    console.log("working"+url+options);
   const response= await fetch(url,options)
   if(!response.ok) throw new Error("this id  is not a valid")

 }
 catch(err)
 {
  return "error"
 }
 
}
export default apiRequest;