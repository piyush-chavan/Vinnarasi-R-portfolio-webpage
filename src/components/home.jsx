import React, { useEffect, useState, useRef } from 'react'
import Achievements from './Achievements';
import ResearchInterests from './ResearchInterests';

export default function Home() {
    const [more, setMore] = useState(false);
    useEffect(() => {
        // Initialize all tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);
    const scrollRef = useRef(null);

    useEffect(() => {
        const box = scrollRef.current;

        function autoScroll() {
            if (!box) return;

            if (box.scrollTop + box.clientHeight >= box.scrollHeight) {
                // If reached bottom, scroll back to top
                box.scrollTop = 0;
            } else {
                box.scrollTop += 1; // scroll 1px per step
            }
        }

        const interval = setInterval(autoScroll, 30); // adjust speed here

        return () => clearInterval(interval); // cleanup on unmount
    }, []);
    return (
        <div>
            <div className="mam-container">

                <div className='profile-container'>
                    <div className='profile-div'>
                        <img style={{ borderRadius: '50%' }} width='100%' src={require('../assets//vinnarasi.png')} />
                    </div>
                    <div>
                        <p className='title_2'>Vinnarasi Rajendran</p>
                        <p className='title_3'>
                            Assistant Professor <br />
                            Department of Civil Engineering <br />
                            IIT Roorkee.
                        </p>
                    </div>
                    <div style={{ textAlign: 'start', paddingLeft: '10%' }}>
                        <p className='text-2'>
                            <i class="fa-solid fa-envelope"></i> vinnarasi@ce.iitr.ac.in <br />
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
                    <p className="text-1" style={{ padding: '20px', fontSize: '18px', fontWeight: '400', textAlign: 'justify' }}>
                        Dr. R. Vinnarasi is an Assistant Professor in the Department of Civil Engineering at IIT Roorkee. Before joining IIT Roorkee, she held academic positions at IIT Delhi and Sharda University. She earned her PhD in Water Resources Engineering from IIT Delhi, where she received the Distinction in Doctoral Research Award in 2019. Additionally, she was honoured with the Prof. U.C. Kothyari Best PhD Thesis Award 2020 by the Indian Society of Hydraulics at HYDRO 2020, NIT Rourkela, Odisha, India. At IIT Roorkee, Dr. Vinnarasi leads the Water Extremes Research Group, focusing on hydro-climatological extremes, regional hydrological modelling, hydrological hazards, water accounting, multivariate hydrological analysis, climate and ecological resilience, and the detection and attribution of extreme events.
                    </p>
                    <button className='btn btn-warning' onClick={() => setMore(!more)}>{more ? "Show less" : "Show more"}</button>
                </div>
                <br />
                {
                    more ?
                        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 5%' }}>
                            <div style={{ flex: '1', padding: '30px' }}>
                                <ResearchInterests />
                            </div>
                            <div style={{ flex: '2', padding: '30px' }}>
                                <Achievements />
                            </div>
                        </div>
                        : null
                }

            </div>
            <div className="sponser-updates-container">
                <div className="sponsers">
                    <p style={{ textAlign: 'center' }} className="section-title">Funding Agencies and Collaborators</p>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/dst-logo.webp')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/nrf_logo.png')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/iisc-banglore-logo.png')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/cssri_logo.jpeg')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/nwo-1-logo.png')} alt="" />
                        </div>
                        <div style={{ height: '50px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/wageningen-university-and-research-logo.jpg')} alt="" />
                        </div>
                        <div style={{ height: '30px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/tudelft_logo.png')} alt="" />
                        </div>
                        <div style={{ height: '50px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/irriwatch.com_Logo.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div ref={scrollRef} className="lab-updates">
                    <p style={{ textAlign: 'center', position: 'sticky', top: 0, backgroundColor: '#ffffffff' }} className="section-title">Lab Updates</p>

                    <div className="year">2026</div>
                    <ul class="updates">
                        <li class="update-item">
                            Mr. Usman Mohseni will be presenting his work titled “A Bayesian Copula-Based Integrated Drought Index for Compound Drought Monitoring in India” at the EGU General Assembly 2026.
                        </li>
                        <li class="update-item">
                            Ms. Aakanksha Agrawal will be presenting her work titled "WRF Hindcast Sensitivity for Delhi's 28 June 2024 Extreme Rainfall: Role of Boundary Conditions, Microphysics, and Initial Time" at the EGU General Assembly 2026.
                        </li>
                        <li class="update-item">
                            Mr. Muskula Sai Bargav Reddy will be presenting his work titled “Are Existing Water Quality Indices (WQIs) Fit for Purpose? Evaluating Their Applicability to Irrigation Surface Water Quality” at the EGU General Assembly 2026.
                        </li>
                        <li class="update-item">
                            Mr. Nikhil Ghodichore will be presenting his work titled “Multivariate driver analysis and moisture attribution of the December 2023 Tuticorin floods” at the EGU General Assembly 2026.
                        </li>
                        <li class="update-item">
                            Ms. P. Kumari will be presenting her work titled “Hydroclimatic Stress in India: Methodological Innovation and Agricultural Relevance of Stand-Alone Flash Droughts” at the EGU General Assembly 2026.
                        </li>
                        <li class="update-item">
                            Mr. Vivek Tiwari will be presenting his work titled “Can Agricultural Nitrate Leaching to Groundwater Be Reduced Without Compromising Crop Yields?” at the EGU General Assembly 2026.
                        </li>
                        <li class="update-item">
                            Ms. Aayusha Kumari Mishra will be presenting her work titled “Assessment of Partial Blockage in Urban Drains for Flood Risk Reduction” at the EGU General Assembly 2026.
                        </li>
                    </ul>
                    <div class="year">2025</div>
                    <ul class="updates">
                        <li class="update-item">Mr. Dikshant Bodana presented his work titled “The Hidden Cost of Agriculture: Groundwater Overdraft and Nutrient Pollution in the Hindon Basin” at the 22nd Annual Meeting of the Asia Oceania Geosciences Society (AOGS 2025).</li>
                        <li class="update-item">Mr. Vivek Tiwari presented his work titled “Evaluating Non-Point Source Pollution in the Indo-Gangetic Plains: A Case Study of the Hindon River, India AOGS (2025).</li>
                        <li class="update-item">Ms. Pallavi Kumari presented her work titled: “A Strategic Framework for Detection and Analysis”, AOGS2025, Singapore, 27 July–1 August 2025 (Abstract accepted for oral presentation).</li>
                        <li class="update-item">Mr. Usman Mohseni presented his work titled: “When Day Meets Night: Unravelling the Hotspots of Compound Heat Stress in India”, AOGS2025, Singapore, 27 July–1 August 2025 (Abstract accepted for oral presentation).</li>
                        <li class="update-item">Ms. Pallavi Kumari presented her work titled: “Enhanced Modulation of Rapid/Flash Drought in India: An Elegant Framework”, EGU General Assembly 2025, Vienna, Austria, 27 Apr–2 May 2025, <a href="https://doi.org/10.5194/egusphere-egu25-705" target="_blank">EGU25-705</a>.</li>
                        <li class="update-item">Mr. Usman Mohseni presented his work titled “A Copula Framework for the Development of an Integrated Heat Index and Joint Return Period Analysis”, EGU General Assembly 2025, Vienna, Austria, 27 Apr–2 May 2025, <a href="https://doi.org/10.5194/egusphere-egu25-18878" target="_blank">EGU25-18878</a> (On-site Poster).</li>
                        <li class="update-item">Mr. Muskula Sai Bargav Reddy presented his work titled “Analyzing the Historical and Projected Evolution of the Global Diurnal Temperature Range (DTR)”, EGU General Assembly 2025, Vienna, Austria, 27 Apr–2 May 2025, <a href="https://doi.org/10.5194/egusphere-egu25-18740" target="_blank">EGU25-18740</a> (Online Oral Presentation).</li>
                        <li class="update-item">Mr. Ankush published his research work titled: “Integrating regionalisation, uncertainty, and nonstationarity in modelling extreme rainfall events in India”. Journal of Environmental Management, 376, 124377.</li>
                    </ul>

                    <div class="year">2024</div>
                    <ul class="updates">
                        <li class="update-item">Mr. Ankush published his research work titled “Modelling climate change-induced nonstationarity in rainfall extremes: A comprehensive approach for hydrological analysis”. Technological Forecasting and Social Change, 208, 123693.</li>
                        <li class="update-item">Mr. Ankush presented his work titled: “Addressing Nonstationarity in Extreme Rainfall Patterns: A Case Study on Indian Cities”. In EGU General Assembly Conference Abstracts (p. 858).</li>
                        <li class="update-item">Mr. Dikshant Bodana presented his work titled: “Green Remediation: Canna Indica for Sustainable Detoxification of Metals and Excess Nutrients”. In EGU General Assembly Conference Abstracts (p. 11102) (Oral Presentation).</li>
                        <li class="update-item">Ms. Pallavi Kumari presented her work titled: “Evidence of Flash/Rapid Drought in India based on Precipitation Deficit – A new Climatic Threat”, EGU General Assembly 2024, Vienna, Austria, 14–19 Apr 2024, <a href="https://doi.org/10.5194/egusphere-egu24-11083" target="_blank">EGU24-11083</a> (On-site Oral Presentation).</li>
                        <li class="update-item">Mr. Muskula Sai Bargav Reddy presented his work titled: “Unravelling the Widespread Asymmetric Trends of Maximum and Minimum Temperature in Coastal Regions of India and the Continental United States”. In 104th AMS Annual Meeting Abstracts (Vol. 2024, pp. V34).</li>
                        <li class="update-item">Mr. Usman Mohseni presented his work titled: “Unveiling India's Heat Stress: Trends, Characterization, and Spatial Variation (1981–2023),” AGU Fall Meeting, Washington, D.C., 9–13 December 2024 (Online).</li>
                        <li class="update-item">Mr. Usman Mohseni received Commonwealth Split-site Scholarship (2024), tenable at Cranfield University for studies in Compound Flooding.</li>
                        <li class="update-item">Mr. Usman Mohseni received the DAAD Scholarship Award, 2024.</li>
                    </ul>

                    <div class="year">2023</div>
                    <ul class="updates">
                        <li class="update-item">Mr. Ankush presented his work titled: “Modeling nonstationary rainfall extremes in changing climate”. In XXVIII General Assembly of the International Union of Geodesy and Geophysics (IUGG). GFZ German Research Centre for Geosciences.</li>
                        <li class="update-item">Mr. Vivek Tiwari presented his work titled “Time to Switch: Switchgrass for Water Quality Improvements and Biofuel Production” at SWAT 2023 conference.</li>
                        <li class="update-item">Ms. Pallavi Kumari presented her work titled: “A Non-stationarity Based Approach for the Assessment of Agricultural Drought in Different Climatic Regions of India”. AGU Fall Meeting (Vol. 2023, pp. H33W-09).</li>
                        <li class="update-item">Mr. Muskula Sai Bargav Reddy presented his work titled “Widespread Asymmetric Trends of Maximum and Minimum Temperature in Urbanised Regions of India and the Continental United States” in AGU Fall Meeting Abstracts (Vol. 2023, pp. GC33M-1314).</li>
                        <li class="update-item">Mr. Usman Mohseni presented his work titled “Advancing Drought Assessment: A Novel Composite Modified Standardised Drought Index for Enhancing Water Resource Management and Resilience,” AGU Fall Meeting, San Francisco, CA, 11–15 December 2023 (Online).</li>
                        <li class="update-item">Mr. Usman Mohseni presented his work titled "Addressing the Cascading Effects of Compound Extreme Events in India." Presented at the IDRiM 2023 International Conference, IIT Roorkee, 27–30 September 2023, Roorkee, Uttarakhand, India.</li>
                        <li class="update-item">Mr. Muskula Sai Bargav Reddy presented his work titled “Deep Learning-Based LSTM Model for Forecasting Water Quality in the Godavari River”. In AGU Fall Meeting Abstracts (Vol. 2023, pp. H43D-2107).</li>
                        <li class="update-item">Ms. Aakanksha Agrawal awarded with the Deloitte Top-up Fellowship addition to MHRD, for 6 months (14.07.2023–13.01.2024).</li>
                        <li class="update-item">Ms. Aakanksha Agrawal joins the research group as a PhD student – July 2023.</li>
                        <li class="update-item">Mr. Muskula Sai Bargav Reddy joins the research group as a PhD student – Jan 2023.</li>
                        <li class="update-item">Mr. Usman Mohseni was awarded the Prime Minister’s Research Fellowship (PMRF) in 2023 Cycle–11, IIT Roorkee.</li>
                    </ul>

                    <div class="year">2022</div>
                    <ul class="updates">
                        <li class="update-item">Mr. Ankush presented his work titled: “Modelling Climate Change Induced Non-Stationarity in Rainfall Extremes”. In AGU Fall Meeting Abstracts (Vol. 2022, pp. H42E-1331).</li>
                        <li class="update-item">Mr. Usman Mohseni presented his work titled “Non-Stationary Hydrological Drought Index for Changing Climate,” AGU Fall Meeting, Chicago, 12–16 December 2022 (Online).</li>
                        <li class="update-item">Ms. Pallavi Kumari received Prime Minister’s Research Fellowship (PMRF) in 2022 Cycle–10, IIT Roorkee.</li>
                        <li class="update-item">Mr. Vivek Tiwari joins the research group as a PhD student (Co-guide) – July 2022.</li>
                        <li class="update-item">Mr. Usman Mohseni joins the research group as a PhD student – July 2022.</li>
                        <li class="update-item">Ms. Pallavi Kumari joins the research group as a PhD student – July 2022.</li>
                    </ul>


                    <div class="year">2021</div>
                    <ul class="updates">
                        <li class="update-item">Mr. Dikshant Bodana received a Prime Minister Research Fellowship (Cycle–9: July 2021).</li>
                        <li class="update-item">Mr. Dikshant Bodana joins the research group as a PhD student – July 2021.</li>
                    </ul>


                    <div class="year">2020</div>
                    <ul class="updates">
                        <li class="update-item">Mr. Ankush joins the research group as a PhD student (Co-guide) – July 2020.</li>
                        <li class="update-item">Dr. R. Vinnarasi joined IIT Roorkee as Assistant Professor – 15th June 2020.</li>
                    </ul>

                </div>
            </div>
            <div style={{ width: '60%', margin: 'auto', boxShadow: '0 0 10px purple', borderRadius: '20px' }}>
                <img style={{ borderRadius: '20px' }} width='100%' src={require('../assets/homepage_img.png')} alt="" />
            </div>
            <br /><br />
            
        </div>
    )
}
