import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const WeddingInvitation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg','/image5.jpg','/image6.jpg'
    ,'/image7.jpg'
    ,'/image8.jpg'
    ,'/image9.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const events = [
    { date: "October 12th, Morning ☀️", name: "Haldi Ceremony 🟨", venue: "Swagruham" },
    { date: "October 13th, Evening 🌆", name: "Wedding Ceremony", venue: "Vivaha Convention Guntur", mapLink: "https://maps.app.goo.gl/QmVYRpkmdF4jQp6M6" },
    { date: "October 14th, Morning ☀️", name: "Satyanarayana Swamy Vratham", venue: "Swagruham" },
    { date: "October 14th, Evening 🌆", name: "Reception 👫🏻", venue: "Akkineni Convention, Vuyyuru", mapLink: "https://maps.app.goo.gl/NxjeXahE2YbXB3bW9" },
  ];

  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    contentElement.scrollIntoView({ behavior: 'smooth' });
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="relative h-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentImageIndex ? 'z-10' : 'z-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateX(${(index - currentImageIndex) * 100 * direction}%)`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-20">
          <h1 className="text-gray-300 text-6xl md:text-9xl font-bold text-center px-8 md:px-0 opacity-70 leading-tight">
            Doredla's<br />Invitation
          </h1>
          <div>
          <div className=" flex text-gray-300 text-xl md:text-2xl mt-4 opacity-70">
          <CalendarIcon className="mr-2 h-5 w-5 text-gray-300" />

            12th Oct | 13th Oct | 14th Oct
          </div>

          </div>

          <button
            onClick={scrollToContent}
            className="absolute bottom-8 animate-bounce"
            aria-label="Scroll to content"
          >
            <ChevronDownIcon className="h-12 w-12 text-white" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-8 w-8 text-black" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-8 w-8 text-black" />
          </button>
        </div>
      </div>
      <div id="content" className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="bg-white shadow-xl rounded-lg overflow-hidden mb-8 flex-1">
            <CardHeader className="bg-pink-500 text-white text-center py-6">
              <CardTitle className="text-3xl font-bold">Wedding Invitation</CardTitle>
              <p className="text-xl mt-2">Aditya & Pushkala</p>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 text-center mb-6">
                With joy in our hearts, we invite you to celebrate the wedding of our younger son Aditya to Pushkala.
                Your presence would be a cherished blessing as they begin their journey of love and companionship.
              </p>
              <h2 className="text-2xl font-semibold text-center mb-4">Schedule of Events</h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 flex flex-col items-center text-center">
                    <div className="flex items-center mb-2">
                      <CalendarIcon className="mr-2 h-5 w-5 text-pink-500" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-lg font-medium">{event.name}</h3>
                    <div className="flex items-center mt-1">
                      <MapPinIcon className="mr-2 h-5 w-5 text-pink-500" />
                      <span>{event.venue}</span>
                    </div>
                    {event.mapLink && (
                      <a
                        href={event.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mt-1 block"
                      >
                        View on Map
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* update the youtube link for wedding */}
          <div className="flex-1 space-y-8 hidden">
            <div className="aspect-w-16 aspect-h-9">
              <h2 className="text-2xl font-semibold text-center mb-4">Wedding Ceremony Live</h2>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px] rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <h2 className="text-2xl font-semibold text-center mb-4">Reception Live</h2>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px] rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;