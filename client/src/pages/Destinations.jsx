import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Plane, Heart, Share2, Filter, Search } from 'lucide-react';

const Destinations = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Maldives',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/230516112548-01-crossroads-maldives-aerial.jpg?c=original',
      description: 'Crystal clear waters and white sandy beaches await you.',
      price: 2499,
      duration: '7 days',
      category: 'beach',
      rating: 4.9,
      nextAvailable: '2024-04-15',
      highlights: ['Private Beach', 'Water Villas', 'Snorkeling'],
    },
    {
      id: 2,
      name: 'Paris',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaL2y7mMD_o4lWKzIKe7eal2X2tzteqblTA&s',
      description: 'Experience the romance and charm of the City of Lights.',
      price: 1899,
      duration: '5 days',
      category: 'city',
      rating: 4.8,
      nextAvailable: '2024-03-20',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
    },
    {
      id: 3,
      name: 'Safari in Kenya',
      image: 'https://media.istockphoto.com/id/697689066/photo/three-giraffe-in-national-park-of-kenya.jpg?s=612x612&w=0&k=20&c=PkC1FAG_dl35Q89Qrfsr_N7siaC645dy8EmP5SekYCI=',
      description: 'Discover the wild beauty of African savannahs.',
      price: 3299,
      duration: '8 days',
      category: 'adventure',
      rating: 4.9,
      nextAvailable: '2024-05-10',
      highlights: ['Big Five Viewing', 'Luxury Camps', 'Masai Village Visit'],
    },
    {
      id: 4,
      name: 'Bali',
      image: 'https://ik.imagekit.io/tvlk/blog/2024/07/shutterstock_2324082951.jpg',
      description: 'Relax in paradise with stunning beaches and temples.',
      price: 1699,
      duration: '6 days',
      category: 'beach',
      rating: 4.7,
      nextAvailable: '2024-03-15',
      highlights: ['Temple Tours', 'Spa Treatments', 'Rice Terraces'],
    },
    {
      id: 5,
      name: 'Santorini',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*mjkeYEgRoE75gGCZ2ey-Nw.jpeg',
      description: 'Marvel at the iconic blue domes and breathtaking sunsets.',
      price: 2199,
      duration: '6 days',
      category: 'beach',
      rating: 4.8,
      nextAvailable: '2024-04-01',
      highlights: ['Sunset Views', 'Wine Tasting', 'Boat Tours'],
    },
    {
      id: 6,
      name: 'Tokyo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDA7dbOXWJolLXsgrqS8hKC-AYeEz4LQ58VXFkLtc3cZAd0T_GLmxLbIu2vbXYyXuelk&usqp=CAU',
      description: 'Dive into the vibrant culture and futuristic cityscapes.',
      price: 2399,
      duration: '7 days',
      category: 'city',
      rating: 4.8,
      nextAvailable: '2024-03-25',
      highlights: ['Mount Fuji', 'Sushi Experience', 'Robot Restaurant'],
    },
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesFilter = selectedFilter === 'all' || dest.category === selectedFilter;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'beach', name: 'Beach Getaways' },
    { id: 'city', name: 'City Breaks' },
    { id: 'adventure', name: 'Adventure Tours' },
  ];

  return (
    <div id="destinations" className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Destinations</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover handpicked destinations that promise unforgettable experiences and lifetime memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Filter size={20} />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors
                ${selectedFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setSelectedFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{destination.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="font-medium">{destination.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{destination.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Next available: {destination.nextAvailable}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-gray-800">
                      <span className="text-2xl font-bold">${destination.price}</span>
                      <span className="text-sm text-gray-600">/person</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        <Plane className="w-5 h-5" />
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgdkGVg29TavMWfQICK9dFXMLN5piCROw3m7DxZ-aSesa_Ehfze9BV3MrTJ5A7bhbbLA&usqp=CAU${index + 1}`}
                    alt={`Traveler ${index + 1}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Sarah Thompson</h4>
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-600">
                  "An incredible experience! The destinations were breathtaking and the service was exceptional. Every detail was perfectly planned."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Travel Inspiration</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive offers, travel guides, and tips for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;