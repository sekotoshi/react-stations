//import React, { useState, useEffect } from 'react'
import Description from './Description'

export const DogImage = props => {
  console.log(props.imageUrl)
  return (
    <div>
      <img src={props.imageUrl} alt="犬の画像イメージ" />
    </div>
  )
}

export default DogImage

//DogImage.propTypes = {
//dogUrl: propTypes.string.isRequired,
//}

//<DogImage url={dogUrl} />
//<img src={props.url} alt="犬の画像イメージ" />
