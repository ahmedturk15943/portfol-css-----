// import React from 'react';
// import '@/app/CSS/hero.css'; 
// import Image from 'next/image';



// const Hero: React.FC = () => {
//   return (
//     <div id="hero" >
        
//         <h2>Wellcome To My Portfolio Website</h2>
//         <h1>I am Ahmed Raza</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et beatae reprehenderit iusto animi cumque sit veniam nemo voluptatem blanditiis?</p>
//         <div className="hero-image">
//           <Image src="/pics.jpg" alt="Ahmed Raza Turk" />
//         </div>
//       </div>
//   );
// };

// export default Hero;


import React from 'react';
import '@/app/CSS/hero.css'; 
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div id="hero">
      <h2>Welcome To My Portfolio Website</h2>
      <h1>I am Ahmed Raza</h1>
      <p> Hello! I am Ahmed Raza, a web developer skilled in HTML, CSS, Next.js, Tailwind CSS, and TypeScript. I create responsive, user-friendly websites with a focus on clean code and performance. Lets connect and build something great together!
</p>
      <div className="hero-image">
        {/* Image component with width and height */}
        <Image 
          src="/pics.jpg" 
          alt="Ahmed Raza Turk" 
          width={500} // Add width
          height={500} // Add height
        />
      </div>
    </div>
  );
};

export default Hero;

