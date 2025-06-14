import './App.css';
import './components/styles.css';
import Navbar from './components/Navbar';
import ResearchInterests from './components/ResearchInterests';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import ResearchProjects from './components/ResearchProjects';
import Team from './components/Team';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
      return (
            <div className="App">
                  <Router>
                        <Navbar />
                        <Routes>
                              <Route path='/team' element={<Team />} />
                        </Routes>
                        <Footer/>
                  </Router>

            </div>
      );
}

export default App;
