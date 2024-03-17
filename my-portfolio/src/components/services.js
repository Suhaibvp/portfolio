import bgImgae from '../assets/img/hero_bg.jpg'
import React, { useEffect, useRef, useState } from 'react';


function Services() {
    const containerStyle = {
        backgroundColor: 'White',
        color: 'black',
        borderRadius: '20px',
      };
    
      const sectionStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundImage: `url(${bgImgae})`,
      };
    
      const sectionRef = useRef(null);
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const isInViewport = () => {
          const rect = sectionRef.current.getBoundingClientRect();
          const threshold = 0.5;
    
          return (
            rect.top <= window.innerHeight * (1 - threshold) &&
            rect.bottom >= window.innerHeight * threshold
          );
        };
    
        const handleScroll = () => {
          if (isInViewport()) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
    return (
        <section
        id="services"
        className={`services-mf sect-pt4 route bg-image `}
        style={sectionStyle}
        ref={sectionRef}
      >
        <div className="container">
          <div className="row">
            <div id='ServiceContainer' className={`col-sm-12 box-shadow-full ${isVisible ? 'active' : ''}`} style={containerStyle}>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title-box text-center">
                      <h3 className="title-a">Projects</h3>
                      <p className="subtitle-a">
                        "Discover my impactful contributions and innovations at
                        Inthings Technology, spanning diverse projects in
                        technology and software development."
                      </p>
                      <div className="line-mf"></div>
                    </div>
                  </div>
                </div>
                <div className="row h-50">
                    <div className="col-md-4 ">
                        <div className="service-box">
                    <div className="service-ico">
                        <span className="ico-circle"><i class="bi bi-clipboard2-data"></i></span>
                    </div>
                    <div className="service-content">
                        <h2 className="s-title">Anomaly Finding Model</h2>
                        <p className="mb-0">
                            Implemented a Deep Neural Network (DNN) model using TensorFlow to analyze historical data, accurately predicting anomalies in real-time data streams from devices. Applied the model to detect and alert anomalies,showcasing expertise in<strong> Python, TensorFlow, Keras, Delta Table, NumPy, Pandas, PySpark, and PyODBC </strong>. contributing significantly to improved data monitoring and analysis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="service-box">
                    <div className="service-ico">
                        <span className="ico-circle"><i class="bi bi-webcam"></i></span>
                    </div>
                    <div className="service-content">
                        <h2 className="s-title">Cloud video Streaming</h2>
                        <p className="mb-0">
                            Took the lead in developing a scalable solution utilizing <strong>Ant Media Server, Ubuntu, Azure Application Insight, GStreamer, and Python.</strong>  Integrated <strong>YOLOv8 for object detection and tracking</strong>, resulting in an enhanced user experience with improved accessibility and reliability. Demonstrated effective leadership, contributing to the successful implementation of a robust video streaming solution.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="service-box">
                    <div className="service-ico">
                        <span className="ico-circle"><i class="bi bi-android2"></i></span>
                    </div>
                    <div className="service-content">
                        <h2 className="s-title">Xamarin Config App.</h2>
                        <p className="mb-0">
                            Collaborated on the design and implementation of a user-friendly Xamarin Android application for flashing and configuring hardware components. Leveraged skills in<strong> Xamarin, C sharp, XAML, and .NET</strong> to deliver an intuitive and efficient application, enhancing user interaction with hardware configuration processes. Contributed to the improvement of user workflow and device functionality.
                        </p>
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

export default Services;