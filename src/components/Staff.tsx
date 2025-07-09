export const Staff = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Personal Training & Strength",
      image: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS81MTUyNzk3NTVfMTgwMTE3Njc2Mjg3NTExMzdfNDk4NTAwNzI3NTQ1NDUwMzY0MF9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDQ4MHg0ODBfdHQ2JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNklrTkJVazlWVTBWTVgwbFVSVTB1YVcxaFoyVmZkWEpzWjJWdUxqRTBOREI0TVRnd01DNXpaSEl1WmpneU56ZzNMbVJsWm1GMWJIUmZhVzFoWjJVaWZRJl9uY19odD1zY29udGVudC1oZWwzLTEuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwNSZfbmNfb2M9UTZjWjJRSGx2aHNqVjFlaFRWdnZqdTRhdnhGOXl1RDBWUDFMcTVrNHVUM0xuX1dQY3hhV2N0X0RaUXVDdkdKYU4xdDNUTjdOUHhKLUN0UzRjbXNPTFFiQmNvZzAmX25jX29oYz1KRE5TZ1NMUHNVWVE3a052d0ZDQnhOaiZfbmNfZ2lkPWIwQU50bWRWOTRMbHdKMFo2RFdYVWcmZWRtPUFDV0RxYjhCQUFBQSZjY2I9Ny01JmlnX2NhY2hlX2tleT1NelkzTURVNU9UQXhNVGN3TnpBNE5ETXpPQSUzRCUzRC4zLWNjYjctNSZvaD0wMF9BZlJodjVNdVBFQ29JOVhlUUdFVHBzV0NmN3J5MXc3QlhIVHVkclhxTlB0YURRJm9lPTY4NzM1MjNBJl9uY19zaWQ9ZWU5ODc5IiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNTE1Mjc5NzU1XzE4MDExNzY3NjI4NzUxMTM3XzQ5ODUwMDcyNzU0NTQ1MDM2NDBfbi5qcGciLCJuYmYiOjE3NTIwMDU5NjQsImV4cCI6MTc1MjAwOTU2NCwiaWF0IjoxNzUyMDA1OTY0fQ.LkU73HHUP-8Y2Gs4gVC2ylr8F2GpbEwdCXckThzmELs",
      bio: "5+ years experience, certified personal trainer specializing in strength training and body transformation."
    },
    {
      name: "Mike Rodriguez",
      specialty: "CrossFit & HIIT",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-d4xrhhvDFZuDvvLM47aelbynhNajhzOWKHqH_BeJWz4Btkxnx7dpDtSCYrEzRpcaM&usqp=CAU",
      bio: "Former competitive athlete with expertise in high-intensity workouts and functional fitness."
    },
    {
      name: "Emily Chen",
      specialty: "Yoga & Pilates",
      image: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS81MTQzMjYzNjVfMTgwNTIzMzMxOTYzNzY4NTNfODMzNTI1MDMxNzM5MzkzNTYxOF9uLmpwZz9zdHA9ZHN0LWpwZ19lMTVfdHQ2JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNklrTkJVazlWVTBWTVgwbFVSVTB1YVcxaFoyVmZkWEpzWjJWdUxqY3lNSGc1TmpBdWMyUnlMbVk0TWpjNE55NWtaV1poZFd4MFgyTnZkbVZ5WDJaeVlXMWxJbjAmX25jX2h0PXNjb250ZW50LWhlbDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTAxJl9uY19vYz1RNmNaMlFIbHZoc2pWMWVoVFZ2dmp1NGF2eEY5eXVEMFZQMUxxNWs0dVQzTG5fV1BjeGFXY3RfRFpRdUN2R0phTjF0M1RON05QeEotQ3RTNGNtc09MUWJCY29nMCZfbmNfb2hjPWxjd3NJMVhGNzcwUTdrTnZ3SDdJNk80Jl9uY19naWQ9YjBBTnRtZFY5NExsd0owWjZEV1hVZyZlZG09QUNXRHFiOEJBQUFBJmNjYj03LTUmaWdfY2FjaGVfa2V5PU16WTJOemt5TlRneU1qZ3dOREF6TmpjMU1BJTNEJTNELjMtY2NiNy01Jm9oPTAwX0FmVG9HN1FraWFkWHRkeEhuTWI0ajgyMDl0bWdGUzlfMzBvTDdOZlZ5Vm9xSEEmb2U9Njg3MzQ1M0ImX25jX3NpZD1lZTk4NzkiLCJmaWxlbmFtZSI6IlNuYXBJbnN0YS50b181MTQzMjYzNjVfMTgwNTIzMzMxOTYzNzY4NTNfODMzNTI1MDMxNzM5MzkzNTYxOF9uLmpwZyIsIm5iZiI6MTc1MjAwNTk2NCwiZXhwIjoxNzUyMDA5NTY0LCJpYXQiOjE3NTIwMDU5NjR9.vO-NCBnLuX9CsqBqzbRhnD-nBuctc3axniUpAJBXSLo",
      bio: "Certified yoga instructor with 8 years of experience in mindfulness and flexibility training."
    },
    {
      name: "David Thompson",
      specialty: "Martial Arts & Karate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvivF64pXlTDzbx8LX1XpU3_pMOIB22xa42CJ7oj-UBrGFR0QuQTvC5bt92B9lbEhafCs&usqp=CAU",
      bio: "Black belt instructor with 15 years of martial arts experience and competition background."
    }
  ];

  return (
    <section id="staff" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Staff</h2>
          <p className="text-xl text-gray-600">
            Our certified trainers are here to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale transition-all duration-300 animate-fade-in"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{trainer.specialty}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
