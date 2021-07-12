import { useState } from "react"

export function Question(props) {
  const { name, image, question } = props.country
  const [ flagLength, setFlagLength ] = props.length
  const [ correct, setCorrect ] = props.correct

  const [ userSelect, setUserSelect ] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()

    if ( !userSelect ) return

    if ( userSelect === name ) setCorrect(correct + 1)
    
    setUserSelect('')
    setFlagLength(flagLength + 1)
  }

  const handleSelected = (event) => {
    setUserSelect(event.target.value)
  }

  return (
    <div className="question">
      <div className="flag-container">
        <img src={image} alt="Unknown Flag" />
      </div>

      <form onSubmit={handleSubmit}>
        { question.map((answer, index) => {
          return (
            <div className="container" key={index}>
              <input type="radio" id={answer} value={answer} name="question" onChange={handleSelected} checked={userSelect === answer} />
              <label htmlFor={answer}>{answer}</label>
            </div>
          )
        })}

        <button className="btn-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}