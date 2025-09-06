import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="couple-names" style={{fontSize: '3.5rem'}}>Our Story</h1>
        <div className="wedding-date">
          <h3 className="story-subtitle first">How We Met</h3>
          <p>Ashley and A.J. first crossed paths at Michigan State University during a student ministry hangout in 2020, but their story didn't truly begin until two years later. Ashley met A.J.'s sister, Maria, on a spring break mission trip. After seeing their fun social media post together during the trip, A.J. decided to join Maria at Ashley's dance performance put on through her dance club at MSU. That night, Ashley and A.J. reconnected, started chatting on Instagram, and soon took their conversations to real life starting with coffee at Blue Owl, followed by an impromptu first date the very same night where they went thrifting and ate sushi. After many more hangouts, late night Hello Fresh cooking parties, and dates, they made it official at Biggby on April 18, 2022, and the rest is history.</p>
          <h3 className="story-subtitle">Long Distance</h3>
          <p>After Ashley graduated from Michigan State in May 2023, she moved to Salt Lake City to begin her Doctorate in Occupational Therapy at the University of Utah. For the next seven months, they did long distance, filling the miles between them with FaceTime date nights and phone calls until A.J. graduated, landed a job working full time as a remote UX Engineer, and moved to Salt Lake City as well.</p>
          <h3 className="story-subtitle">Together In Utah</h3>
          <p>Since moving to Utah, they have found a wonderful community and shared countless outdoor adventures including snowboarding, hiking, paddleboarding, and national park road trips! A.J. also achieved a significant personal milestone by completing his first marathon. They have continued to grow in their faith both individually and together as a couple, actively serving at their church where they care for preschool and kindergarten kids during services and A.J. helps lead middle school ministry. For the first 2 years of being in Utah, Ashley worked full time in the hospital burn unit while completing her doctorate program and developing her capstone project, which focuses on bringing music-based occupational therapy interventions to a clinic in Morocco. Through all of these experiences, they have made lifelong friendships and feel incredibly blessed to have this chapter in Utah. They're soaking up every moment of their final year here before Ashley graduates and begins her journey in Travel Occupational Therapy, with A.J. planning to continue his career working remotely as a Software and UX Engineer while traveling alongside her.</p>
        </div>
      </div>
    </section>
  );
};

export default Story;