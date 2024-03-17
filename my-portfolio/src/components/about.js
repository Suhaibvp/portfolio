import userImage from '../assets/img/profile.jpg';
import bgImgae from '../assets/img/hero_bg.jpg'


function About() {
  const customStyle = {
    width: '150px', // set your desired width
    height: 'auto', // 'auto' maintains the aspect ratio, adjust as needed
    marginLeft:'30px'
  }
  const containerStyle={
    backgroundColor:'Transparent',
    color:'black',
    borderRadius:'20px',
  }
  const containerinsideStyle={
    padding:'40px ',
    backgroundColor:'white',
    borderRadius:'10px',
  }
  const sectionStyle={
    backgroundImage: `url(${bgImgae})`, 
  }


  
  return (
    <section id="about" className="about-mf sect-pt4 route bg-image about" style={sectionStyle} >
    <div className="container" style={containerStyle}>
    <div className="row" style={containerStyle}>
      <div className="col-sm-12 " style={containerStyle}>
        <div className="box-shadow-full" style={containerinsideStyle}>
          <div className="row " style={containerinsideStyle}>
            <div className="col-md-6 ">
              <div className="row">
                <div className="col-sm-6 col-md-5 ">
                  <div className="about-img">
                    <img src={userImage} style={customStyle} className="img-fluid rounded b-shadow-a profile skillContainer" alt="user Profile"/>
                  </div>
                </div>
                <div className="col-sm-5 col-md-6 skillContainer p-3">
                  <div className="about-info">
                    <p><span className="title-s">Name: </span> <span>Suhaib VP</span></p>
                    <p><span className="title-s">Profile: </span> <span>Software Engineer</span></p>
                    <p><span className="title-s">Email: </span> <span>suhaibvp9895@gmail.com</span></p>
                    <p><span className="title-s">Phone: </span> <span>+91 9895162766</span></p>
                  </div>
                </div>
              </div>
              <div className="row skillContainer p-3 m-5">
              <p className="title-s">Skills</p>
              <div className="col-md-5 ">
        <div className="skill-mf  rounded p-3">

            <ul className="skills-list">
                <li>Python</li>
                <li>C Sharp</li>
                <li>Computer Vision</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>

            </ul>
        </div>
    </div>
    <div className="col-md-1"></div>

    <div className="col-md-5 ">
        <div className="skill-mf rounded p-3">

            <ul className="skills-list">
            <li>Xamarin</li>
                <li>Django</li>
                <li>React</li>
                <li>.Net Core</li>
                <li>Yolo</li>
                <li>CNN</li>
                <li>Computer Vision</li>


            </ul>
        </div>
    </div>
</div>


            </div>
            <div className="col-md-6 skillContainer p-3">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">
                    ABOUT ME
                  </h5>
                </div>
                <p className="mb-0">
                Welcome to my digital space! I am Suhaib , a passionate and results-driven Software Engineer with a solid foundation in Computer Science. Armed with a Bachelor of Computer Applications and over a year of hands-on experience in software engineering, I thrive on transforming innovative ideas into tangible solutions.
                </p>
                <br/>
                <p className="mb-0">
                My journey in the world of technology has equipped me with the skills to tackle complex challenges and contribute to cutting-edge projects. Explore my portfolio to witness my commitment to excellence and my dedication to pushing the boundaries of what's possible in the realm of software engineering.
                </p>
                <br/>
                <p className="mb-0">
                Let's build the future together – one line of code at a time!
                </p>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  );
}

export default About;
