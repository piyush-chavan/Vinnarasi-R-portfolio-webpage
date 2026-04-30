import React from 'react'
import './styles.css';

export default function ResearchProjects() {
  return (
    <div id='research-projects'>
      <p className='section-title'>Research Projects</p>
      <ul className="text-1 list-1" style={{ listStyle: 'number', fontSize: '1rem' }}>
        <li><b style={{ fontSize: '1.4rem' }}>Hindon Roots Sensing (HIROS): </b>
          <br />
          River Rejuvenation through Scalable Water and Solute Balance Modelling and Informed Farmers Actions (2023);<br />
           Sponsored by DST, New Delhi under National Mission on Himalayan Ganga and Water Call. <br />
            Budget: ₹576.5 Lakhs (Includes own part contribution of ₹125.5 Lakhs)</li> <br />
        {/* <iframe src="https://www.hiros.in/" frameborder="0"></iframe> */}
        <p>For more details visit  <a target='_blank' href="https://www.hiros.in/">https://www.hiros.in/</a></p>
        <p className="section-title" style={{ fontSize: '20px' }}>Project Mission and Vision</p>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <p>
              The project will develop scientific knowledge to support pathways toward sustainable agricultural water management in the Hindon basin and create accurate/relevant modeling approaches regarding <br /> <br />

              (a) the application of remote sensing technologies for high-resolution physical soil, chemical, and groundwater properties <br /> <br />

              (b) eco-hydrological modeling at the field/farmer level <br /> <br />

              (c) integrated modeling from the field to the basin <br /> <br />

              The innovation will focus on investigating scientific solutions that create details for eco-agro-water spatial planning with minimal need for ground data.
            </p>
          </div>
          <div style={{ flex: '1' }}>
            <img style={{ maxWidth: '100%' }} src={require('../assets/hiros-project.png')} alt="" />
          </div>
        </div>
        <p className="section-title" style={{ fontSize: '20px' }}>Sponsers</p>
        <br />
        <div style={{ display: 'flex', height: '160px', justifyContent: 'space-evenly' }}>
          <div>
            <img style={{ maxWidth: '100%', maxHeight: '100%', marginInline: 'auto' }} src={require('../assets/logo/dst-logo.webp')} alt="" />
          </div>
          <div>
            <img style={{ maxWidth: '100%', maxHeight: '100%', marginInline: 'auto' }} src={require('../assets/logo/nwo-1-logo.png')} alt="" />
          </div>
        </div>
        <li><b style={{ fontSize: '1.4rem' }}>Design flood estimation for resilient hydraulic structures under changing climate and environments (2022): </b>
          <br />
          Funded by SERB India under Startup Research Grant Scheme. Budget: ₹19.6 Lakhs</li> <br />
          <p>For more details visit webtool :           <a target='_blank' href="https://piyush-chavan.github.io/Intern_Project_Map_Basin/">Design Flood Estimation Webtool <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
</p>
        <p className="section-title" style={{ fontSize: '20px' }}>Project Summary</p>
        <p>The intensification of extreme weather and climatic events, evident in the recent past, has resulted in severe damage/failure of the water resource infrastructure. These infrastructures are not expected to be resilient to the changing climate, as they were planned and designed based on the conventional stationarity assumption. Hence, several studies have recommended the idea of capturing the temporal dynamics (i.e., non-stationarity) in extremes. Nonstationary modelling developed merely by addressing the changes in extremes over time, without understanding the physical interpretation, results in an unreliable future prediction. Without incorporating the physical factors, Nonstationary modelling may produce more uncertainty than stationary modelling. This study investigates the physical relevance behind the changes in flood characteristics and develops a robust approach to estimate the design flood through the multivariate Flood Frequency Analysis (FFA) for a changing climate and environment. The signature of both long-term and short-term non-stationarity is detected in the flood peak, flood volume and flood duration. Further, the physical factors (i.e., process-informed covariates) that influence these changes will be identified, and a suitable covariate-based model will be developed to perform nonstationary FFA. The design flood and joint return period for major riverine flood basins in India will be estimated, providing information for the design and operation of hydraulic structures incorporating flood risk. It will also pave the way for further research in River flood management, dynamic reservoir management and flood forecasting under a changing climate and environment.</p>
        <p className="section-title" style={{ fontSize: '20px' }}>Objectives</p>
        <p>The following objectives are formulated to address the gap in the literature:
          <ol>
            <li>
              Detect and attribute the temporal short-term and long-term changes (if any) in the extreme streamflow characteristics (flood peak, flood volume and flood duration).
            </li>
            <li>
              Examine the flood frequency characteristics through exploring the effect of non-stationarity through identified process-informed covariates and interdependency between the flood characteristics.
            </li>
            <li>
              Investigate the occurrence and distribution of flood events for future climate, considering the projections of process-informed covariates from various general circulation models, land change models and different future scenarios.
            </li>
            <li>
              Formulate possible methodologies to quantify or even reduce the uncertainty to improve the reliability of design flood estimation under the nonstationary condition
            </li>
          </ol>
        </p>
        
        
        
        <br /><br />
        <li><b style={{ fontSize: '1.4rem' }}>Hydrological Modelling for Dynamic Catchments (2021):</b>
          <br />
          Funded by Sponsored Research & Industrial Consultancy Office, Indian Institute of Technology Roorkee. Budget: ₹21.6 Lakhs</li> <br />
       
      </ul>
    </div>
  )
}
