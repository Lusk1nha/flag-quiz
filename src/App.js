import { RenderQuestions } from './components/RenderQuestions';

import './styles/app.scss'

function App() {
  return (
    <div id={`home`}>
      <div className="questions-container">
        <RenderQuestions />
      </div>
    </div>
  );
}

export default App;
