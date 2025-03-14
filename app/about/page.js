"use client" ;
import Image from 'next/image';


export default function about() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 font-serif">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            BIT Mesra
          </span> */}
          
          Department of Mathematics & Computing
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Fostering academic excellence and industry connections . Our alumni network spans 
          across 35+ countries with 1000+ professionals shaping the future of technology and mathematics.
        </p>
      </div>

      {/* HOD Card */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <Image
                src="/faculty photo/abhinav_sir_photo.png"
                alt="HOD Abhinav Tondon"
                layout="fill"
                objectFit="cover"
                className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8 md:w-3/5 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-semibold text-blue-600">HEAD OF DEPARTMENT</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Dr. Abhinav Tondon</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leading the department with vision and innovation, Prof. Tondon has been instrumental 
                in establishing global academic collaborations and industry partnerships.
              </p>
              <a
                href="https://www.bitmesra.ac.in/Show_profile/42774B3642565273455572666D667A4B7A4A545036773D3D"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group"
              >
                <span>View Profile</span>
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Relations Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alumni Relations Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated alumni relations team works tirelessly to maintain strong connections 
            between our graduates and the department, organizing annual meetups, mentorship 
            programs, and industry interaction sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Dinesh Kumar Card */}
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                <Image
                  src="/faculty photo/dinesh_sir_photo.png"
                  alt="Dinesh Kumar"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Dinesh Kumar</h3>
              <p className="text-blue-600 font-medium mb-4">Alumni Relations Coordinator</p>
              <p className="text-gray-600 mb-5">
                Alumni networking, Prof. Kumar has successfully 
                organized 8 international alumni meets and manages our global mentorship program.
              </p>
              <a
                href="https://www.bitmesra.ac.in/Show_profile/304546584B723545457A746C4D3234495941765647673D3D"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                View Professional Profile
              </a>
            </div>
          </div>

          {/* Payal Das Card */}
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                <Image
                  src="/faculty photo/payal_mam_photo.png"
                  alt="Payal Das"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Payal Das</h3>
              <p className="text-blue-600 font-medium mb-4">Alumni Engagement Head</p>
              <p className="text-gray-600 mb-5">
                Dr. Das leads our corporate relations program and has facilitated 150+ 
                industry-academia collaborations through our alumni network.
              </p>
              <a
                href="https://www.bitmesra.ac.in/Show_profile/74336A4A2F75694F44365064343662694E53414243673D3D"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                View Professional Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}