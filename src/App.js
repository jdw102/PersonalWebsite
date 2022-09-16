import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Contact from './Components/Contact.js';
import Documents from './Components/DocumentsPage/Documents.js';
import Projects from './Components/ProjectsPage/Projects.js';
import About from './Components/About.js';
import Homepage from './Components/Homepage.js';
import Helmet from 'react-helmet';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2e201f' 
    },
    secondary: {
      main: '#d1700f'
    },
    info: {
      main: '#8a6866'
    }
  }
});

function App() {
  return (
    <div className="App" >
      <ThemeProvider theme = {theme}>
        <Helmet>
            <style>{'body { background-color: #f5f3f2; }'}</style>
        </Helmet>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element = {<Homepage />} />
            <Route path='/about' element = {<About />} />
            <Route path='/contact' element = {<Contact />} />
            <Route path='/projects' element = {<Projects />}/>
            <Route path='/documents' element = {<Documents />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
