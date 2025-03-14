
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const SocialLinks = ({ senior }) => (
  <div className="flex items-center justify-center space-x-6">
    {senior.linkedin_acc && (
      <a
        href={senior.linkedin_acc}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    )}

    {senior.email && (
      <a
        href={`mailto:${senior.email}`}
        className="text-gray-500 hover:text-red-600 transition-colors duration-300 relative group"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-w-60 overflow-hidden truncate">
          {senior.email}
        </span>
      </a>
    )}

    {senior.twitter_acc && (
      <a
        href={senior.twitter_acc}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>
    )}
  </div>
);

const AlumniFrontend = () => {
  const [filteredSeniors, setFilteredSeniors] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDropdowm, setShowDropdowm] = useState(false);
  const [viewMode, setViewMode] = useState('card');
  const [seniors, setSeniors] = useState([]); // Use this state for fetched data

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await fetch("/api/alumni");
        if (response.ok) {
          const data = await response.json();
          setSeniors(data); // Update the seniors state with fetched data
          setFilteredSeniors(data); // Also update the filteredSeniors state
        } else {
          console.error("Failed to fetch alumni data");
        }
      } catch (error) {
        console.error("Error fetching alumni:", error);
      }
    };
    fetchAlumni();
  }, []);

  const years = [];
  for (let year = 2011; year <= 2050; year++) {
    const yearAsString = year.toString();
    years.push(yearAsString);
  }

  const filterByBatch = (batch) => {
    if (batch === "all") {
      setFilteredSeniors(seniors); // Use the seniors state here
    } else {
      const filtered = seniors.filter((senior) => senior.batch === batch); // Use the seniors state here
      setFilteredSeniors(filtered);
    }
  };

  return (
    <div>
      <div className='text-center'>
        <div className='text-4xl mx-1 font-serif mt-16 text-gray-800'>Let's connect and make a connect to our alumni </div>
        <div className='text-gray-500 mt-3 mx-4'>and get a deep inside about the industry and take help from them</div>
      </div>

      <div className="flex justify-self-end gap-2 text-sm text-gray-500 cursor-pointer mx-5">
        <div
          onClick={() => setViewMode('tabular')}
          className={`hover:text-gray-900 ${viewMode === 'tabular' ? 'text-blue-600 font-medium' : ''}`}
        >
          Tabular
        </div>
        <div
          onClick={() => setViewMode('card')}
          className={`hover:text-gray-900 ${viewMode === 'card' ? 'text-blue-600 font-medium' : ''}`}
        >
          Cards
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <div className=" flex flex-col lg:flex lg:flex-row lg:space-x-4  p-4 bg-white dark:bg-gray-900 mb-5">
          <div className="flex gap-2">
            <button
              onClick={() => filterByBatch("all")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Show All
            </button>
            <div className="relative" >
              <button onClick={() => setShowDropdowm(!showDropdowm)}
                onBlur={() => {
                  setTimeout(() => {
                    setShowDropdowm(false)
                  }, 400);
                }}
                id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="dropdow
          text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center inline-flex items-center dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Batch <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" storkelinecap="round" storkelinejoin="round" storkewidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div id="dropdown" className={`${showDropdowm ? "" : "hidden"} z-50 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 mt-4  cursor-pointer`}>
                <div className="py-2 text-sm text-gray-700 dark:text-gray-200  cursor-pointer max-h-[11.5rem] overflow-y-auto" aria-labelledby="dropdownDefaultButton">
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => filterByBatch(year)}
                      className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${filterByBatch === year ? 'bg-blue-100 dark:bg-gray-500 max-h- overflow-y-auto' : ''}`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 lg:mt-0 mt-5  mx-0">
            <button
              onClick={() => filterByBatch('2019')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              2019 <span className="hidden md:inline"> Batch </span>
            </button>
            <button
              onClick={() => filterByBatch('2020')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              2020 <span className="hidden md:inline"> Batch </span>
            </button>
            <button
              onClick={() => filterByBatch('2021')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              2021 <span className="hidden md:inline"> Batch </span>
            </button>
            <button
              onClick={() => filterByBatch('2022')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              2022 <span className="hidden md:inline"> Batch </span>
            </button>
          </div>
        </div>

        {viewMode === 'tabular' ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Batch</th>
                  <th scope="col" className="px-6 py-3">Job Profile</th>
                  <th scope="col" className="px-6 py-3">Organisation</th>
                  <th scope="col" className="px-6 py-3">Location</th>
                  <th scope="col" className="px-6 py-3">Public profile</th>
                </tr>
              </thead>
              <tbody>
                {filteredSeniors.length === 0 ? (
                  <tr className="bg-white dark:bg-gray-800">
                    <td colSpan="6" className="px-6 py-12 text-base text-center text-gray-500 dark:text-gray-400">
                      No seniors found for this batch
                    </td>
                  </tr>
                ) : filteredSeniors.map((senior) => (
                  <tr
                    key={senior._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex-col items-center"
                  >
                    <td className="px-6 pt-10 pb-4">{senior.name}</td>
                    <td className="px-6 pt-10 pb-4">{senior.batch}</td>
                    <td className="px-6 pt-10 pb-4">{senior.job_profile}</td>
                    <td className="px-6 pt-10 pb-4">{senior.organisation}</td>
                    <td className="px-6 pt-10 pb-4">{senior.job_location}</td>
                    <td className="px-6 pt-10 pb-4">
                      <SocialLinks senior={senior} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredSeniors.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-12 ">
                <p className="">No seniors found for this batch</p>
              </div>
            ) : filteredSeniors.map((senior) => (
              <div key={senior._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="text-gray-600 text-center flex flex-col items-center justify-center gap-2 font-serif">
                    <img
                      src={senior.image ? senior.image : "/avatar.gif"}
                      alt="profile"
                      className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                    />

                    <h2 className="font-semibold text-xl">{senior.name}
                      <span className="text-black"> ({senior.batch})</span>
                    </h2>
                    <p className="text-gray-600 text-lg cursor-pointer">
                      <span className='hover:text-gray-900'>{senior.job_profile}</span> at
                      <span className='hover:text-gray-900'> {senior.organisation}</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Location: {senior.job_location}
                    </p>

                    <p className="text-gray-500 text-sm">Home state: {senior.home_state}</p>
                  </div>

                  <div className="border-t pt-6">
                    <SocialLinks senior={senior} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniFrontend;