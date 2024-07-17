import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className='flex flex-col items-center gap-5 min-h-screen'>
      <h1 className={`text-2xl transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        Welcome to Barry's Disc Shop
      </h1>
      <p className={`transition-all duration-1000 delay-200 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        Your one-stop shop for all your disc needs!
      </p>
      <img 
        src="barry.jpg" 
        alt="" 
        className={`shadow-2xl transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      />
    </div>
  );
};

export default HomePage;


// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className='flex flex-col items-center gap-5'>
//       <h1 className='text-2xl'>Welcome to Barry's Disc Shop</h1>
//       <p>Your one-stop shop for all your disc needs!</p>
//       <img src="barry.jpg" alt="" className='shadow-2xl'/>
//     </div>
//   );
// };

// export default HomePage;