// import { useEffect, useRef } from 'react';

// const HorizontalImageScroll: React.FC = () => {
//   // Example image URLs
//   const images: string[] = [
//     "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3556&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1486611483939-d7c7e6b1cc9d?q=80&w=3556&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1534352154594-0917a72caa79?q=80&w=3556&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3556&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1568454537842-b1dd9c4df4e7?q=80&w=3556&auto=format&fit=crop"
//   ];

//   const scrollRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     const scrollAmount = 2; // Amount to scroll per interval (px)
//     const scrollInterval = 20; // Interval time in milliseconds

//     const intervalId = setInterval(() => {
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//         scrollContainer.scrollLeft = 0;
//       } else {
//         scrollContainer.scrollLeft += scrollAmount;
//       }
//     }, scrollInterval);

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <>
//     <div className="">
//           <p className="m-4 text-3xl leading-8 font-extrabold tracking-tight text-[#1E90FF] dark:text-[#1E90FF] sm:text-4xl">Our Clients</p>
//         </div>
//     <div className="w-full overflow-x-auto whitespace-nowrap" ref={scrollRef}>
//       <div className="inline-flex space-x-8">
//         {images.map((imageUrl, index) => (
//           <div key={index} className="relative w-80 h-60">
//             <img
//               src={imageUrl}
//               alt={`Image ${index + 1}`}
//               className="object-cover w-full h-full rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default HorizontalImageScroll;

import { useEffect, useRef } from 'react';

const HorizontalImageScroll: React.FC = () => {
  // Example image URLs
  const images: string[] = [
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3556&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486611483939-d7c7e6b1cc9d?q=80&w=3556&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534352154594-0917a72caa79?q=80&w=3556&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3556&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568454537842-b1dd9c4df4e7?q=80&w=3556&auto=format&fit=crop"
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 2; // Amount to scroll per interval (px)
    const scrollInterval = 20; // Interval time in milliseconds

    const intervalId = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    }, scrollInterval);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="">
        <p className="m-4 text-3xl leading-8 font-extrabold tracking-tight text-[#1E90FF] dark:text-[#1E90FF] sm:text-4xl">Our Clients</p>
      </div>
      <div className="w-full overflow-hidden" ref={scrollRef}>
        <div className="inline-flex space-x-8">
          {images.map((imageUrl, index) => (
            <div key={index} className="relative w-80 h-60">
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalImageScroll;
