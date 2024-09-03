import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'
import browserslist from 'browserslist'

export const DogListContainer = () => {
  const [breeds, setbreed] = useState()
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(dogData => setbreed(dogData.message))
      .catch(error => console.erroe('error', error))
  }, [])
  return <BreedsSelect breeds={breeds} />
}

export default DogListContainer
