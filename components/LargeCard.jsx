import React from 'react';
import Image from 'next/legacy/image';
import bottom_banner from '../public/images/bottom-banner.webp';

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          //   src={img}
          src={bottom_banner}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          onLoad={() => console.log('image loaded cessfully')}
          onError={() => console.log('image errored on load')}
        />
      </div>
      {/** content */}
      <div className="absolute top-36 left-12">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p className="">{description}</p>
        <button className="text-sm text-white bg-gray-900 px-6 py-3 rounded-lg mt-4">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
