import React, { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_2299.jpg',
  )
  const buttonclick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogUrl(data.message))
      .catch(error => console.error('Error:', error))
  }
  return (
    <>
      <DogImage imageUrl={dogUrl} />
      <button onClick={buttonclick}>更新 </button>
    </>
  )
}

export default Description
