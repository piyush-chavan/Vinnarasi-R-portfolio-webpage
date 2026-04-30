import React, { useEffect } from "react";
import ScrollToHashElement from "./ScollTOHashElement";
import TeamContainer from "./TeamContainer";

export default function Team() {
  useEffect(() => {
    // Initialize all tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <div>
      <ScrollToHashElement />
      

      <div className="mam-container">
        <div className="profile-container">
          <div className="profile-div">
            <img
              style={{ borderRadius: "50%" }}
              width="100%"
              src={require("../assets/vinnarasi.png")}
            />
          </div>
          <div>
            <p className="title_2">Vinnarasi Rajendran</p>
            <p className="title_3">
              Assistant Professor <br />
              Department of Civil Engineering <br />
              IIT Roorkee.
            </p>
          </div>
          <div style={{ textAlign: "start", paddingLeft: "20%" }}>
            <p className="text-2">
              <i class="fa-solid fa-envelope"></i> vinnarasi@ce.iitr.ac.in{" "}
              <br />
              <i class="fa-solid fa-globe"></i> faculty.iitr.ac.in/vinnarasi
            </p>
            <p style={{ textAlign: "start" }}>
              <a
                href="http://faculty.iitr.ac.in/~vinnarasi/"
                title="Personal Website"
                data-bs-toggle="tooltip"
                target="_blank"
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                  fontWeight: "500",
                  color: "black",
                }}>
                <i class="fa-solid fa-globe"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vinnarasi-rajendran-06325b1aa/"
                title="Linked in"
                data-bs-toggle="tooltip"
                target="_blank"
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                  fontWeight: "500",
                  color: "#0077B5",
                }}>
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://scholar.google.co.in/citations?user=slQCU7sAAAAJ&hl=en"
                title="Google Scholar"
                data-bs-toggle="tooltip"
                target="_blank"
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                  fontWeight: "500",
                  color: "#0077B5",
                }}>
                <i class="fa-brands fa-google-scholar"></i>
              </a>
              <a
                href="https://orcid.org/0000-0001-9834-6779"
                title="ORC id"
                data-bs-toggle="tooltip"
                target="_blank"
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                  fontWeight: "500",
                  color: "green",
                }}>
                <i class="fa-brands fa-orcid"></i>
              </a>
              <a
                href="https://www.researchgate.net/profile/Vinnarasi-Rajendran-3"
                title="Research Gate"
                data-bs-toggle="tooltip"
                target="_blank"
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                  fontWeight: "500",
                  color: "#00ccbb",
                }}>
                <i class="fa-brands fa-researchgate"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="description-container">
          <p className="title_2">About</p>
          <p
            className="text-1"
            style={{
              padding: "20px",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "justify",
            }}>
            Dr. R. Vinnarasi is an Assistant Professor in the Department of
            Civil Engineering at IIT Roorkee. Before joining IIT Roorkee, she
            held academic positions at IIT Delhi and Sharda University. She
            earned her PhD in Water Resources Engineering from IIT Delhi, where
            she received the Distinction in Doctoral Research Award in 2019.
            Additionally, she was honoured with the Prof. U.C. Kothyari Best PhD
            Thesis Award 2020 by the Indian Society of Hydraulics at HYDRO 2020,
            NIT Rourkela, Odisha, India. At IIT Roorkee, Dr. Vinnarasi leads the
            Water Extremes Research Group, focusing on hydro-climatological
            extremes, regional hydrological modelling, hydrological hazards,
            water accounting, multivariate hydrological analysis, climate and
            ecological resilience, and the detection and attribution of extreme
            events.
          </p>
        </div>
      </div>
      <hr />
      <TeamContainer />
    </div>
  );
}
