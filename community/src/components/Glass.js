import './Glass.css'
import { useState } from 'react'
import axios from 'axios'

function Glass() {
  const [Headcount_ratio, setHeadcount_ratio] = useState('')
  const [Intensity, setIntensity] = useState('')
  const [Population, setPopulation] = useState('')
  const [VP, setVP] = useState('')
  const [SP, setSP] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { Headcount_ratio, Intensity, Population, VP, SP }

    axios
      .post('http://localhost:8080/prediction/', params)
      .then((res) => {
        console.log(res);
        const data = res.data.data
        const parameters = JSON.stringify(params)
        const msg = `Prediction: ${(data.prediction)}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setHeadcount_ratio('')
    setIntensity('')
    setPopulation('')
    setVP('')
    setSP('')
  }

  return (
    <div className="glass">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h4>Poverty</h4>
        <div className="glass__form__group">
          <input
            id="Headcount_ratio"
            className="glass__form__input"
            placeholder="Headcount_ratio"
            required
            min="0"
            max="100"
            type="number"
            title="Headcount_ratio"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={Headcount_ratio}
            onChange={(e) => setHeadcount_ratio(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="Intensity"
            className="glass__form__input"
            placeholder="Intensity"
            required
            min="0"
            max="100"
            type="number"
            title="Intensity"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={Intensity}
            onChange={(e) => setIntensity(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="Population"
            className="glass__form__input"
            placeholder="Population"
            required
            min="0"
            max="100"
            type="number"
            title="Population"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={Population}
            onChange={(e) => setPopulation(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="VP"
            className="glass__form__input"
            placeholder="VP"
            required
            min="0"
            max="100"
            type="number"
            title="VP"
            value={VP}
            onChange={(e) => setVP(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="SP"
            className="glass__form__input"
            placeholder="SP"
            required
            min="0"
            max="100"
            type="number"
            title="SP"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            value={SP}
            onChange={(e) => setSP(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Glass