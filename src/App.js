// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert] =useState(null)
  const showAlert = (type,message) => {
      setAlert({
        type : type,
        message : message
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      showAlert('success','Dark Mode Enabled')
      document.body.style.backgroundColor='grey';
      document.body.style.color='white'
      document.title='TextUtils-Dark Mode'
    }
    else{
      setMode('light');
      showAlert('success','Light Mode Enabled')
      document.body.style.backgroundColor='white';
      document.body.style.color='black'
      document.title='TextUtils-Light Mode'

    }
    }
  return (
  <>
    
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}  />
        </div>
      
    
  </>
  );
}

export default App;
