import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
      slider.current.style.transform = `translatex(${tx}%)`;
    }
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
      slider.current.style.transform = `translatex(${tx}%)`;
    }
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
              </div>
              <div>
                <h3>William Jackson</h3>
                <span>Academia ,USA</span>
              </div>
              <p>
                Enrolling at Academia was one of the smartest choices I've ever
                made. The nurturing community, modern facilities, and unwavering
                focus on academic achievement have greatly enriched my
                educational experience.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
              </div>
              <div>
                <h3>Vinay Jackson</h3>
                <span>Academia ,USA</span>
              </div>
              <p>
                Choosing to pursue my degree at Academia was one of the best
                decisions I've ever made. The supportive community ,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
              </div>
              <div>
                <h3>Diana MoZ</h3>
                <span>Academia ,USA</span>
              </div>
              <p>
                Deciding to study at Academia has proven to be an outstanding
                choice. The encouraging community, state-of-the-art resources,
                and strong commitment to academic quality have gone above and
                beyond what I anticipated.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
              </div>
              <div>
                <h3>Robin Klara</h3>
                <span>Academia ,USA</span>
              </div>
              <p>
                Enrolling at Academia was one of the smartest choices I've ever
                made. The nurturing community, modern facilities, and unwavering
                focus on academic achievement have greatly enriched my
                educational experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
