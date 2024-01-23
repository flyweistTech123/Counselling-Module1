import React from 'react'
import './search.css'
import Add from '../../image/Add.png';
import Arrow from '../../image/arrow.png';
import Phone from '../../image/icon_phone.png';
import Solid from '../../image/solid_phone.png';
import Notepad from '../../image/search1.png';
import Navbar from '../Navbar/Navbar';

const data = [
  { "id": "1", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "2", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "3", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "4", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "5", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "6", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "7", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "8", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "9", "college": "Jagran Lakecity University", "student": "5" },
  { "id": "10", "college": "Jagran Lakecity University", "student": "5" },
];


export const Search = () => {
  return (
    <>
      <Navbar />

      <div className="search01">
        <div className="search03">
          <div className="search04">
            <span>All time Lead</span>
            <span>9</span>
          </div>
          <div className="search04">
            <span>Taken Admission Leads</span>
            <span>9</span>
          </div>

        </div>

        <div className="search05">

          <button className="search06">
            Add New Student
          </button>
          <button className="search07">
            View All 9 Leads
          </button>
        </div>
        <div className="search08">
          <div className="search13">
            <div className="search09">
              <img src={Add} alt="icon" />
              <div className="add">
                <span>0</span>
                <span>New Assignment Lead</span>
              </div>

            </div>
            <div className="arrow">
              <span>New Assignment Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="search13">
            <div className="search10">
              <img src={Phone} alt="icon" />
              <div className="add">
                <span>0</span>
                <span>Interested Lead</span>
              </div>

            </div>
            <div className="arrow">
              <span>Interested Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="search13">
            <div className="search10">
              <img src={Solid} alt="icon" />
              <div className="add">
                <span>0</span>
                <span>Callback Lead</span>
              </div>

            </div>
            <div className="arrow">
              <span>Callback Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>

          <div className="search13">
            <div className="search10">
              <img src={Notepad} alt="icon" />
              <div className="add">
                <span>0</span>
                <span>Favourite marked Lead</span>
              </div>

            </div>
            <div className="arrow">
              <span>Favourite marked Lead</span>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>

        </div>
        <div className="search14">
          <div className="search15">
            <span>Institute wise filter</span>
          </div>
          <div className="search16">
            <table className="custom-table">
              <thead>
                <tr>

                  <th>College</th>
                  <th>Student</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>

                    <td className='college1'>{item.college}</td>
                    <td>{item.student}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>




      </div>

    </>
  )
}
