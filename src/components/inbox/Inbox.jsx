import React from "react";
import "./inbox.scss";
import inboxImg from "../../assets/inbox.svg";

const Inbox = () => {
  return (
    <div className="container inbox">
      <div className="inbox__left">
        <img src={inboxImg} alt="" />
      </div>
      <div className="inbox__right">
        <p className="p">Join over 15,000+ tech people</p>
        <h1>Get instant alert on your inbox</h1>
        <p>
          We receive over 50 new job submission at our website. Subscribe to our
          newsletter and get instant job alert on your inbox to apply.{" "}
        </p>
        <form action="">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Inbox;
