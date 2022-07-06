import React from "react";

const Service = () => {
  return (
    <section id="services" className="what-we-do sec-pad">
      <div className="thm-container">
        <div className="sec-title text-center">
          <h3 className="broad-title">At Your Service</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 my-2 my-md-4">
            <div className="single-what-we-do-one hvr-bounce-to-bottom">
              <i className="fa fa-gem"></i>
              <a href="/#">
                <h3>Venture Capital</h3>
              </a>
              <p>
                Looking for fundraising for your project? Our Venture Capital is
                here to support you.
              </p>
              <a href="/#" className="read-more fas fa-angle-right"></a>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 my-2 my-md-4">
            <div className="single-what-we-do-one hvr-bounce-to-bottom">
              <i className="fa fa-heart"></i>
              <a href="/#">
                <h3>Incubation</h3>
              </a>
              <p>
                Have an idea, but don't know where to begin? Let us know! We
                have the right services from fundraising to development to
                kickstart it.
              </p>
              <a href="/#" className="read-more fas fa-angle-right"></a>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 my-2 my-md-4">
            <div className="single-what-we-do-one hvr-bounce-to-bottom">
              <i class="fa fa-level-up" aria-hidden="true"></i>
              <a href="/#">
                <h3>Development</h3>
              </a>
              <p>Can't find the right developers? We have them, in house!</p>
              <a href="/#" className="read-more fas fa-angle-right"></a>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 my-2 my-md-4">
            <div className="single-what-we-do-one hvr-bounce-to-bottom">
              <i className="fa fa-gavel"></i>
              <a href="/#">
                <h3>Legal</h3>
              </a>
              <p>
                Our legal services ensure a smooth operation without any risk.
              </p>
              <a href="/#" className="read-more fas fa-angle-right"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
