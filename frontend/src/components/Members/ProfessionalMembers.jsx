import React from "react";
import "./style.scss";
function ProfessionalMembers() {
  return (
    <section>
      <div className="container">
        <div className="section_wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <hr
              style={{
                width: "10%",
                height: "2px",
                border: "none",
                background: "red",
              }}
            />
            <h3>OUR PROFESSIONAL MEMBERS</h3>
          </div>
          <h1>Our Team Mambers</h1>
          <ul>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
                alt="member"
              />
              <span>Ethan Welch</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <hr
                  style={{
                    width: "10%",
                    height: "2px",
                    border: "none",
                    background: "red",
                  }}
                />
                <h3>OUR TOP SERVICES</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalMembers;
