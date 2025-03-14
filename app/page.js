import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Mathematics & Computing Alumni
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            BIT Mesra · Est. 1955 · Connecting Innovators
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/alumniForm" passref='true'>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Join Network
              </button>
            </Link>
            <button className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-all">
              Latest News
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Updates Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-4">
              Latest Updates
            </h2>
            <div className="space-y-4">
              {[
                '2024 Alumni Meet Registrations Open',
                'New Research Collaboration Opportunities',
                'Campus Placement Statistics Released',
                'Alumni Mentorship Program Launched'
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <p className="text-gray-600 group-hover:text-blue-800 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Alumni Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-100 pb-4">
              Featured Alumni
            </h2>
            <div className="space-y-6">
              {[
                {
                  name: 'Kanak Raj',
                  batch: '2024',
                  role: 'Applied AI Scientist, at Thomson Reuters ',
                  achievement: 'Pioneered AI-driven climate modeling systems'
                },
                {
                  name: 'Shambhavi Singh',
                  batch: '2025',
                  role: 'Software Developer, at Microsoft',
                  achievement: 'Pioneered the next generation web interface '
                }
              ].map((alumni, index) => (
                <div key={index} className="group hover:bg-gray-50 p-4 rounded-lg transition-colors">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {alumni.name} <span className="text-blue-600">({alumni.batch})</span>
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{alumni.role}</p>
                  <p className="text-gray-500 text-sm italic">
                    &ldquo;{alumni.achievement}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { number: '5K+', label: 'Alumni Network' },
            { number: '40+', label: 'Countries' },
            { number: '85%', label: 'Career Support' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 uppercase text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
