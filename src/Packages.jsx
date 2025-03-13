import React, { useState } from 'react';
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Users, Plane, MapPin, Shield, Sun, Moon, Utensils, Wifi, Car, Hotel, Check } from 'lucide-react';

const Packages = () => {
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [priceRange, setPriceRange] = useState(10000);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const packages = [
    {
      id: 1,
      name: 'Mediterranean Dream',
      image: 'https://res.cloudinary.com/lastminute-contenthub/s--N4JZ_ILc--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/Spain/Majorca/shutterstock_270377456',
      duration: '10 days',
      destinations: ['Greece', 'Italy', 'Spain'],
      price: 3499,
      rating: 4.9,
      startDates: ['Apr 15, 2024', 'May 1, 2024', 'May 15, 2024'],
      highlights: [
        'Island hopping in Greece',
        'Tuscan wine tasting',
        'Spanish flamenco show',
        'Coastal cuisine experiences'
      ],
      includes: [
        'Luxury accommodation',
        'All flights & transfers',
        'Daily breakfast & select meals',
        'Expert local guides',
        'All entrance fees'
      ],
      maxGroupSize: 12,
      difficulty: 'Easy',
      category: 'luxury'
    },
    {
      id: 2,
      name: 'Asian Explorer',
      image: 'https://statics.vinpearl.com/asia-travel-thumb_1664456142.jpg',
      duration: '14 days',
      destinations: ['Japan', 'South Korea', 'Taiwan'],
      price: 4299,
      rating: 4.8,
      startDates: ['Mar 20, 2024', 'Apr 10, 2024', 'May 1, 2024'],
      highlights: [
        'Tokyo night food tour',
        'Korean temple stay',
        'Taipei street markets',
        'Bullet train experiences'
      ],
      includes: [
        'Premium hotels',
        'International & domestic flights',
        'Daily breakfast',
        'Local guides',
        'Transport passes'
      ],
      maxGroupSize: 10,
      difficulty: 'Moderate',
      category: 'cultural'
    },
    {
      id: 3,
      name: 'African Safari Adventure',
      image: 'https://imaraafricasafaris.com/wp-content/uploads/2020/11/image-263-1000x565.png.webp',
      duration: '12 days',
      destinations: ['Kenya', 'Tanzania', 'Uganda'],
      price: 5999,
      rating: 4.9,
      startDates: ['Jun 1, 2024', 'Jul 15, 2024', 'Aug 1, 2024'],
      highlights: [
        'Big Five game drives',
        'Gorilla trekking',
        'Masai village visit',
        'Hot air balloon safari'
      ],
      includes: [
        'Luxury lodges & camps',
        'All flights & transfers',
        'Full board meals',
        'Expert guides & trackers',
        'Park fees & permits'
      ],
      maxGroupSize: 8,
      difficulty: 'Moderate',
      category: 'adventure'
    }
  ];
  const durations = [
    { value: 'all', label: 'All Durations' },
    { value: '7', label: '7 Days' },
    { value: '10', label: '10 Days' },
    { value: '14', label: '14 Days' }
  ];

  const filteredPackages = packages.filter(pkg => {
    const durationMatch = selectedDuration === 'all' || pkg.duration.includes(selectedDuration);
    const priceMatch = pkg.price <= priceRange;
    return durationMatch && priceMatch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
      ref={ref}
    >
      {/* Hero Section */}
      <header 
        className="relative bg-cover bg-center h-[500px]" 
        style={{ 
          backgroundImage: "url('https://www.bugbog.com/wp-content/uploads/2024/11/48a8e990c7e3a541/budget-travel-destinations-1200x630.webp')" 
        }}
      >
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

        {/* Animated Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          >
            Curated Travel Packages
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} 
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl drop-shadow-md"
          >
            Expertly crafted itineraries combining luxury, adventure, and authentic experiences
          </motion.p>
        </div>
      </header>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <div className="flex flex-wrap gap-3">
                {durations.map(duration => (
                  <button
                    key={duration.value}
                    className={`px-4 py-2 rounded-full text-sm transition-colors
                      ${selectedDuration === duration.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => setSelectedDuration(duration.value)}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (up to ${priceRange})
              </label>
              <input
                type="range"
                min="1000"
                max="10000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-[1.02] transition-transform">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="font-medium text-sm">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{pkg.name}</h3>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Max {pkg.maxGroupSize} people</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>{pkg.difficulty}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{pkg.destinations.length} Countries</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Destinations</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.map((destination, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                      >
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Highlights</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-600 text-xs">
                        <Check className="w-3 h-3 mr-1 text-green-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Upcoming Dates</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.startDates.map((date, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-800">${pkg.price}</span>
                    <span className="text-xs text-gray-600">/person</span>
                  </div>
                  <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors">
                    <Plane className="w-4 h-4" />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">100% Protected</h3>
              <p className="text-gray-600">All trips are fully insured and bonded for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Small Groups</h3>
              <p className="text-gray-600">Travel with like-minded people in groups of 12 or less</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Quality Stays</h3>
              <p className="text-gray-600">Carefully selected accommodations for comfort and location</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Local Experiences</h3>
              <p className="text-gray-600">Authentic cultural experiences and local cuisine</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-3">What's included in the package price?</h3>
              <p className="text-gray-600">Our packages typically include accommodation, transportation, guided tours, and select meals as specified in the itinerary.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-3">Can I customize my package?</h3>
              <p className="text-gray-600">Yes, we offer customization options. Contact our travel specialists to tailor your journey to your preferences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-3">What's the cancellation policy?</h3>
              <p className="text-gray-600">We offer flexible cancellation policies with full refunds available up to 30 days before departure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-3">Do I need travel insurance?</h3>
              <p className="text-gray-600">While not mandatory, we strongly recommend travel insurance for all our packages to ensure peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Contact our travel specialists to plan your perfect trip</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Packages;
