import React from "react";

function Body() {
  return (
    <div>
      <div className="grid-container">
        <div className="item1 align">Recent</div>
        <div className="item2">
          <div>
            <button className="buttons btnText">
              <img
                className="icon"
                src="https://img.icons8.com/external-others-iconmarket/64/000000/external-box-email-others-iconmarket-3.png"
                alt="icon"
              />
              Inbox
            </button>
            <button className="buttons btnText">
              <img
                className="icon"
                src="https://img.icons8.com/fluency-systems-regular/48/000000/india-national-emblem.png"
                alt="icon"
              />
              Govt Docs
            </button>
            <button className="buttons btnText">
              <img
                className="icon"
                src="https://img.icons8.com/material-outlined/50/000000/smart-home-checked.png"
                alt="icon"
              />
              Home Docs
            </button>
            <button className="buttons btnText">
              <img
                className="icon"
                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-web-browsing-past-history-activity-timeline-tool-basic-bold-tal-revivo.png"
                alt="icon"
              />
              Recent
            </button>
          </div>
        </div>
        <div className="item3">
          <div className="item3">
            <div className="recent-layout">
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/000000/india-national-emblem.png"
                alt=""
              />
              <h4>Adharr Card</h4>
            </div>
            <div className="recent-layout">
              <img
                src="https://img.icons8.com/material-outlined/50/000000/smart-home-checked.png"
                alt=""
              />
              <h4>Electricity Bill</h4>
            </div>
            <div className="recent-layout">
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/000000/india-national-emblem.png"
                alt=""
              />
              <h4>Pan Card</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
