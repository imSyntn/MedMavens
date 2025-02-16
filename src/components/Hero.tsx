import { motion } from "framer-motion";
import { ArrowRight, Brain, Activity, FileText } from "lucide-react";
import {
  HeroContainerVariants,
  HeroItemVariants,
  HeroLetterContainerVariants,
  HeroLetterVariants,
  HeroText,
} from "../Constants";

const Arr = [
  {
    Icon: Brain,
    text1: "AI Analysis",
    text2: "Advanced algorithms analyze your symptoms",
  },
  {
    Icon: Activity,
    text1: "Quick Results",
    text2: "Get instant health insights",
  },
  {
    Icon: FileText,
    text1: "Detailed Reports",
    text2: "Comprehensive health analysis",
  },
  {
    Icon: Brain,
    text1: "ML Models",
    text2: "Trained on vast medical data",
  },
];

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-gray-900"
              variants={HeroLetterContainerVariants}
              initial="hidden"
              animate="show"
            >
              {HeroText.split("").map((char, index) => (
                <motion.span key={index} variants={HeroLetterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Leverage the power of artificial intelligence and machine learning
              for early disease detection and health risk assessment. Get
              accurate predictions based on your symptoms and health data.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("prediction")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-400 transition-colors"
              >
                Start Prediction <ArrowRight size={20} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={HeroContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {Arr.map((item, index) => (
              <Animation
                key={index}
                Icon={item.Icon}
                text1={item.text1}
                text2={item.text2}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Animation = ({
  Icon,
  text1,
  text2,
}: {
  Icon: React.ElementType;
  text1: string;
  text2: string;
}) => {
  return (
    <motion.div
      variants={HeroItemVariants}
      className="bg-white p-6 rounded-lg shadow-lg border border-blue-100"
    >
      <Icon className="w-12 h-12 text-orange-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{text1}</h3>
      <p className="text-gray-600">{text2}</p>
    </motion.div>
  );
};

export default Hero;
