import { Question } from "./Question";
import { Flags } from "../services/flags";

import { useState } from "react";

export function RenderQuestions() {
  const [flagLength, setFlagLength] = useState(9)
  const [correct, setCorrect] = useState(5)

  const handleReset = () => {
    setCorrect(0)
    return setFlagLength(0)
  }

  return (
    <>
      { flagLength < Object.keys(Flags).length ? (
        <>
          <h2 className="title">Essa bandeira é?</h2>

          <Question 
            country={Flags[flagLength]} 
            length={[flagLength, setFlagLength]} 
            correct={[correct, setCorrect]}
          />
        </>
      ) : (
        <>
          <h3 className="correct">
            Você acertou {correct} de {Object.keys(Flags).length}
          </h3>
        
          <button className="btn-reset" type="button" onClick={handleReset}>Reset</button>
        </>
      )}
    </>
  );
}