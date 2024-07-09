"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import list from '../../utils/movies';

const Hero = () => {
  useEffect(() => {
    // Example of client-side code that runs only on the client
    console.log('Component mounted on the client');
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Download any movies in just a single click</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {list.map((movie, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <Link href={movie.link}>
              {/* <a> */}
                <div className="relative w-full h-64">
                  <Image src={movie.Img} alt={movie.name} layout="fill" objectFit="cover" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.name}</div>
                </div>
              {/* </a> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
