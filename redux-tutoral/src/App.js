import './App.css';
import { SimpleReduxWrapper } from './components/redux/index';
import ReduxWithMultipleReducers from './components/reduxmultiplereducers';
import ReduxWithHooks from './components/reduxwithhooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SimpleReduxWrapper /> */}
        {/* <ReduxWithHooks /> */}
        <ReduxWithMultipleReducers />
      </header>
    </div>
  );
}

export default App;
