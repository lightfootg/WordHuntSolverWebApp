import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import './custom.css';
import './solver.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Word Hunt Game Solver</h1>
            <p className="lead">Lists all possible words on the board!</p>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="row">
          <div className="col-lg-12 text-center">
            <label>A1</label>
            <input type="text" id="A1" maxLength={1} />
            <label>B1</label>
            <input type="text" id="B1" maxLength={1} />
            <label>C1</label>
            <input type="text" id="C1" maxLength={1} />
            <label>D1</label>
            <input type="text" id="D1" maxLength={1} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <label>A2</label>
            <input type="text" id="A2" maxLength={1}/>
            <label>B2</label>
            <input type="text" id="B2" maxLength={1}/>
            <label>C2</label>
            <input type="text" id="C2" maxLength={1}/>
            <label>D2</label>
            <input type="text" id="D2" maxLength={1}/>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <label>A3</label>
            <input type="text" id="A3" maxLength={1}/>
            <label>B3</label>
            <input type="text" id="B3" maxLength={1}/>
            <label>C3</label>
            <input type="text" id="C3" maxLength={1}/>
            <label>D3</label>
            <input type="text" id="D3" maxLength={1}/>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <label>A4</label>
            <input type="text" id="A4" maxLength={1}/>
            <label>B4</label>
            <input type="text" id="B4" maxLength={1}/>
            <label>C4</label>
            <input type="text" id="C4" maxLength={1}/>
            <label>D4</label>
            <input type="text" id="D4" maxLength={1}/>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <button id="solveButton" type="button">Solve!</button>
          </div>
        </div>

        <div className="row">
          <output id="outputs">Solutions: </output>
        </div>
      </div>
      <script type="module" src="solver.js"> </script>
    </div>
  );
}

export default App;
