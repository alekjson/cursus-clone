import React, { useEffect, useState } from "react";
import "./CertificationTest.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header-paidmember/Header";
import { PATH_NAME } from "../../constant/pathname";
import { Link } from "react-router-dom";

const CertificationTest = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [time, setTime] = useState(3600); // 3600 seconds = 60 minutes

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div>
      <Header />
      <div className="certification_test">
        <div className="certification_test-header">
          <div className="certification_test-container">
            <div className="certification_test-row">
              <div className="certification_test-col-lg-12">
                <div className="ct-title125">
                  <div className="ct-titleleft">
                    <div className="ct-ttl121">
                      <div>
                        <div className="ct-breadcrumb">
                          <p className="breadcrumb-item">
                            <Link className="link" to={PATH_NAME.HOME}>
                              Home
                            </Link>
                          </p>
                          <p className="breadcrumb-item">
                            <Link
                              className="link"
                              to={PATH_NAME.CERTIFICATION_CENTER}
                            >
                              Certification Center
                            </Link>
                          </p>
                          <p
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            <Link
                              className="link"
                              to={PATH_NAME.CERTIFICATION_CENTER}
                            >
                              WordPress Test View
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ct-titleright">
                    <Link
                      to={PATH_NAME.CERTIFICATION_CENTER}
                      className="blog_link"
                    >
                      <i className="uil uil-angle-double-left"></i> Back to
                      Certification Center
                    </Link>
                  </div>
                </div>
                <div className="ct-title126">
                  <h2>WordPress Test View</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="certification_test-question">
          <div className="certification_test-container">
            <div className="certification_test-row">
              <div className={`ct-question ${sticky ? "sticky" : ""}`}>
                <div className="certi_form">
                  <div className="test_timer_bg">
                    <nav className="test_timer_left">
                      <li>
                        <div className="timer_time">
                          <h4>20</h4>
                          <p>Questions</p>
                        </div>
                      </li>
                      <li>
                        <div className="timer_time">
                          <h4>{formatTime(time)}</h4>
                          <p>Minutes</p>
                        </div>
                      </li>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="ct-question-answer">
                <div className="certi_form">
                  <div className="all_ques_lest">
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 1 :-</span>
                        What is the name of the first page you encounter after
                        logging into your web page?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example1"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Dashboard</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example1"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Security question page</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example1"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>WP upgrade option</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example1"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>WPAdmin</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 2 :-</span>
                        what is Wordpress?
                      </div>
                      <div className="ui search focus mt-15">
                        <div className="ui form swdh30">
                          <div className="field">
                            <textarea
                              rows="5"
                              name="answer"
                              id="id_answer"
                              placeholder="Pls explain"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 3 :-</span>
                        How can you get involved with WordPress?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example2"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Attend Word Camp</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example2"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Edit the Codex (documentation)</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example2"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Help in the Forums</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example2"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>All of these</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 4 :-</span>
                        What ways to use WordPress?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example3"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Arcade</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example3"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Blog</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example3"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Content Management System (CMS)</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example3"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>All of the above</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 5 :-</span>
                        What case we cannot recommend WordPress to our client?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example4"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                If client is working on non-CMS base project
                              </label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example4"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                If site wants complex or innovative e-commerce
                              </label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example4"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                In case of enterprise intranet solution
                              </label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example4"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>All of the above</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 6 :-</span>
                        Which relational database does WordPress use?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example5"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>MySQL</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example5"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Oracle</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example5"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>PostgresSQL</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example5"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>MS SQLServer</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 7 :-</span>
                        What are the rules that you have to follow for WordPress
                        plugin development?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example6"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Create a unique name</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example6"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Create the plugin’s folder</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example6"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                Create a sub-folder for PHP files, translations,
                                and assets
                              </label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example6"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>All of these</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 8 :-</span>
                        What are the steps you can take if your WordPress file
                        is hacked?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example7"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                Install security plugins like WP security
                              </label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example7"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                Re-install the latest version of WordPress
                              </label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example7"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                Change password and user-ids for all your users
                              </label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example7"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>All of the above</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 9 :-</span>
                        What is a WordPress taxonomy?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example8"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Category</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example8"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Tag</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example8"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Link Category</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example8"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Post Formats</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example8"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>All of the above</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 10 :-</span>
                        In WordPress, what is the user role with the highest
                        privilege level?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example9"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Administrator</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example9"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Author</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example9"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Editor</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example9"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Contributor</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 11 :-</span>
                        What are rules to follow in WordPress plugin
                        development?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example10"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Find a unique name</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example10"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                Setup a prefix (related to your brand)
                              </label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example10"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Create the plugin’s folder</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example10"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>All of the above</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 12 :-</span>
                        What is Gravatar?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example11"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>A Plugin</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example11"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Globally Recognized Image or Photo</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example11"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>CMS</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 13 :-</span>
                        Types of post format available in Wordpress.
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example12"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>10</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example12"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>11</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example12"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>9</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example12"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>6</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 14 :-</span>
                        How many number of tables in wordpress database
                        available?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example13"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>18</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example13"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>9</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example13"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>6</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example13"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>12</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 15 :-</span>
                        How many free plug self hosted that work on wordpress
                        only?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example14"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>2,000</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example14"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>10,000</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example14"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>30,000</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 16 :-</span>
                        Is Multilingual sites are allowed in Wordpress?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example15"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Yes</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example15"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 17 :-</span>
                        What is name of configuration file in WordPress ?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example16"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>header.php</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example16"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>wp-settings.php</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example16"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>wp-config.php</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example16"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>page.php</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 18 :-</span>
                        What is a permalink?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example17"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>A popular WordPress Plugin</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example17"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                The numeric IP address of your WordPress site
                              </label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example17"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                The complete URL of your WordPress site
                              </label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example17"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>
                                Part of your WordPress URL which you set
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 19 :-</span>
                        How many templates can one theme contain?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example18"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>One</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example18"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Max Ten</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example18"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Max 20</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example18"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Unlimited</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques 20 :-</span>
                        In which programming language WordPress is written?
                      </div>
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example19"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Java</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example19"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Node</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example19"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Php</label>
                            </div>
                          </div>
                          <div className="field fltr-radio">
                            <div className="ui radio checkbox">
                              <input
                                type="radio"
                                name="example19"
                                tabIndex="0"
                                className="hidden"
                              />
                              <label>Javascript</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={PATH_NAME.TEST_RESULT}>
                    <button className="test_submit_btn" type="submit">
                      Submit Test
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CertificationTest;
