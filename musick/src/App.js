import logo from './logo.svg';
import './App.css';

function clicked(){
    alert("New functionality coming soon");
}


function App() {
  return (
      <div
        class="bg_image"
      >
      <div class="center">Musick</div> 

      <div class="cbut"> 
        <button class="no" onClick={clicked}>
        Continue
        </button>
        </div>

      </div>
  );
}



export default App;
