import React from 'react';

const LowerAbout = () => {
  return (
    <div className=" ">
      {/* Title */}
      <h2 className="text-2xl font-medium text-gray-900 mb-5 text-center">
        Skills & Expertise
      </h2>

      <div className="space-y-6 max-w-md mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Frontend</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm">• React</li>
              <li className="text-gray-700 text-sm">•  JavaScript</li>
              <li className="text-gray-700 text-sm">• Token,  API</li>
              <li className="text-gray-700 text-sm">• Tailwind CSS</li>
              <li className="text-gray-700 text-sm">• HTML5, CSS3</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Backend</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm">• Node.js & Express</li>
              <li className="text-gray-700 text-sm">• Authentication (JWT, OAuth)</li>

            </ul>
          </div>
        </div>

        {/* Second Row - Database & Other */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Database Skills */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Database</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm">• MySQL</li>
              <li className="text-gray-700 text-sm">• MongoDB</li>
              {/* <li className="text-gray-700 text-sm">• PostgreSQL</li> */}
            </ul>
          </div>

          {/* Other Skills */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Other</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm">• Figma</li>
              <li className="text-gray-700 text-sm">• UI/UX Design</li>
              <li className="text-gray-700 text-sm">• DevOps (Basic)</li>
              <li className="text-gray-700 text-sm">• Docker, Vercel, Netlify</li>
              <li className="text-gray-700 text-sm">• Amazon Web Services (AWS)</li>
            </ul>
          </div> */}
        </div>

        {/* Quick Facts Table */}
       <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md max-w-lg mx-auto mb-10">
  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
    Quick Facts
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Left Column */}
    <div className="space-y-3">
      <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
        <span className="text-gray-500">📍</span>
        <div>
          <p className="text-gray-700 text-sm font-medium">Location</p>
          <p className="text-gray-600 text-sm">New Delhi</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
        <span className="text-gray-500">💻</span>
        <div>
          <p className="text-gray-700 text-sm font-medium">Favorite Tech</p>
          <p className="text-gray-600 text-sm">Node.js</p>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-3">
      <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
        <span className="text-gray-500">🗣️</span>
        <div>
          <p className="text-gray-700 text-sm font-medium">Languages</p>
          <p className="text-gray-600 text-sm">English, Hindi</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
        <span className="text-gray-500">⚽</span>
        <div>
          <p className="text-gray-700 text-sm font-medium">Hobby</p>
          <p className="text-gray-600 text-sm">Cricket, Travelling, Reading</p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default LowerAbout;  