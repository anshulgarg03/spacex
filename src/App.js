import './App.css';
import Header from './component/header/header';
import Filter from './component/filter/filter';
import Content from './component/content/content';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-panel">
          <BrowserRouter>
            <div className="filter-column">
              {/* <Filter /> */}
              <Route path="/"
                render={(props) => <Filter {...props} />} />
            </div>
            <div className="main-panel side-column">
              {/* <Switch> */}
              <Route path="/"
                render={(props) => <Content {...props} />} />
              {/* <Content /> */}
              {/* </Switch> */}
            </div>
          </BrowserRouter>

        </div>
      </div>
      <div className="header" style={{ textAlign: 'center' }}><span>Developed by: Anshul Kumar</span></div>
    </div>
  );
}

export default App;
