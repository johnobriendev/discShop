import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 overflow-hidden">
          <div className="relative">
            <h1 className={`text-center text-3xl md:text-4xl mb-4 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              Welcome to Barry's Disc Shop
            </h1>
            <p className={`text-center text-lg md:text-xl text-gray-700 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              Your one-stop shop for all your disc needs!
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <img 
              src="barry.jpg" 
              alt="Barry's Disc Shop" 
              className={`rounded-lg shadow-md max-w-full h-auto transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            />
          </div>
          <div className={`text-center transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/discs" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// const HomePage = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <div className='flex flex-col items-center gap-5 min-h-screen'>
//       <h1 className={`text-2xl transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
//         Welcome to Barry's Disc Shop
//       </h1>
//       <p className={`transition-all duration-1000 delay-200 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
//         Your one-stop shop for all your disc needs!
//       </p>
//       <img 
//         src="barry.jpg" 
//         alt="" 
//         className={`shadow-2xl transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
//       />
//     </div>
//   );
// };

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