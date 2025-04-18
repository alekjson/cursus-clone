import React, { useEffect } from "react";
import "./Blog.css";
import Header from "../../components/Header/Header";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogRequest } from "../../redux/reduxActions/blogActions/BlogAction";
import numeral from "numeral";
const Blog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogRequest());
  }, [dispatch]);



  const handleBlogClick = (id) => {
    navigate(`${PATH_NAME.BLOG_SINGLE_VIEW.replace(":id", id)}`, { replace: true });
  };

  return (
    <div className="blog">
      <Header />
      <main className="blog-inner">
        <div className="blog-frame-parent">
          <div className="blog-background">
            <div className="blog-navigation-links-parent">
              <div className="blog-navigation-links">
                <Link to={PATH_NAME.ABOUT_US} className="blog-about">
                  About
                </Link>
              </div>
              <div className="blog-navigation-links-1">
                <Link to={PATH_NAME.OUR_BLOG} className="blog-blog">
                  Blog
                </Link>
              </div>
              <div className="blog-navigation-links-2">
                <Link to={PATH_NAME.COMPANY_DETAILS} className="blog-company">
                  Company
                </Link>
              </div>
              <div className="blog-navigation-links-3">
                <Link to={PATH_NAME.CAREER} className="blog-careers">
                  Careers
                </Link>
              </div>
              <div className="blog-navigation-links-4">
                <Link to={PATH_NAME.PRESS} className="blog-press">
                  Press
                </Link>
              </div>
            </div>
            <div className="blog-heading-2-wrapper">
              <h2 className="blog-heading-2">Insights, ideas, and stories</h2>
            </div>
          </div>
          <div className="blog-background-main">
            <div className="blog-backgroundBorder-parent">
              <form className="blog-backgroundBorder">
                <div className="blog-item">
                  <div className="blog-input">
                    <button className="blog-button-search">
                      <AiOutlineSearch className="blog-icon-search" />
                    </button>
                    <input
                      type="text"
                      className="blog-input-child"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="blog-filter-item">
                  <div className="blog-item-1">
                    <div className="blog-filter-dropdown">
                      <div className="blog-filter-content">
                        <div className="blog-labels">Labels</div>
                        <div className="blog-symbol"></div>
                      </div>
                    </div>

                    <div className="blog-filter-dropdown-1">
                      <div className="blog-filter-content">
                        <div className="blog-labels">Archive</div>
                        <div className="blog-symbol"></div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-item-2">
                    <button className="blog-button-1">
                      <FaTwitter className="blog-icon-twitter" />
                      <div className="blog-follow-twitter">Follow</div>
                    </button>

                    <button className="blog-button-2">
                      <RiFacebookBoxFill className="blog-icon-facebook" />
                      <div className="blog-follow-facebook">Follow</div>
                    </button>
                  </div>
                </div>

                <div className="blog-help-links-wrapper">
                  <div className="blog-help-links">
                    <div className="blog-learn-more-link">
                      <p className="blog-learn-more">Learn More</p>
                    </div>
                    <Link to="#" className="blog-help-center">
                      Cursus Help Center
                    </Link>
                  </div>
                </div>
              </form>

              <div className="blog-backgroundBorder-group">
                {blogs.map((blog) => (
                  <div key={blog.id} className="blog-backgroundBorder-1" onClick={()=>handleBlogClick(blog.id)}>
                    <div className="blog-link">
                      <Link to={PATH_NAME.BLOG_SINGLE_VIEW}>
                        <img
                          src={blog.thumbnails}
                          alt=""
                          className="blog-img-blog"
                        />

                        <div className="blog-gradient" />
                      </Link>
                    </div>
                    <div className="blog-backgroundBorder-inner">
                      <div className="blog-frame-group">
                        <div className="blog-frame-container">
                          <div className="blog-frame-div">
                            <div className="blog-views-parent">
                              <div className="blog-views">
                                {numeral(blog.viewCount)
                                  .format("0.a")
                                  .replace(/m/g, "M")
                                  .replace(/k/g, "K")}{" "}
                                views
                              </div>
                              <div className="blog-point">•</div>
                            </div>
                            <div className="blog-time-post">
                              {blog.createdAt}
                            </div>
                          </div>
                          <Link
                            to={PATH_NAME.BLOG_SINGLE_VIEW}
                            className="blog-title"
                          >
                            {blog.title}
                          </Link>
                        </div>
                        <div className="blog-content-container">
                          <p className="blog-content">{blog.content}</p>
                        </div>
                        <div className="blog-read-more-parent">
                          <Link
                            to={PATH_NAME.BLOG_SINGLE_VIEW}
                            className="blog-read-more"
                          >
                            Read More
                          </Link>
                          <div className="blog-arrow-icon-wrapper">
                            <IoArrowForwardOutline className="blog-arrow-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog-nav-page-navigation-example">
              <div className="blog-link-previous">
                <div className="blog-prev">PREV</div>
              </div>
              <div className="blog-link-1">
                <div className="blog-number-1">1</div>
              </div>
              <div className="blog-link-2">
                <div className="blog-number-2">2</div>
              </div>
              <div className="blog-link-3">
                <div className="blog-number-3">...</div>
              </div>
              <div className="blog-link-4">
                <div className="blog-number-4">24</div>
              </div>
              <div className="blog-link-next">
                <div className="blog-next">NEXT</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
