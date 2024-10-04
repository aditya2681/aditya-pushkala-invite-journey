import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";

const WeddingInvitation = () => {
  const events = [
    { date: "October 12th, Morning ☀️", name: "Haldi Ceremony 🟨", venue: "Swagruham" },
    { date: "October 13th, Evening 🌆", name: "Wedding Ceremony", venue: "Vivaha Convention Guntur", mapLink: "https://maps.app.goo.gl/QmVYRpkmdF4jQp6M6", hasVideo: true },
    { date: "October 14th, Morning ☀️", name: "Satyanarayana Swamy Vratham", venue: "Swagruham" },
    { date: "October 14th, Evening 🌆", name: "Reception 👫🏻", venue: "Akkineni Convention, Vuyyuru", mapLink: "https://maps.app.goo.gl/NxjeXahE2YbXB3bW9", hasVideo: true },
  ];

  const scrollToVideo = () => {
    const videoElement = document.getElementById('wedding-video');
    videoElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative mb-8 h-96">
          <img
            src="/wedding-image.jpg"
            alt="Aditya and Pushkala"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center rounded-lg">
            <h1 className="text-white text-4xl font-bold text-center px-4">
              Doredla's Invitation
            </h1>
          </div>
        </div>
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
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
                  {event.hasVideo && (
                    <button
                      onClick={scrollToVideo}
                      className="flex items-center text-pink-500 hover:text-pink-600 mt-2"
                    >
                      Watch Video <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div id="wedding-video" className="mt-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Wedding Highlights</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;