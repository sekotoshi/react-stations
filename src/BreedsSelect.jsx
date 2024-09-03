import DogImage from './DogImage'
import DogListContainer from './DogListContainer'
import { useState } from 'react'
import React from 'react'

//{}内に別コンポーネントに渡す変数を記載
export const BreedsSelect = ({
  breeds,
  event,
  ShowButtonClick,
  Image,
  aaa,
}) => {
  console.log(Image)
  console.log(aaa)
  return (
    <>
      <tr>
        <select name="breeds" onChange={event}>
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button name="Show" onClick={ShowButtonClick}>
          表示
        </button>
      </tr>
      {Image.map((imgURL, index) => (
        <img key={index} src={imgURL} alt={`Dog${index}`} />
      ))}
    </>
  )
}
export default BreedsSelect
//option
