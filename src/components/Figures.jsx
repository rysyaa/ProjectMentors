import React from 'react'
import "./styles/Figures.css"

const Figures = () => {
  return (
    <div className='Container'>
        <p>Photo Credits: Christoph Maderer/ PUMA</p>
        <h2>PUMA IN FIGURES</h2>
        <div className="text__container">
            <div className="block__text">
                <h3>8.465</h3>
                <h5>BILLION EURO SALES <br /> IN 2022</h5>
            </div>
            <div className="block__text">
                <h3>641</h3>
                <h5>MILLION EUROS EBIT <br /> IN 2022</h5>
            </div>
            <div className="block__text">
                <h3>≈20,000</h3>
                <h5>EMPLOYEES</h5>
            </div>
            <div className="block__text">
                <h3>1948</h3>
                <h5>YEAR OF BIRTH</h5>
            </div>
        </div>

    </div>
  )
}

export default Figures