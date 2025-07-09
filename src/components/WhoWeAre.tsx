export const WhoWeAre = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Angels Fitness Gym, we're more than just a gym - we're a community dedicated to transforming lives through fitness and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in relative group">
            {/* Main image container with elegant effects */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_-15px_rgba(220,38,38,0.25)]">
              <img
                src="https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LWhlbDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTkvNDM2Nzk5OTAyXzExNjkyNzk0ODc1NjY3MDRfMTc5ODU2MzUyNjc4NDY2NzYyMF9uLmpwZz9fbmNfaHQ9c2NvbnRlbnQtaGVsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDQmX25jX29jPVE2Y1oyUUhsdmhzalYxZWhUVnZ2anU0YXZ4Rjl5dUQwVlAxTHE1azR1VDNMbl9XUGN4YVdjdF9EWlF1Q3ZHSmFOMXQzVE43TlB4Si1DdFM0Y21zT0xRYkJjb2cwJl9uY19vaGM9dktfcUNFaXZOUFFRN2tOdndIMi1fMXkmX25jX2dpZD1iMEFOdG1kVjk0TGx3SjBaNkRXWFVnJmVkbT1BQ1dEcWI4QkFBQUEmY2NiPTctNSZvaD0wMF9BZlFIWHpQWGJfWWtlRGVrWW9tSDJpY09JUE41RXBLUm43djRaZHVBMlVWSUZ3Jm9lPTY4NzMzQjUwJl9uY19zaWQ9ZWU5ODc5IiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNDM2Nzk5OTAyXzExNjkyNzk0ODc1NjY3MDRfMTc5ODU2MzUyNjc4NDY2NzYyMF9uLmpwZyIsIm5iZiI6MTc1MjAwNTk2NCwiZXhwIjoxNzUyMDA5NTY0LCJpYXQiOjE3NTIwMDU5NjR9.rMHlUUVkTvRzsjyTcOinRZL4gT9a-6jSdUQmEut8pQ8"
                alt="Modern gym interior"
                className="w-full h-96 object-cover transition-all duration-500 group-hover:brightness-105 group-hover:contrast-110"
              />
              
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Sophisticated branding elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-lg">
                <span className="text-white font-bold text-xs leading-tight text-center">ANGELS</span>
              </div>
              
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-500">
                <span className="text-red-600 font-bold text-sm">83dcaa</span>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-500">
                <span className="font-semibold text-xs">PREMIUM</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-md group-hover:scale-105 transition-all duration-500">
                <span className="text-gray-800 font-medium text-xs">24/7</span>
              </div>
              
              {/* Subtle border accent */}
              <div className="absolute inset-0 rounded-2xl border-2 border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Elegant glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/15 via-orange-500/10 to-red-500/15 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"></div>
            
            {/* Subtle floating elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-red-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe fitness is not just about physical transformation, but about building confidence, discipline, and a healthy lifestyle that lasts a lifetime. Our state-of-the-art facility and expert trainers are here to guide you every step of the way.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Excellence in everything we do
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Inclusive and supportive community
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Personalized approach to fitness
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Continuous innovation and improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
