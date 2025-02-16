import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  FileText,
  AlertCircle,
  Database,
  Shield,
} from "lucide-react";
import { HeroContainerVariants, HeroItemVariants } from "../Constants";

const services = [
  {
    icon: <Brain className="w-8 h-8 text-orange-500" />,
    title: "Disease Prediction",
    description:
      "Advanced AI algorithms analyze symptoms to predict potential health conditions.",
  },
  {
    icon: <Activity className="w-8 h-8 text-orange-500" />,
    title: "Risk Assessment",
    description:
      "Evaluate your health risks based on symptoms and medical history.",
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-500" />,
    title: "Health Reports",
    description: "Detailed analysis reports with recommendations and insights.",
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
    title: "Early Detection",
    description: "Identify potential health issues before they become serious.",
  },
  {
    icon: <Database className="w-8 h-8 text-orange-500" />,
    title: "Data Analysis",
    description: "Process complex medical data using machine learning models.",
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: "Secure Platform",
    description:
      "Your health data is protected with enterprise-grade security.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our AI Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utilizing cutting-edge artificial intelligence and machine learning
            technologies to provide accurate disease prediction and health
            analysis.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={HeroContainerVariants}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={HeroItemVariants}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
