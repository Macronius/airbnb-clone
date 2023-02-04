// import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
// components
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

// const Home: NextPage = ({ exploreData, cardsData }) => {
const Home = ({ exploreData, cardsData }) => {
  // console.log(exploreData);
  // console.log(cardsData);
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* top section */}
        <section className="mt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              /*does this work?*/
              exploreData?.map(({ img, location, distance }) => (
                <SmallCard
                  key={location}
                  image={img}
                  location={location}
                  distance={distance}
                />
              ))
            }
          </div>
        </section>

        {/* middle section */}
        <section className="">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {/*  */}
          <div className="flex space-x-3 p-3 overflow-scroll scrollbar-hide -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          // img="https://links.papareact.com/4cj"
          // img="../public/images/bottom-banner.png"
          img="../public/images/bottom-banner.webp"
          // img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );
  //return data
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
