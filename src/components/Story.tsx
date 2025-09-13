import React, { useState, useEffect } from 'react';

const Story: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const scrollToNextSection = () => {
    const sections = ['how-we-met', 'long-distance', 'together-in-utah'];
    const nextSectionIndex = Math.min(currentSection + 1, sections.length - 1);
    const nextSectionElement = document.getElementById(sections[nextSectionIndex]);
    if (nextSectionElement) {
      // Find the actual h3 element within the section for more precise positioning
      const h3Element = nextSectionElement.querySelector('h3');
      const targetElement = h3Element || nextSectionElement;
      const headerOffset = -110; // Just enough to clear fixed header
      const elementPosition = targetElement.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['how-we-met', 'long-distance', 'together-in-utah'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="couple-names" style={{fontSize: '3.5rem'}}>Our Story</h1>
        <div className="wedding-date">
          <div id="how-we-met">
            <h3 className="story-subtitle first">How We Met</h3>
          <p>Ashley and A.J. first crossed paths at Michigan State University during a student ministry hangout in 2020, but their story didn't truly begin until two years later. Ashley met A.J.'s sister, Maria, on a spring break mission trip. After seeing their fun social media post together during the trip, A.J. decided to join Maria at Ashley's dance performance put on through her dance club at MSU. That night, Ashley and A.J. reconnected, started chatting on Instagram, and soon took their conversations to real life starting with coffee at Blue Owl, followed by an impromptu first date the very same night where they went thrifting and ate sushi. After many more hangouts, late night Hello Fresh cooking parties, and dates, they made it official at Biggby on April 18, 2022, and the rest is history.</p>
          
          <div className="story-images">
            <img src="/IMG_9263.jpg" alt="Ashley and A.J." className="story-image" onClick={() => openModal('/IMG_9263.jpg')} />
            <img src="/IMG_3245.jpg" alt="College memories" className="story-image" onClick={() => openModal('/IMG_3245.jpg')} />
            <img src="/IMG_6377.jpg" alt="Early dates" className="story-image" onClick={() => openModal('/IMG_6377.jpg')} />
            <img src="/IMG_2760.jpg" alt="Together" className="story-image" onClick={() => openModal('/IMG_2760.jpg')} />
            <img src="/IMG_2687.jpg" alt="Making it official" className="story-image" onClick={() => openModal('/IMG_2687.jpg')} />
            <img src="/IMG_1827.jpg" alt="MSU days" className="story-image" onClick={() => openModal('/IMG_1827.jpg')} />
          </div>
          </div>

          <div id="long-distance">
            <h3 className="story-subtitle">Long Distance</h3>
          <p>After Ashley graduated from Michigan State in May 2023, she moved to Salt Lake City to begin her Doctorate in Occupational Therapy at the University of Utah. For the next seven months, they did long distance, filling the miles between them with FaceTime date nights and phone calls until A.J. graduated, landed a job working full time as a remote UX Engineer, and moved to Salt Lake City as well.</p>
          
          <div className="story-images long-distance-images">
            <img src="/IMG_5688.jpg" alt="Long distance" className="story-image" onClick={() => openModal('/IMG_5688.jpg')} />
            <img src="/IMG_84888.jpeg" alt="FaceTime cooking dates" className="story-image" onClick={() => openModal('/IMG_84888.jpeg')} />
            <img src="/untitled4.jpg" alt="FaceTime dates" className="story-image" onClick={() => openModal('/untitled4.jpg')} />
            <img src="/IMG_9027.jpg" alt="Long distance memories" className="story-image" onClick={() => openModal('/IMG_9027.jpg')} />
            <img src="/IMG_9096.jpg" alt="Long distance moments" className="story-image" onClick={() => openModal('/IMG_9096.jpg')} />
            <img src="/72200151189.jpg" alt="Long distance times" className="story-image" onClick={() => openModal('/72200151189.jpg')} />
            <img src="/IMG_8303.jpeg" alt="Long distance journey" className="story-image" onClick={() => openModal('/IMG_8303.jpeg')} />
          </div>
          </div>

          <div id="together-in-utah">
            <h3 className="story-subtitle">Together In Utah</h3>
          <p>Since moving to Utah, they have found a wonderful community and shared countless outdoor adventures including snowboarding, hiking, paddleboarding, and national park road trips! A.J. also achieved a significant personal milestone by completing his first marathon. They have continued to grow in their faith both individually and together as a couple, actively serving at their church where they care for preschool and kindergarten kids during services and A.J. helps lead middle school ministry. For the first 2 years of being in Utah, Ashley worked full time in the hospital burn unit while completing her doctorate program and developing her capstone project, which focuses on bringing music-based occupational therapy interventions to a clinic in Morocco. Through all of these experiences, they have made lifelong friendships and feel incredibly blessed to have this chapter in Utah. They're soaking up every moment of their final year here before Ashley graduates and begins her journey in Travel Occupational Therapy, with A.J. planning to continue his career working remotely as a Software and UX Engineer while traveling alongside her.</p>
          
          <div className="story-images">
            <img src="/IMG_0242.jpg" alt="Graduation" className="story-image" onClick={() => openModal('/IMG_0242.jpg')} />
            <img src="/IMG_1071.jpg" alt="Salt Lake City" className="story-image" onClick={() => openModal('/IMG_1071.jpg')} />
            <img src="/IMG_1552.jpg" alt="Ashley's move" className="story-image" onClick={() => openModal('/IMG_1552.jpg')} />
            <img src="/IMG_1894.jpg" alt="New adventures" className="story-image" onClick={() => openModal('/IMG_1894.jpg')} />
            <img src="/IMG_8559.jpg" alt="National parks" className="story-image" onClick={() => openModal('/IMG_8559.jpg')} />
            <img src="/IMG_2328.jpg" alt="Utah adventures" className="story-image" onClick={() => openModal('/IMG_2328.jpg')} />
            <img src="/IMG_2393.jpg" alt="Snowboarding" className="story-image" onClick={() => openModal('/IMG_2393.jpg')} />
            <img src="/IMG_2887.jpg" alt="Hiking together" className="story-image" onClick={() => openModal('/IMG_2887.jpg')} />
            <img src="/IMG_2983.jpg" alt="Marathon milestone" className="story-image" onClick={() => openModal('/IMG_2983.jpg')} />
            <img src="/IMG_9990.jpg" alt="Utah life" className="story-image" onClick={() => openModal('/IMG_9990.jpg')} />
            <img src="/IMG_9651.jpeg" alt="Utah memories" className="story-image" onClick={() => openModal('/IMG_9651.jpeg')} />
          </div>
          </div>
        </div>
      </div>
      
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="close-button" onClick={closeModal}>&times;</div>
          <img src={selectedImage} alt="Full size" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
      
      {currentSection < 2 && (
        <button 
          className="next-section-btn" 
          onClick={scrollToNextSection}
          aria-label="Go to next section"
        >
          <span>Next Section</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 12 12)"/>
          </svg>
        </button>
      )}
    </section>
  );
};

export default Story;