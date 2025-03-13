import React, { useState, useRef, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7',
        title: 'Paradise Beach Resort',
        description: 'Experience luxury at its finest in Maldives',
        location: 'Maldives',
        videoUrl: 'https://videos.pexels.com/video-files/30507834/13070467_360_640_60fps.mp4'
    },
    {
        id: 2,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
        title: 'Alpine Adventure',
        description: 'Discover the majestic Swiss Alps',
        location: 'Switzerland'
    },
   
    {
        id: 3,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
        title: 'Safari Experience',
        description: 'Witness the great migration in Serengeti',
        location: 'Tanzania',
        videoUrl: 'https://videos.pexels.com/video-files/30318458/12996596_360_640_29fps.mp4'
    },
    {
        id: 4,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b',
        title: 'Ancient Temples',
        description: 'Explore the mystical temples of Asia',
        location: 'Thailand',
        videoUrl: 'https://videos.pexels.com/video-files/3723496/3723496-sd_640_360_24fps.mp4'
    },
    {
        id: 5,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
        title: 'Venice Canals',
        description: 'Romance in the heart of Italy',
        location: 'Italy'
    },
    {
        id: 6,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
        title: 'Northern Lights',
        description: 'Chase the aurora in Iceland',
        location: 'Iceland',
        videoUrl: 'https://videos.pexels.com/video-files/25988225/11925555_360_640_25fps.mp4'
    }
];

// Group items into sections of 6
const sections = galleryItems.reduce((acc, item, index) => {
    const sectionIndex = Math.floor(index / 6);
    if (!acc[sectionIndex]) {
        acc[sectionIndex] = [];
    }
    acc[sectionIndex].push(item);
    return acc;
}, []);

export function Gallery() {
    const [currentSection, setCurrentSection] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [isMuted, setIsMuted] = useState(true);
    const videoRefs = useRef({});
    const hoverTimeoutRef = useRef();

    const navigateSection = (direction) => {
        if (direction === 'next') {
            setCurrentSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
        } else {
            setCurrentSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
        }
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedItem) {
                if (e.key === 'ArrowLeft') navigateSection('prev');
                if (e.key === 'ArrowRight') navigateSection('next');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, [selectedItem]);

    const handleMouseEnter = (item) => {
        setHoveredId(item.id);

        if (item.type === 'video') {
            hoverTimeoutRef.current = setTimeout(() => {
                const video = videoRefs.current[item.id];
                if (video) {
                    video.currentTime = 0;
                    video.play().catch(() => { });
                }
            }, 800);
        }
    };

    const handleMouseLeave = (item) => {
        setHoveredId(null);
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        if (item.type === 'video') {
            const video = videoRefs.current[item.id];
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    };

    return (
        <div id="gallery-section" className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Explore Our Destinations</h1>
                <p className="text-gray-400 text-lg">Discover breathtaking locations and unforgettable experiences</p>
                <p className="text-gray-500 mt-2">Gallery {currentSection + 1} of {sections.length}</p>
            </div>

            {/* Gallery Container */}
            <div className="max-w-7xl mx-auto relative">
                {/* Updated Navigation Buttons - now in top-right corner */}
                <div className="absolute -top-16 right-0 flex items-center gap-2 z-20">
                    <button
                        onClick={() => navigateSection('prev')}
                        className="bg-black/50 hover:bg-black/75 text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 group"
                        aria-label="Previous section"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                    </button>
                    <button
                        onClick={() => navigateSection('next')}
                        className="bg-black/50 hover:bg-black/75 text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 group"
                        aria-label="Next section"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections[currentSection].map((item) => (
                        <div
                            key={item.id}
                            className="relative group cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:z-10"
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={() => handleMouseLeave(item)}
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Thumbnail/Video Container */}
                            <div className="aspect-w-16 aspect-h-9">
                                {item.type === 'video' ? (
                                    <>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className={`w-full h-full object-cover transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-0' : 'opacity-100'
                                                }`}
                                        />
                                        <video
                                            ref={(el) => el && (videoRefs.current[item.id] = el)}
                                            src={item.videoUrl}
                                            muted={isMuted}
                                            loop
                                            playsInline
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        />
                                    </>
                                ) : (
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                  transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-300 text-sm mb-2">{item.location}</p>
                                    <div className="flex items-center gap-2">
                                        {item.type === 'video' && (
                                            <>
                                                <button
                                                    className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm hover:bg-white/30 transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsMuted(!isMuted);
                                                    }}
                                                >
                                                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                                </button>
                                                <button className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm hover:bg-white/30 transition-colors">
                                                    <Play className="w-4 h-4" /> Play
                                                </button>
                                            </>
                                        )}
                                        <button className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm hover:bg-white/30 transition-colors">
                                            <Info className="w-4 h-4" /> Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Indicators */}
                <div className="flex justify-center mt-8 gap-3">
                    {sections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSection(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-110 ${currentSection === index ? 'bg-blue-500 scale-110' : 'bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to gallery section ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden">
                        {selectedItem.type === 'video' ? (
                            <video
                                src={selectedItem.videoUrl}
                                controls
                                autoPlay
                                className="w-full aspect-video object-cover"
                            />
                        ) : (
                            <img
                                src={selectedItem.thumbnail}
                                alt={selectedItem.title}
                                className="w-full aspect-video object-cover"
                            />
                        )}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h2>
                            <p className="text-gray-400 mb-4">{selectedItem.description}</p>
                            <p className="text-sm text-gray-500">Location: {selectedItem.location}</p>
                        </div>
                        <button
                            className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-300 bg-black/50 w-8 h-8 rounded-full flex items-center justify-center"
                            onClick={() => setSelectedItem(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;