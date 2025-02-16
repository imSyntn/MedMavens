import React, { useState } from "react";
import { motion } from "framer-motion";
import { Video, Calendar, Clock, User } from "lucide-react";

const ContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const ItemVariants = {
  hidden: { opacity: 0},
  show: { opacity: 1, transition: { duration: 1 } },
};

const arr: string[] = [
  "Schedule your preferred date and time for the consultation",
  "Receive a confirmation email with the video call link",
  "Join the secure video call at your scheduled time",
  "Consult with our healthcare professionals remotely",
];

const VideoCall = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scheduled:", { date: selectedDate, time: selectedTime });
  };

  return (
    <section
      id="video-call"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Virtual Consultations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with our healthcare professionals from the comfort of your
            home through secure video consultations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 border border-orange-600 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold">How It Works</h3>
              </div>
              <motion.ul
                className="space-y-4"
                variants={ContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {arr.map((text, index) => (
                  <motion.li
                    key={index}
                    variants={ItemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="text-orange-500 font-semibold">
                      {index + 1}.
                    </span>
                    <p>{text}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <div className="">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg border border-blue-100"
            >
              <h3 className="text-xl font-semibold mb-6">
                Schedule a Video Consultation
              </h3>

              <motion.div
                className="space-y-6"
                variants={ContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div 
                variants={ItemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <User className="inline-block w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </motion.div>

                <motion.div 
                variants={ItemVariants}>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <Calendar className="inline-block w-4 h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </motion.div>

                <motion.div 
                variants={ItemVariants}>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </motion.div>

                <motion.button 
                variants={ItemVariants}
                  type="submit"
                  className="w-full bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Video size={20} />
                  Schedule Consultation
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCall;
