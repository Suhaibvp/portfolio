import blog1 from '../assets/img/Designer (6).jpg'
import blog2 from '../assets/img/test2 (1).jpg'
import userImage from '../assets/img/hero_bg.jpg';
import bgImgae from '../assets/img/hero_bg.jpg'
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card.tsx';



 



function Blog(){
  const sectionStyle={
    backgroundImage: `url(${bgImgae})`, 
  }
  const containerStyle={
    backgroundColor:'White',
    color:'black',
    borderRadius:'20px',
  }
    return(
      <section id="blog" class="blog-mf sect-pt4 route bg-image" style={sectionStyle}>
                <div className="container">
    <div className="row" >
      <div className="col-sm-12 box-shadow-full" style={containerStyle}>
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Blog
              </h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">

          <div className="col-md-4">
          <CardContainer className="inter-var skillContainer">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.0] dark:bg-black  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="card card-blog">
              <div className="card-img">
                <a href='https://suhaib-blogs.netlify.app/articles/convolution'>
                    <CardItem
                        translateZ="100"
                        rotateX={0}
                        rotateZ={0}
                        className="w-full mt-3">
                <img
                  src={blog1}
                  className="img-fluid h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
                </CardItem>

                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">

                    <h6 className="category">Convolution</h6>
                    
                  </div>
                </div>
                <CardItem
                  translateZ="50"
                  className="text-s font-bold text-neutral-600 dark:text-white"
                  >
                  <a href="https://suhaib-blogs.netlify.app/articles/convolution">Convolution-The Mathematical Core of Image Processing
                  </a>

                </CardItem>
                <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
                <p className="card-description">
                Convolution is a mathematical operation that stands at the heart of digital image processing, seamlessly merging the realms of mathematics and visual data manipulation
                </p>
                </CardItem>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#about">
                    <img src={userImage} alt="" className="avatar rounded-circle" />
                    <span className="author">Suhaib-VP</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
            </CardBody>
            </CardContainer>
          </div>


          <div className="col-md-4">
          <CardContainer className="inter-var skillContainer">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="card card-blog">
              <div className="card-img">
                <a href='#blog'>
                    <CardItem
                        translateZ="100"
                        rotateX={0}
                        rotateZ={0}
                        className="w-full mt-3">
                <img
                  src={blog2}
                  className="img-fluid h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
                </CardItem>

                </a>
              </div>
              <div className="card-body">
                <div className="card-category-box">
                  <div className="card-category">

                    <h6 className="category">Convolution</h6>
                    
                  </div>
                </div>
                <CardItem
                  translateZ="50"
                  className="text-s font-bold text-neutral-600 dark:text-white"
                  >
                  <a href="#blog">Convolution-The Mathematical Core of Image Processing
                  </a>

                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                <p className="card-description">
                Convolution is a mathematical operation that stands at the heart of digital image processing, seamlessly merging the realms of mathematics and visual data manipulation
                </p>
                </CardItem>
              </div>
              <div className="card-footer">
                <div className="post-author">
                  <a href="#about">
                    <img src={userImage} alt="" className="avatar rounded-circle" />
                    <span className="author">Suhaib-VP</span>
                  </a>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
            </CardBody>
            </CardContainer>
          </div>

        </div>
      </div>
      </div>
      </div>
      </div>
      
      </section>
    )
}
export default Blog;