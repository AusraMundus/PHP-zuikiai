import './App.scss';
import './buttons.scss';
import Buttons from './Components/005/Buttons';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Buttons count={15}/>

      </header>
    </div>
  );

}

export default App;