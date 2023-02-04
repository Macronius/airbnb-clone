// javascript
import React from 'react';
import { useRouter } from 'next/dist/client/router';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
//
import { format } from 'date-fns';

function Search({ searchResults }) {
  //
  const router = useRouter();
  // destructure search parameters from url (NOTE: all type string)
  const { location, startDate, endDate, numGuestsInput } = router.query;
  //
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} to ${formattedEndDate}`;
  // console.log(`router.query.startDate: ${startDate} of type ${typeof startDate}, formattedStartDate: ${formattedStartDate} of type ${typeof formattedStartDate}`);

  //
  return (
    <div className="h-screen">
      {/*  */}
      <Header placeholder={`${location} | ${range} | ${numGuestsInput}`} />

      {/*  */}
      <main className="flex">
        {/* LEFT SECTION */}
        <section className="flex-grow pt-14 px-6">
          {/*  */}
          <p className="text-xs">{`300+ results in ${location}, from ${range}, for ${numGuestsInput} guests`}</p>
          {/*  */}
          <h1 className="text-3xl font-semibold mt-2 mb-6">{`Stays in ${location}`}</h1>
          {/*  */}
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexability</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          {/* results */}
          <div className="flex flex-col">
            {searchResults.map(
              ({ description, img, location, price, star, title, total }) => (
                <InfoCard
                  key={description + location + title}
                  description={description}
                  img={img}
                  location={location}
                  price={price}
                  star={star}
                  title={title}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        {/* MAP SECTION */}
        {/* <section> */}
        <section className="hidden xl:inline-flex min-w-[1000px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      {/*  */}
      <Footer />
    </div>
  );
}

export default Search;

// SERVERSIDE
export async function getServerSideProps() {
  //
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (res) => res.json()
  );
  //
  return {
    props: {
      searchResults,
    },
  };
}
