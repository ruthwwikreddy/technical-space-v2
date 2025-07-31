import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/shared/Card";
import { CalendarIcon, Clock, MapPin, X, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    title: "Hackathon: Hack-N-Win | 24-Hour Hackathon",
    date: "March 21 & 22, 2025",
    time: "10:00 AM - 10:00 AM IST",
    location: "Innovation Lab, MRCE",
    description: "An exciting 24-hour in-person hackathon where students collaborated to develop innovative tech solutions aimed at creating social impact.",
    image: "/events/hack-n-win.png"
  },
  {
    title: "Ignite Your Idea",
    date: "March 01, 2025",
    time: "06:00 PM - 07:30 PM IST",
    location: "Virtual Event",
    description: "A virtual platform that empowered students to pitch their creative ideas and receive guidance from industry experts and mentors.",
    image: "/events/igniteyouridea.png"
  },
  {
    title: "Mastering the GitHub Student Developer Pack",
    date: "February 15, 2025",
    time: "07:00 PM - 08:00 PM IST",
    location: "Microsoft Teams",
    description: "A hands-on online workshop that empowered participants to unlock the full potential of the GitHub Student Developer Pack, equipping them with essential tools and skills for real-world development and collaboration.",
    image: "/events/masteringthegsdp.png"
  }
];

const pastEvents: Event[] = [
  {
    title: "GenAI 101",
    date: "February 01, 2025",
    time: "06:00 PM - 08:00 PM IST",
    location: "Microsoft Teams",
    description: "An introductory online session focused on Generative AI concepts, tools, and real-world applications, designed to inspire innovation and exploration in AI.",
    image: "/events/genai101.png"
  },
  {
    title: "Data Mastery with Microsoft Power BI",
    date: "January 5, 2025",
    time: "06:00 PM - 08:00 PM IST",
    location: "Microsoft Teams",
    description: "A hands-on online workshop that equipped participants with essential data visualization and analysis skills using Microsoft Power BI.",
    image: "/events/datamasterywithmicrosoftpowerbi.png"
  }
];

const Events = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const renderEventCard = (event: Event, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card 
        className="group overflow-hidden bg-gradient-to-b from-black/60 to-blue-900/10 border-blue-800/30 transition-all duration-500 hover:border-blue-500/50"
      >
        <div 
          className="relative aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={() => openModal(event.image)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <Maximize className="h-8 w-8 text-white/90" />
          </div>
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <CardHeader className="bg-black/80 backdrop-blur-md">
          <CardTitle className="text-xl text-white/90 font-semibold line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
            {event.title}
          </CardTitle>
          <div className="flex flex-col gap-2 mt-2 text-gray-300">
            <div className="flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
              <CalendarIcon className="h-4 w-4 text-blue-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="bg-black/80 backdrop-blur-md text-gray-300 py-4">
          <div className="line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{event.description}</div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="events" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
        >
          Upcoming Events
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Don't miss out on our exciting events designed to enhance your student experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => renderEventCard(event, index))}
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mt-20 mb-2 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
        >
          Past Events
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Explore our previous events and the impact they made on our community.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => renderEventCard(event, index))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-colors z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
            >
              <X className="w-6 h-6 text-white/90" />
            </motion.button>
            <motion.div 
              className="max-w-7xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={selectedImage} 
                alt="Event"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
