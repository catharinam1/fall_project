import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import bio from '../../assets/biology.avif'
import lit from '../../assets/literature.jpeg'
import hist from '../../assets/history.jpeg'
import phys from '../../assets/physics.jpeg'

const sections = [
  { urlImage: hist },
  { urlImage: bio },
  { urlImage: lit },
  { urlImage: phys },
  { urlImage: phys },
  { urlImage: phys },
];

const Header = () => {
  const imageStyles = {
    width: '100%', // You can set this to a specific width, e.g., '200px', or a percentage
    height: '100%', // This ensures that the aspect ratio is maintained
    margin: '0',
    padding: '0',
  };

  const headerStyle = {
    fontSize: '72px',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    display: 'inline-block',
    color: 'transparent',
    background: 'linear-gradient(90deg, rgba(29,221,199,1) 0%, rgba(24,179,185,1) 35%, rgba(24, 150,185,1) 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    marginBottom: '40px',
    textAlign: 'center',
  };

  const h2Style = {
    fontSize: '40px',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    color: 'transparent',
    background: 'linear-gradient(90deg, rgba(29,221,199,1) 0%, rgba(24,179,185,1) 35%, rgba(24, 150,185,1) 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    textAlign: 'center', // Center the text horizontally
    padding: '10px',
  };

  return (
    <div className="edubahamas__header section__padding" id="home">
      <div className="edubahamas__header-content">
        <h1 style={headerStyle}>
          Embrace Learning with EduBahamas
        </h1>
        <p>
          EduBahamas aims to be an additional resource for students in the EduBahamas
          studying for national exams. Does this look like something that can be included
          at your institution?
        </p>
        <button id="button-custom" className=" home_button" type="button">View All Subjects</button>
        {/* <div className="edubahamas__header-image">
          <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
            {sections.map((section, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <img src={section.urlImage} style={imageStyles} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="edubahamas__header-content-input">
          {/* <input type="email" placeholder="Type Your Email..." /> */}
          {/* <button className="subj_button" type="button">View All Subjects</button> */}
        {/* </div> */}
        
        {/* <div className="edubahamas__header-content-people">
          <img src={people} />
          <p>Lorem Impsum. Lorem Ipsum.</p>
        </div> */}
      </div>

      {/* <div className="rightSide"> */}
        {/* <div>
          <h2 style={h2Style} >Recently Added Subjects</h2>
        </div> */}
        {/* <div className="edubahamas__header-image"> */}
          {/* <img src={ai}/> */}
          {/* <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
            {sections.map((section, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <img src={section.urlImage} style={imageStyles} />
              </Grid>
            ))}
          </Grid> */}
        {/* </div> */}
            {/* <button className="subj_button" type="button">View All Subjects</button> */}
      {/* </div> */}
      
    </div>
  );
};

export default Header