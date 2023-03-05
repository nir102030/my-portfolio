import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Frontend Developer at Kaltura{" "}
                          <span>2021-present</span>
                        </h2>
                        <p>
                          Kaltura is an Israeli company specialized on
                          delivering high quality video based products, like
                          virtual events platform or a virtual classroom
                          platform. The product I'm working on is a Cloud TV
                          app, that allows media and telecom companies release
                          an end-to-end TV app to their users in less then a few
                          months. I'm working on the client side of the app,
                          using React Native and TypeScript, and was part of the
                          first coding lines of this app. The app is now in
                          production, with more then million households
                          worldwide.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Mobile and Web development Freelance{" "}
                          <span>2020-2021</span>
                        </h2>
                        <p>
                          While working on several projects I'm currently making
                          my first steps as a mobile and web freelance
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Application Engineer at Quality Forward{" "}
                          <span>2019-2021</span>
                        </h2>
                        <p>
                          Quality Forward is an early stages startup in the
                          E-QMS field. My responsibilites are developing new
                          features, taking care of costumer requirements,
                          performing integrations etc. Some of my work involve
                          coding and some involve communication with the
                          customers in order to get wider understanding of their
                          needs and to supply the best result in the system. In
                          my work I'm using JS, Ajax, Jquery, HTML, Python, HTTP
                          protocol and more.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduate at Ben-Gurion University{" "}
                          <span>2016-2020</span>
                        </h2>
                        <p>
                          I did my bachelor's degree in Industrial Engineering
                          majoring in Information Systems. I have taken courses
                          like OOP in JAVA, DBs, Algorithms, Machine Learning
                          etc. and have better understanding of these subjects.
                          I have also took some external courses on mobile and
                          web development.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
