import AxiosClass1 from './components-axios/AxiosClass1';
import AxiosClassPost from './components-axios/AxiosClassPost';
 
 import AxiosGet from './components-axios/AxiosGet';
//import AxiosPost from './components-axios/AxiosPost';
import AxiosPut from './components-axios/AxiosPut';
import AxiosDelete from './components-axios/AxiosDelete';


//import AxiosErrorHandling from './AxiosErrorHandling';
import MyFetchData from './components-fetch/MyFetchData';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <MyFetchData></MyFetchData>
    </div>
  );
}

export default App;

