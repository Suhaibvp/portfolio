import work1 from '../assets/img/work_1.png'
import work2 from '../assets/img/work_2.png'
import work3 from '../assets/img/work_3.png'
import work4 from '../assets/img/work_4.png'
import work5 from '../assets/img/work_5.png'
import work6 from '../assets/img/work-6.jpg'

function Works(){
    return (
      <section id="work" class="portfolio-mf sect-pt4 route">
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
          <div className="col-md-4">
            <div className="work-box">
              <a href={work1} data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src={work1} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">FOODBOOK</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
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
                  <div className="col-sm-8">
                    <h2 className="w-title">CONNECTOR - A Social Media Platform.</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
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
                  <div className="col-sm-8">
                    <h2 className="w-title">EPICENE </h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
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
                  <div className="col-sm-8">
                    <h2 className="w-title">COMPUTER VISION</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
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
                  <div className="col-sm-8">
                    <h2 className="w-title">School-grievance</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="work-box">
              <a href={work6} data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src={work6} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Studio Big Bang</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
      </section>
    )
}
export default Works;