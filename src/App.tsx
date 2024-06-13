// src/App.tsx
import React from 'react';
import { CustomerReview, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections';
import { Nav } from './components';

const App: React.FC = () => {
  return (
    <main className='relative'>
      <Nav/>
      <Hero/>
      <PopularProducts/>
      <SuperQuality/>
      <Services/>
      <SpecialOffer/>
      <CustomerReview/>
      <Subscribe/>
      <Footer/>
    </main>
  );
}

export default App;
