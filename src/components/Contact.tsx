
import { Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/angelsfitnessgym",
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/angelsfitnessgym",
      color: "hover:text-blue-500"
    },
    {
      name: "WhatsApp",
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.77 4.487.806.306 1.436.49 1.928.626.81.257 1.548.221 2.131.134.65-.097 1.759-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
        </svg>
      ),
      url: "https://wa.me/1234567890",
      color: "hover:text-green-500"
    },
    {
      name: "YouTube",
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: "https://youtube.com/@angelsfitnessgym",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
          <p className="text-xl text-gray-600">
            Follow us on social media for fitness tips, updates, and community highlights
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale ${link.color}`}
                >
                  <IconComponent />
                  <span className="mt-2 text-sm font-semibold text-gray-700">{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Gym</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Address:</span> 123 Fitness Street, Healthy City, HC 12345</p>
              <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
              <p><span className="font-semibold">Email:</span> info@angelsfitnessgym.com</p>
              <p><span className="font-semibold">Hours:</span> Mon-Fri 5:00 AM - 11:00 PM | Sat-Sun 6:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
