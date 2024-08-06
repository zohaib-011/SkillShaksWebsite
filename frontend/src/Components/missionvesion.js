import   '../App.css'; 
import MsnVsnItem from './MsnVsnItem'
const Container=()=>{
return(
    <div  className='panelContainer'>
    <MsnVsnItem clas='panelItem' title="Our Vision" description="SkillShaks envisions a world where learning is limitless, connecting learners globally with expert instructors and innovative resources to foster a community of continuous growth and development."/>
    <MsnVsnItem clas='panelItem' title="Our Mission" description="SkillShaks aims to revolutionize education by providing a dynamic e-learning and live learning platform that empowers individuals to achieve their personal and professional goals through accessible, high-quality education."/>
    <MsnVsnItem clas='panelItem' title="Core Values" description="At the heart of SkillShaks are integrity, inclusivity, and innovation. We are committed to delivering education that is transparent, accessible to all, and continuously evolving to meet the needs of our learners."/>
           </div>
)
}
export default Container;