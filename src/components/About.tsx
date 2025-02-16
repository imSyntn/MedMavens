import { Brain, Database, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our AI Platform</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our advanced AI/ML platform uses state-of-the-art algorithms to predict diseases and assess health risks with high accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-white border border-orange-600 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
            <p className="text-gray-600">
              Powered by sophisticated machine learning algorithms trained on extensive medical data.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-white border border-orange-600 rounded-full flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rich Dataset</h3>
            <p className="text-gray-600">
              Our models are trained on a vast database of medical records and clinical data.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 bg-white border border-orange-600 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p className="text-gray-600">
              Your health data is protected with advanced encryption and security measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;