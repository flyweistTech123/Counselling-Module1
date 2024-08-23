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

const PlacementRecommantation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];

  return (
    <>
      <Navbar2 />

      <div className="collage_recommantaion">
        <div className="recommantation_left_child">
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
          <div className="recommantation_margin">
            <div className="recommantation_margin_child">
              <p>Show Only</p>

              <div className="recommantation_header_list_left">
                <div
                  className={
                    lastPart === "shortlisted_UpsRecommantation"
                      ? "changeColor"
                      : ""
                  }
                >
                  <input
                    type="checkbox"
                    onChange={() => navigate("/shortlisted_UpsRecommantation")}
                  />
                  <label>USP’s</label>
                </div>
                <div
                  className={
                    lastPart === "shortlisted_FacilitiyRecommantaion"
                      ? "changeColor"
                      : ""
                  }
                >
                  <input
                    type="checkbox"
                    onChange={() =>
                      navigate("/shortlisted_FacilitiyRecommantaion")
                    }
                  />
                  <label>Facilities</label>
                </div>
                <div
                  className={
                    lastPart === "shortlisted_PlacementRecommantation"
                      ? "changeColor"
                      : ""
                  }
                >
                  <input
                    type="checkbox"
                    onChange={() =>
                      navigate("/shortlisted_PlacementRecommantation")
                    }
                  />
                  <label>Placements</label>
                </div>
                <div
                  className={
                    lastPart === "shortlisted_CollageFessRecommantation" ? "changeColor" : ""
                  }
                >
                  <input
                    type="checkbox"
                    onChange={() => navigate("/shortlisted_CollageFessRecommantation")}
                  />
                  <label>Course & Fees</label>
                </div>
              </div>
            </div>

            <div className="recommatntaion_right_button">
              <div className="recommantation_short">
                <p>Show Cohort</p>
              </div>

              <div className="recommantation_short">
                <p>Search</p>
              </div>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>
            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>
            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="recommantation_right_div">
            <p>SAM Global Universities (SGU- Bhopal, Madhya Pradesh)</p>

            <div className="recommantation_right_button">
              <div className="button_ups_right_blue">Move to Shortlist</div>
              <div className="button_ups_right_red">Mark- Not Interested</div>
            </div>

            <h6>20 Courses</h6>

            <div className="recommantation_table">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Highest Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementRecommantation;
