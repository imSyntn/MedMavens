import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, AlertCircle } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const symptoms = [
  "Fever",
  "Cough",
  "Fatigue",
  "Difficulty Breathing",
  "Headache",
  "Body Aches",
  "Sore Throat",
  "Loss of Taste/Smell",
  "Nausea",
  "Diarrhea",
];

const Prediction = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [prediction, setPrediction] = useState<null | {
    disease: string;
    probability: number;
    recommendations: string[];
  }>(null);

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrediction({
      disease: "Upper Respiratory Infection",
      probability: 85,
      recommendations: [
        "Rest and hydration",
        "Monitor symptoms",
        "Consult a healthcare provider",
        "Consider COVID-19 testing",
      ],
    });
  };

  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Symptom Severity",
        data: [3, 4, 5, 3, 2],
        borderColor: "#f97316",
        tension: 0.1,
      },
    ],
  };

  return (
    <section
      id="prediction"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Disease Prediction
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your symptoms for an AI-powered analysis and health
            prediction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8 a"
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Select Your Symptoms
              </h3>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {symptoms.map((symptom) => (
                  <label
                    key={symptom}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => handleSymptomToggle(symptom)}
                      className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <span>{symptom}</span>
                  </label>
                ))}
              </div>
              <button
                type="submit"
                disabled={selectedSymptoms.length === 0}
                className="w-full bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Analyze Symptoms
              </button>
            </form>

            {prediction && (
              <div className="bg-white p-6 rounded-lg shadow-lg ">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold">Prediction Results</h3>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-medium">Likely Condition:</p>
                  <p className="text-2xl font-bold text-orange-500">
                    {prediction.disease}
                  </p>
                  <p className="text-gray-600">
                    Confidence: {prediction.probability}%
                  </p>
                </div>
                <div>
                  <p className="text-lg font-medium mb-2">Recommendations:</p>
                  <ul className="space-y-2">
                    {prediction.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-500 mt-1" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            className=""
            initial={{ x: "100px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6">Symptom Tracking</h3>
              <div className="mb- flex items-center justify-center">
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top" as const,
                      },
                      title: {
                        display: true,
                        text: "Symptom Severity Over Time",
                      },
                    },
                  }}
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Track your symptoms over time to help our AI model provide
                  more accurate predictions.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Activity className="w-4 h-4" />
                  <span>Real-time symptom monitoring and analysis</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prediction;
