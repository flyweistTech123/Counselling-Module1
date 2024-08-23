import React from "react";
import Navbar2 from "../Component/Navbar/Navbar2";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TimeHeading from "../Component/Time_heading/TimeHeading";

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title
);

const ConverationLeadServe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const data = {
    labels: [
      "Jan-2020",
      "Feb-2020",
      "Mar-2020",
      "Apr-2020",
      "May-2020",
      "Jun-2020",
      "Jul-2020",
      "Aug-2020",
      "Sep-2020",
      "Oct-2020",
      "Nov-2020",
      "Dec-2020",
      "Jan-2021",
      "Feb-2021",
      "Mar-2021",
      "Apr-2021",
      "May-2021",
      "Jun-2021",
      "Jul-2021",
      "Aug-2021",
      "Sep-2021",
      "Oct-2021",
      "Nov-2021",
      "Dec-2021",
    ],
    datasets: [
      {
        label: "User Activity 1",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
        backgroundColor: "#003CC1",
        borderColor: "#003CC1",
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 2,
        pointBackgroundColor: "#003CC1",
        pointBorderColor: "#fff",
      },
      {
        label: "User Activity 2",
        data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        backgroundColor: "#C5F5AE",
        borderColor: "#208B06",
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 2,
        pointBackgroundColor: "#208B06",
        pointBorderColor: "#fff",
      },
      {
        label: "User Activity 3",
        data: [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#B93775",
        borderColor: "#B93775",
        pointRadius: 5,
        pointHitRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 2,
        pointBackgroundColor: "#B93775",
        pointBorderColor: "#fff",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "category",
        offset: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Week of the year",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "COUNT",
        },
      },
    },
  };

  return (
    <div className="conatainer1111111">
      <Navbar2 />

      <div className="conver-container">
        <p>Weekly Analysis of Lead</p>
        <div className="conver_top_parent">
          <div className="conver_top_child">
            <div
              style={{
                width: "68px",
                height: "29px",
                backgroundColor: "#C5F5AE",
                border: "1px solid #208B06"
              }}
            ></div>
            <p>User Activity</p>
          </div>
          <div className="conver_top_child">
            <div
              style={{
                width: "68px",
                height: "29px",
                backgroundColor: "#A9C0F5",
                border: "1px solid #003CC1"
              }}
            ></div>
            <p>L2 Activity</p>
          </div>
          <div className="conver_top_child">
            <div
              style={{
                width: "68px",
                height: "29px",
                backgroundColor: "#F6C2DB",
                border: "1px solid #B93775"
              }}
            ></div>
            <p>L3 Activity</p>
          </div>
        </div>

        <div className="my-chart">
          <Line data={data} options={options} style={{ width: "100%" }} />
        </div>
      </div>

      <div className="coverage_main_header">
        <div className={lastPart === "conversationActivity" ? "changeColor" : ""}>
          <input
            type="checkbox"
            onChange={() => navigate("/conversationActivity")}
          />
          <label>Activity</label>
        </div>
        <div
          className={lastPart === "conversationActivity" ? "changeColor" : ""}
        >
          <input
            type="checkbox"
            onChange={() => navigate("/conversationActivity")}
          />
          <label>Remarks</label>
        </div>
        <div
          className={lastPart === "ConverationL3Activity" ? "changeColor" : ""}
        >
          <input
            type="checkbox"
            onChange={() => navigate("/ConverationL3Activity")}
          />
          <label>L3 Remarks</label>
        </div>
        <div
          className={
            lastPart === "ConverationLeadServe" ? "changeColor" : ""
          }
        >
          <input
            type="checkbox"
            onChange={() => navigate("/ConverationLeadServe")}
          />
          <label>Lead Score</label>
        </div>
        <div
          className={
            lastPart === "shortlisted_course_fess" ? "changeColor" : ""
          }
        >

          <label>All</label>
        </div>
      </div>

      <div className="converation-table">
        <table>
          <thead>
            <tr>
              <th>Attribute Label</th>
              <th>Value</th>
              <th>Info Provided</th>

            </tr>
          </thead>
          <tbody>


            <tr>
              <td>
                Partner colleges visited
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Relevant Exam Visited
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Relevant Content Visited                    </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Similar to partner colleges visited                    </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Rank predictor range (75 Percentile)
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                OTP Verified
              </td>
              <td>False</td>
              <td></td>
            </tr>


            <tr>
              <td>
                Talk to counsellor - chatbot
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Partner college - related queries -Chatbot
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Relevant Exam - related queries -Chatbot
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                75 percentile cut -off & eligibility queries : Chatbot
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                CTA (Get free counselling, Talk to counsellor, Help me apply)
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                My profile % filled (90%) (to apply to partner colleges)
              </td>
              <td>False</td>
              <td></td>
            </tr>
            <tr>
              <td>
                Interaction on email/SMS (Related to partner college)
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Interaction on generic Email/SMS                    </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                My Log In                    </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Name
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Phone (Not Verified)
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Email (Not Verified)
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Preferred Stream
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Preferred Location
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Current Location
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Preferred Level
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Intent to take admission current season
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Intent to talk to counsellor
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                XII Marks
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                X Marks
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Budget
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Partner college lead submitted
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Relevant exam lead submitted
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Relevant content lead submitted
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                Number of times Lead Submitted
              </td>
              <td>False</td>
              <td></td>
            </tr>

            <tr>
              <td>
                PREFERRED_CALLING_RELATED_QUERIES_CHATBOT
              </td>
              <td>False</td>
              <td></td>
            </tr>


          </tbody>
        </table>
      </div>


      <TimeHeading />
      <div className="conversation-container">
        <div className="conversation-container1">
          <div>
            <h6>6:21 PM</h6>
            <div>
              <p>(lorenepsom@gmail.com)</p>
              <p>Connectivity Status : Not connected</p>
              <p>Intent status : Low</p>
              <p>Callback scheduled for</p>
              <span>Jun 1, 2023 11:00:00 PM</span>
            </div>
          </div>

          <div>
            <h6>PNR</h6>
          </div>
        </div>
      </div>
      <div className="conversation-container">
        <div className="conversation-container1">
          <div>
            <h6>6:21 PM</h6>
            <div>
              <p>(lorenepsom@gmail.com)</p>
              <p>Connectivity Status : Not connected</p>
              <p>Intent status : Low</p>
              <p>Callback scheduled for</p>
              <span>Jun 1, 2023 11:00:00 PM</span>
            </div>
          </div>

          <div>
            <h6>PNR</h6>
          </div>
        </div>
      </div>
      <div className="conversation-container">
        <div className="conversation-container1">
          <div>
            <h6>6:21 PM</h6>
            <div>
              <p>(lorenepsom@gmail.com)</p>
              <p>Connectivity Status : Not connected</p>
              <p>Intent status : Low</p>
              <p>Callback scheduled for</p>
              <span>Jun 1, 2023 11:00:00 PM</span>
            </div>
          </div>

          <div>
            <h6>PNR</h6>
          </div>
        </div>
      </div>
      <TimeHeading />
      <div className="conversation-container">
        <div className="conversation-container1">
          <div>
            <h6>6:21 PM</h6>
            <div>
              <p>(lorenepsom@gmail.com)</p>
              <p>Connectivity Status : Not connected</p>
              <p>Intent status : Low</p>
              <p>Callback scheduled for</p>
              <span>Jun 1, 2023 11:00:00 PM</span>
            </div>
          </div>

          <div>
            <h6>PNR</h6>
          </div>
        </div>
      </div>
      <TimeHeading />
      <div className="conversation-container">
        <div className="conversation-container1">
          <div>
            <h6>6:21 PM</h6>
            <div>
              <p>(lorenepsom@gmail.com)</p>
              <p>Connectivity Status : Not connected</p>
              <p>Intent status : Low</p>
              <p>Callback scheduled for</p>
              <span>Jun 1, 2023 11:00:00 PM</span>
            </div>
          </div>

          <div>
            <h6>PNR</h6>
          </div>
        </div>
      </div>
      <div className="conversation-container">
        <div className="conversation-container1">
          <div>
            <h6>6:21 PM</h6>
            <div>
              <p>(lorenepsom@gmail.com)</p>
              <p>Connectivity Status : Not connected</p>
              <p>Intent status : Low</p>
              <p>Callback scheduled for</p>
              <span>Jun 1, 2023 11:00:00 PM</span>
            </div>
          </div>

          <div>
            <h6>PNR</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverationLeadServe;