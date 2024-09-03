// DO NOT DELETE

import './App.css'
import { useState } from 'react'
import Header from './Header'
import Description from './Description'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export function App() {
  return (
    <div>
      <DogListContainer />
      <Header />
      <Description />
    </div>
  )
}
