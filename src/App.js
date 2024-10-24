import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextColor('white');
      document.body.style.backgroundColor = '#121933';
      showAlert(' Dark mode has been enabled.', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert(' Light mode has been enabled.', 'success');
      document.title = 'TextUtils - Home';
    }
  };

  return (
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} textColor={textColor} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route
            path='/'
            element={
              <TextForms
                heading='Enter the text to analyze below:'
                textColor={textColor}
                showAlert={showAlert}
              />
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
