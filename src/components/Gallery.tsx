import { useState } from "react";
import { X } from "lucide-react";

export const Gallery = () =>{ 
  const [selectedImage] = useState<string | null>(null);

  // Replace these with your actual gym photos
  // Place your downloaded Google Maps photos in the public/gym-photos/ folder
  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSyZsP-gfmTLZtwJXVksj6-fdvd7oR0AoULrBGEFaSD42CK9nccWfQ9jgoTFYkMiF5o8&usqp=CAU",
      alt: "Gym exterior and entrance"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_WjDt2QzpEER9Pwlb6H_n9UWBX9vgv_Mal3b-FkVy1Y4m0AITu27E0TAxB5vL-AQf_M&usqp=CAU", 
      alt: "Weight training area"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqCzI0m8pBfCE3fseQ3-ioS-2mcSukBHUrNYnNqJ2NrbhCZBThBYu-coTZnGNsP6jOPg&usqp=CAU",
      alt: "Cardio equipment section"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUHBaHd57Wq6pM1g8IEH1M7qICuxnDIxDSw&s",
      alt: "Add your own image description here"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvmORoFz2g31_dOLb0n6FoEA5zjRMChEYwsz0kb8jhqPtXpTeDd7EYRvDgtLU4j0a_Tg&usqp=CAU",
      alt: "Add your own image description here"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuAJJ0JwDpijwLdwBOhSCzl6Jd2NzDydy8SwHIq80WCe42RK2Gt0Yu9_ST9Xq2BjRewE&usqp=CAU",
      alt: "Add your own image description here"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gym Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our facilities and community in photos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 