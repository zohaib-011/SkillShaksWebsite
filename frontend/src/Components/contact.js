import App from '../App.css'; 
import ContactItem from './ContactItem';
const Contact=()=>{
return (
    <>
     
    <div style={{paddingTop:'100px'}}>
      <ContactItem title="CEO" name="Samra Shakeel" phoneNo="+92 304 4462467" email="Samrashakeel720@gmail.com"/>  
      <ContactItem title="COO" name="Nimra Perveen" phoneNo="+92 312 7608042" email="Nimraperveen012@gmail.com"/> 
      <ContactItem title="Academic activity director" name="Muhammad Aqib" phoneNo="+92 311 7646790" email="Skillshaks@gmail.com"/> 
    </div>
    </>
)
}
export default Contact