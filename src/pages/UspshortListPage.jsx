import React, { useState } from "react";
import Navbar from "../Component/Navbar/Navbar2";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Popover from "react-bootstrap/Popover";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";
import Navbar2 from "../Component/Navbar/Navbar2";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UspshortListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];

  return (
    <>
      <Navbar2 />
      <div className="shortList_collage">
        <p className="short_size_header_font">12 College Shortlisted</p>

        <div className="shortList_header_list">
          <div className="shortList_header_list_parent">
            <p>Show Only</p>

            <div className="shortList_header_list_left">
              <div
                className={lastPart === "shortlisted_ups" ? "changeColor" : ""}
              >
                <input type="checkbox" />
                <label>USP’s</label>
              </div>
              <div
                className={
                  lastPart === "shortlisted_facilty" ? "changeColor" : ""
                }
              >
                <input
                  type="checkbox"
                  onChange={() => navigate("/shortlisted_facilty")}
                />
                <label>Facilities</label>
              </div>
              <div
                className={
                  lastPart === "shortlisted_placement" ? "changeColor" : ""
                }
              >
                <input
                  type="checkbox"
                  onChange={() => navigate("/shortlisted_placement")}
                />
                <label>Placements</label>
              </div>
              <div
                className={
                  lastPart === "shortlisted_course_fess" ? "changeColor" : ""
                }
              >
                <input
                  type="checkbox"
                  onChange={() => navigate("/shortlisted_course_fess")}
                />
                <label>Course & Fees</label>
              </div>
            </div>
          </div>
          <button
            className="button_header_style"
            style={{ textAlign: "right" }}
          >
            Send more info
          </button>
        </div>
      </div>

      <div className="shortList_ups" style={{ marginBottom: "3rem" }}>
        <div className="ups_left_child">
          <p>Refine Search</p>

          <div className="ups_box_div">
            <div className="ups_box_child">
              <p>Location</p>
              <button className="button_ups">Clear</button>
            </div>

            <div className="search_box">
              <input placeholder="search" />
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Bhopal</label>
              </div>

              <div className="circle_class">8</div>
            </div>
          </div>

          <div className="ups_box_div">
            <div className="ups_box_child">
              <p>Degree</p>
              <button className="button_ups">Clear</button>
            </div>

            <div className="search_box">
              <input placeholder="search" />
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>B.tech</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>B.E</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>B.Arch</label>
              </div>

              <div className="circle_class">8</div>
            </div>
          </div>

          <div className="ups_box_div">
            <div className="ups_box_child">
              <p>Specialisation</p>
              <button className="button_ups">Clear</button>
            </div>

            <div className="search_box">
              <input placeholder="search" />
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Computer Science</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Mechanical Engineering</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Civil Engineering</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>E & TC Engineering</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>IT Engineering</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Chemical Engineering</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Data Science</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Cyber Security</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>AI</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Information Technology</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Others</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Mining Engineering</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Agriculture</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Data Analytics</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Architecture</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Internet of things</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>Data Analytics</label>
              </div>

              <div className="circle_class">8</div>
            </div>
          </div>

          <div className="ups_box_div">
            <div className="ups_box_child">
              <p>Budget</p>
              <button className="button_ups">Clear</button>
            </div>

            <div className="search_box">
              <input placeholder="search" />
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>0-2 lac per annum</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>3-5 lac per annum</label>
              </div>

              <div className="circle_class">8</div>
            </div>

            <div className="ups_box_child constant_margin">
              <div>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label>5+ lac per annum</label>
              </div>

              <div className="circle_class">8</div>
            </div>
          </div>
        </div>

        <div className="ups_right_child">
          <div className="ups_right_button">
            <div className="button_ups_right_blue">Move to Shortlist</div>
            <div className="button_ups_right_red">Mark- Not Interested</div>
          </div>

          <div className="ups_main_right_child">
            <div>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>

              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>

              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
              <p>
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UspshortListPage;
