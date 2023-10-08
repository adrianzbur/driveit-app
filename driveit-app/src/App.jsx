import { useState } from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import bmw from './assets/bmw.png';
import mercedes from './assets/mercedes.png';


function App() {
  return (
   <div  >
    <Navbar/>
    <div className="min-h-screen text-darkblue">
    <div className="container mx-auto my-8 flex flex-wrap justify-center gap-4">
    <Cards
        image={bmw}
        title='Bmw'
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        rating="4.5"
    />
    <Cards
        image={mercedes}
        title="Mercedes "
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        rating="4.8"
      />
    </div>
  </div>
  </div>
  )
}


export default App;
