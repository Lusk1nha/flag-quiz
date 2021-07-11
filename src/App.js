import { Question } from './components/Question';

import './styles/app.scss'

function App() {
  return (
    <div id={`home`}>
      <div className="questions-container">
        <h2 className="title">Que país é esse?</h2>

        <Question />
      </div>
    </div>
  );
}

export default App;
