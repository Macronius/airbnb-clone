import React from 'react';

function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      {/**  */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It is a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Airbnb</p>
      </div>
      {/**  */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>What is Airbnb</p>
        <p>No secret cameras</p>
        <p>GUARANTEED</p>
        <p>Clean</p>
        <p>Fun</p>
      </div>
      {/**  */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Exclusive</p>
        <p>Elite</p>
        <p>LEET</p>
      </div>
      {/**  */}
    </footer>
  );
}

export default Footer;
