import React, { useEffect, useState } from "react";
import "./findJob.scss";
import axios from "axios";
import location from "../../assets/location.svg";

const FindJob = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <div className="find-job">
      <div className="find-job__header container">
        <h1>Find a job <br /> that you love</h1>
        <button>See All 2359 Jobs</button>
      </div>
      <div className="find-job__body container">
        {data?.users.map((el) => (
          <div key={el.id} className="find-job__body__card">
            <div className="find-job__body__card__header">
              <div>
                <img src={location} alt="" />
                <p>
                  {el.address.city},{el.address.country}
                </p>
              </div>
              <span>Full time</span>
            </div>
            <div className="find-job__body__card__body">
              <p> {el.university}</p>
              <p>{el.company.name}</p>
            </div>
            <div className="find-job__body__card__bottom">
              <img width={34} src={el.image} alt="" />
              <div className="find-job__body__card__bottom__profile">
                {el.firstName}
                {el.lastName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJob;
