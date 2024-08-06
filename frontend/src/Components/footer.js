import '../App.css'; 
 
const Footer=()=>{
return (
    <>
     <div className='footHeader'>
           
         <div id='img'><img id='img' src="/images/skillShaks.png" width={100} alt="" />
         <hr id='hr' /></div>
           
        </div>  
     
    
     
    <div>
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.055776938211!2d74.16064113754757!3d32.636493203608886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0305330a618f%3A0xfc87388a04fa11d0!2sBusiness%20Incubation%20Center%20BIC!5e0!3m2!1sen!2s!4v1719314845749!5m2!1sen!2s"  height="300"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
     
    <div>
     
   
        <div className='footerContainer'>
         <div className='navigationCont'>
            <li ><a  href="/home">Home</a></li>
            <li><a href="">Contact us</a></li>
         </div>
         <div>
            <li style={{color:'white'}}>
                SkillShaks 2024 .All Rights Reserved
            </li>
         </div>
          <div className='socialContainer'> <li>
            
                <a href="https://www.instagram.com/skillshaks?igsh=MTc2ZG5mcjc1b25xNg==" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i> </a>
            </li>
            <li>
           
                <a href="https://www.facebook.com/share/qD5BjdLefMXmrSaR/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-square-facebook"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/skillshaks/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i> </a>
            </li>
            <li>
            
                <a href="https://whatsapp.com/channel/0029Vaefeav0LKZ9MBt4yO1k" target="_blank" rel="noopener noreferrer"><i  class="fa-brands fa-square-whatsapp"></i> </a>
            </li>
            </div> 
        </div>
    </div>
</>

);
}
export default Footer;