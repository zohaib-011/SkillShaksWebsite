const apiRouter=require('express').Router();
 
const events = [
  {
    imgUrl: "/images/startupExpo.jpg",
    title: "Startup Expo at UOG!",
    description: "The NEP of NICs, PITB Gujrat Center at the University of Gujrat organized a thrilling Startup Expo, featuring innovative startups like Team SkillShaks. Our exhibition booth was honored by the presence of special guests: MPA Punjab Assembly, Ms. Tashfeen Safdar, Vice Chancellor of UOG, Prof. Dr. Muhammad Mushahid Anwar, Director BIC, Dr. Nauman Riaz. Showcasing entrepreneurial talent and innovation at its best!"
  },
  {
    imgUrl: "/images/innovationStory.jpg",
    title: "Sharing our story of innovation and entrepreneurship!",
    description: "We were honored to be invited to share our experience and startup ideas with the university community, inspiring the next generation of entrepreneurs and innovators. From idea to impact, we're proud of our journey and achievements in promoting startup culture and innovation."
  },
  {
    imgUrl: "",
    title: "NUSt University Islamabad",
    description: "The Moment of Truth After completing bootcamp, we pitched our startup idea to a panel of esteemed judges from various backgrounds and industries. Our category, IT and Telecommunication, had the most startups, making the competition fierce! The competition was tough, but we showcased our project's potential and value with passion and conviction. We waited anxiously for the results, hoping our hard work would pay off"
  },
  {
    imgUrl: "",
    title: "RESULT DAY!",
    description: "July 24, 2023 - a day that will be etched in our memories forever! We gathered in the Quaid-e-Azam Auditorium, our hearts pounding with anticipation. The ceremony kicked off with a beautiful Quranic recitation, followed by a thrilling video montage of the event's highlights. And then, the moment of truth! Our startup, SkillShaks, was announced as the Runner-Up among 250 talented startups! We took home a prize of 0.5 million Rupees!"
  },
  {
    imgUrl: "",
    title: "PM HOUSE VISIT",
    description: "After the thrilling Result Day, we were honored to visit the Prime Minister House in Islamabad for an exclusive Investor Connect event! We mingled with fellow startups and investors, showcasing our innovative ideas. Then, the moment we'd been waiting for - the arrival of our chief guest, Prime Minister Shahbaz Sharif! He graciously met with each startup founder, exploring our projects at our booths. The ceremony culminated with the inauguration of the Prime Minister's Venture Capital Fund And, to our delight, the Prime Minister presented the trophies to the winners once again! An unforgettable experience at the PM House!"
  },
  {
    imgUrl: "",
    title: "SEE:World Startup Championship",
    description: "Our startup made it to the SEE semi-finals in Sialkot and pitched our idea to industry experts at the University of Sialkot. We're proud of our achievement and the valuable feedback we received!"
  },
  {
    imgUrl: "",
    title: "Sharing my proud moment again!",
    description: "After winning the Runner-up award in IT Telecom at the Prime Minister's Youth Award 2023, Round II, I also secured the top position in the University of Gujrat! And to top it all off, I was awarded by my HOD, entire department, and respected Vice Chancellor for our university! Feeling grateful and blessed for the recognition and support!"
  },
  {
    imgUrl: "",
    title: "We made it to the finals!",
    description: "Our team was selected as a finalist in the 1st international virtual entrepreneurship challenge organized by Business Incubation Center (BIC) at Islamia University of Bahawalpur (IUB). We're incredibly proud of our achievement and grateful for the opportunity to showcase our innovative ideas."
  },
  {
    imgUrl: "",
    title: "Achievement Unlocked!",
    description: "We're proud to share that Skillshaks was selected as a top semi-finalist in the Built By Her hackathon organized by National Incubation Center (NIC) Karachi. Our team's dedication and innovative spirit shone bright among 70 participants from across the country. This achievement fuels our passion for innovation and entrepreneurship."
  },
  {
    imgUrl: "",
    title: "Throwback to a proud moment!",
    description: "Our Founder & CEO, Samra Shakeel, was honored to be invited as a judge for the elevator round at the launchpad of cohort 5 of NEP (National Expansion Plan) of NIC (National Incubation Center) Gujrat Center. Samra Shakeel brought her expertise and experience to the table, providing fair and unbiased evaluation and feedback to innovative startups. We're proud of our leader's contributions to the startup community!"
  },
  {
    imgUrl: "",
    title: "Proud Moment",
    description: "Our Founder and CEO, Samra Shakeel, was honored to be invited as a Speaker at the beginning of cohort 5 of NEP (National Expension Plan) of NIC (National Incubation Center) PITB Gujrat Center. Samra Shakeel conducted a session on 'Perfect Pitch' for the incubated startups, sharing valuable insights and expertise to help them refine their pitching skills."
  },
  {
    imgUrl: "",
    title: "Empowering University Students!",
    description: "Our Founder & CEO, Samra Shakeel, was invited by SciBiz, the interdepartmental society of University of Gujrat, to share her entrepreneurial journey and insights on building financial freedom through startups. As part of the session, 'Build Your Financial Freedom: Startup Strategies,' Samra Shakeel inspired students to turn their ideas into reality and shared valuable lessons from her own startup journey. We're proud to support the next generation of entrepreneurs and innovators!"
  },
  {
    imgUrl: "",
    title: "GreenEnovate Waste Conference",
    description: "In January 2024, SkillShaks, in partnership with KleanArth, a waste management company, participated in the GreenEnovate Waste conference organized by Green Youth Moment Club (GYM), Prime Minister Youth Programme (PMYP), Higher Education Commission (HEC), and IBA Center for Entrepreneurial Development. This fully funded conference at IBA Karachi brought together youth and environmentalists from various industries to address liquid and solid waste management. We pitched our startup to a diverse audience, sharing our vision for a sustainable future. We're grateful to have had the opportunity to collaborate and innovate for a greener tomorrow!"
  },
  {
    imgUrl: "",
    title: "Milestones Achieved!",
    description: "After being awarded the Runner-up position at the Prime Minister National Innovation Award and receiving a prize of PKR 0.5 million, SkillShaks was further granted an investment of PKR 1 million and incubation by the Higher Education Commission (HEC). We are thrilled to have been incubated at the University of Gujrat Incubation Center, where we began our journey by hiring a team of passionate and dedicated interns. This milestone marked the beginning of our journey towards innovation and excellence."
  },
  {
    imgUrl: "",
    title: "Empowering Startup Founders!",
    description: "Our founder and CEO, Samra Shakeel, was honored to be invited by NEP of NICs, PITB Gujrat Center to train the new startup founders of Cohort 6 at the Bootcamp! Sharing her expertise and experience to help launch the next generation of innovators and entrepreneurs. Congratulations to the startup founders of Cohort 6!"
  },
  {
    imgUrl: "",
    title: "Judging the Next Big Thing!",
    description: "Our Founder and CEO, Samra Shakeel, was invited as a judge for Cohort 6 of the NEP of NICs, Gujrat Center. Evaluating innovative startups and helping shape the future of entrepreneurship!"
  },
  {
    imgUrl: "",
    title: "Milestone Achieved!",
    description: "Our Volunteer team has completed its first month under HEC incubation! Celebrating this achievement, our interns received recognition and certificates from our Founder Samra Shakeel and Co-Founder Nimrah Perveen. Special congratulations to Muhammad Umair, our 'Intern of the Month', who received a certificate and cash prize! We're proud of our team's hard work and dedication. Here's to many more months of growth and success!"
  }
];
  
   
  
apiRouter.get('/skillShaksAchievements', (re,res)=>{
 res.send(events)   
})
 
module.exports=apiRouter;