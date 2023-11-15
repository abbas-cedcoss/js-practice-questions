import './App.css';
import { SimpleReduxWrapper } from './components/redux/index';
import ReduxWithHooks from './components/reduxwithhooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SimpleReduxWrapper /> */}
        <ReduxWithHooks />
      </header>
    </div>
  );
}

export default App;
