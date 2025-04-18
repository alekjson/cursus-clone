import React, { useEffect, useState } from "react";
import "./CommingSoon.css";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
const CommingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="Thanks-wrapper">
      <div className="Thanks-row">
        <div className="Thanks-col-md-12">
          <div className="Thanks-cmtk_group">
            <Link to={PATH_NAME.HOME}>
              <div className="Thanks-ct-logo">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg"
                  alt=""
                />
              </div>
            </Link>

            <div className="Thanks-cmtk_dt">
              <div className="cs-time">
                <div className="cs-timer">
                  <span className="cs_coming_title">
                    {timeLeft.days || "0"} :
                  </span>
                  <label>Days</label>
                </div>
                <div className="cs-timer">
                  <span className="cs_coming_title">
                    {timeLeft.hours || "00"} :
                  </span>
                  <label>Hours</label>
                </div>
                <div className="cs-timer">
                  <span className="cs_coming_title">
                    {timeLeft.minutes || "00"} :
                  </span>
                  <label>Minutes</label>
                </div>
                <div className="cs-timer">
                  <span className="cs_coming_title">
                    {timeLeft.seconds || "00"}
                  </span>
                  <label>Seconds</label>
                </div>
              </div>
              <h4 className="cs-thnk_title1">We will be comming soon!</h4>
              <div className="cs-search">
                <form>
                  <div className="cs-search-box">
                    <div className="cs-search-input">
                      <input
                        className="cs-input"
                        type="email"
                        name="emailaddress"
                        id="id_email"
                        required=""
                        maxLength="64"
                        placeholder="Email address"
                      />
                      <button className="cs-submit" type="submit">
                        Notify Me
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="Thanks-tc_footer_main">
              <div className="Thanks-tc_footer_left">
                <ul>
                  <li>
                    <a href="about_us.html">About</a>
                  </li>
                  <li>
                    <a href="press.html">Press</a>
                  </li>
                  <li>
                    <a href="contact_us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="coming_soon.html">Advertise</a>
                  </li>
                  <li>
                    <a href="coming_soon.html">Developers</a>
                  </li>
                  <li>
                    <a href="terms_of_use.html">Copyright</a>
                  </li>
                  <li>
                    <a href="terms_of_use.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms_of_use.html">Terms</a>
                  </li>
                </ul>
              </div>
              <div className="Thanks-tc_footer_right">
                <p>
                  © 2024 <strong>Cursus</strong>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
