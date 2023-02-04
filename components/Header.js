import React, { useState } from 'react';
// Next.js
import Image from 'next/legacy/image';
// import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  MenuIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
// calendar
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder }) {
  // states
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuestsInput, setNumGuestsInput] = useState(1);
  //
  const router = useRouter();

  // handler
  const handleSelect = (ranges) => {
    // receive the values that the user is selecting, then
    // update the startDate and endDate appropriately
    //
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  // configuration (kindof)
  const selectionRange = {
    key: 'selection',
    startDate: startDate,
    endDate: endDate,
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(), // convert date type to string type
        endDate: endDate.toISOString(), // convert date type to string type
        numGuestsInput,
      },
    });
    //
    // http://localhost:3000/search?location=&startDate=2023-02-07T06%3A00%3A00.000Z&endDate=2023-02-09T06%3A00%3A00.000Z&numGuestsInput=2
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* . _ . ' . _ . FIRST ROW - HEADER SECTION */}

      {/* LEFT SECTION */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          // fill
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push('/')}
        />
      </div>

      {/* MIDDLE (search) SECTION */}
      <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || 'Start your search'}
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          onChange={(e) => {
            e.preventDefault();
            const val = e.target.value;
            setSearchInput(val);
          }}
          value={searchInput}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer hover:text-blue-400">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* . _ . ' . _ . SECOND ROW - CALENDAR SECTION */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-6">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          {/* guests */}
          <div className="flex border-b border-gray-100 p-3  items-center">
            <h2 className="text-2xl font-semibold flex-1">Number of Guests:</h2>
            <UsersIcon className="h-5 pr-2" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none font-semibold text-[#FD5B61] bg-gradient-to-b from-gray-100 to-white"
              value={numGuestsInput}
              onChange={(e) => setNumGuestsInput(e.target.value)}
              min={1}
            />
          </div>
          {/* buttons */}
          <div className="flex pt-1">
            <button className="flex-grow button" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow button" onClick={search}>
              Search
            </button>
          </div>
          {/* <div className="flex bg-yellow-300 justify-around">
            <button className="bg-blue-300">Cancel</button>
            <button className="bg-red-300">Search</button>
          </div> */}
        </div>
      )}
    </header>
  );
}

export default Header;
