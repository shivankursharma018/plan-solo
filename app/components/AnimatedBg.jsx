import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  return (
    <div>
      <AnimatedBackground animationName="starryNight" 
       blendMode="screen" />
      {/* Your app content */}
    </div>
  );
}

export default App;