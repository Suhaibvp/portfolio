import work1 from '../assets/img/work_1.png'
import work2 from '../assets/img/work_2.png'
import work3 from '../assets/img/work_3.png'
import work4 from '../assets/img/work_4.png'
import work5 from '../assets/img/work_5.png'
import bgImgae from '../assets/img/hero_bg.jpg'


function Works(){
  const sectionStyle={
    backgroundImage: `url(${bgImgae})`, 
  }
  const containerStyle={
    backgroundColor:'White',
    color:'black',
    borderRadius:'20px',
  }

    return (
      <section id="work" class="portfolio-mf sect-pt4 route bg-image" style={sectionStyle}>
        <div className="container">
    <div className="row" >
      <div className="col-sm-12 box-shadow-full" style={containerStyle}>
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Portfolio
              </h3>
              <p className="subtitle-a">
              "Embarking on personal projects driven by passion and curiosity, I delve into diverse realms of technology to bring my ideas to life. Explore a collection of my independent projects where innovation meets enthusiasm, showcasing my dedication to continuous learning and creativity."
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">

          <div className="col-md-4 ">
            <div className="work-box">
              <a href={work1} data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-item">
                  <div className="work-content">
                      <div className="row">
                          <div className="col-sm-12">
                              <h2 className="w-title">FOODBOOK</h2>
                              <div className="work-description-container">
                                  <p className="w-description">
                                    Developed a web application using Python and Django, enabling users to view food prices,
                                    administrators to add food items with details and prices, and users to place orders.
                                    Implemented with MySQL, Bootstrap, HTML, CSS, and JavaScript.
                                  </p>
                              </div>
                              <div className="w-more">
                                  <span className="w-ctegory"><a href='https://github.com/Suhaibvp/FOODBOOK' target="_blank" rel="noopener noreferrer">GIT LINK</a></span> / <span className="w-date">18 Sep. 2022</span>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="work-box">
              <a href={work2} data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src={work2} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-12">
                    <h2 className="w-title">CONNECTOR - A Social Media Platform.</h2>
                    <div className="work-description-container">
        <p className="w-description">
        Created a social media platform using Flutter and Dart,
        facilitating users to chat, share posts, view others’ posts, and set status updates. Integrated external platforms
        like Messenger, WhatsApp, and Instagram for messaging through Firebase Cloud.
        </p>
      </div>
                    <div className="w-more">
                      <span className="w-ctegory"><a href='https://github.com/Suhaibvp/connector' target="_blank" rel="noopener noreferrer">GIT LINK</a></span> / <span className="w-date">11 Apr. 2023</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={work3} data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src={work3} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-12">
                    <h2 className="w-title">EPICENE </h2>
                    <div className="work-description-container">
        <p className="w-description">
        Engineered a communication platform in Python and Flask, offering users the ability to connect
        with professionals, seek assistance from lawyers, doctors, and psychologists, and request meetings. Admincontrolled user registration with location-specific coordinator approvals. Utilized MySQL, Java, HTML, CSS,
        and JavaScript for development
        </p>
      </div>
                    <div className="w-more">
                      <span className="w-ctegory"><a href='https://github.com/Suhaibvp/epicene' target="_blank" rel="noopener noreferrer">GIT LINK</a></span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={work4} data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src={work4} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-12">
                    <h2 className="w-title">COMPUTER VISION</h2>
                    <div className="work-description-container">
                      <p className="w-description">
                      Engineered an object detection model using Python with the YOLOv8 architecture,
                      incorporating a pretrained model and custom dataset. Successfully implemented object detection, tracking, and
                      pose detection, demonstrating advanced skills in computer vision and model customization.
        </p>
      </div>
                    <div className="w-more">
                      <span className="w-date">1 Jan. 2024</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={work5} data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src={work5} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-12">
                    <h2 className="w-title">School-grievance</h2>
                    <div className="work-description-container">
                    <p className="w-description">
                      Developed a web application using Python and Django, enabling users to view food prices,
                      administrators to add food items with details and prices, and users to place orders.
                      Implemented with MySQL, Bootstrap, HTML, CSS, and JavaScript.
                    </p>
                  </div>
                    <div className="w-more">
                      <span className="w-ctegory"><a href='https://github.com/Suhaibvp/School-grievance' target="_blank" rel="noopener noreferrer">GIT LINK</a></span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      </div>
      </div>
      
      </section>
    )
}
export default Works;