import { User, Mail, MapPin, Calendar } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-primary">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mt-16 items-center">
          <div className="md:col-span-3 space-y-6" data-aos="fade-right" data-aos-delay="100">
            <p className="text-xl text-gray-700 dark:text-text-secondary leading-relaxed">
              As a Software Engineer, I've had the privilege of working in dynamic environments where I've been able to contribute to impactful projects. At Blue Ocean Strategic Partners, I architected a bond management system for Florida, enhancing regulatory compliance. My role at Logiciel Services involved developing a multimodal chatbot that increased user engagement by 40%.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed">
              I have a strong background in data engineering, having built a pipeline at Logiciel Services that aggregated over 500,000 data points. At KoderLabs, I honed my skills in full-stack development, contributing to a comprehensive management system and improving application performance with socket-based communication.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-text-secondary leading-relaxed">
              I am a proactive problem-solver with a passion for learning and a knack for analytical thinking. I thrive in collaborative environments and I am always eager to take on new challenges.
            </p>
            
            <div className="pt-6">
              <a href="#contact" className="btn-secondary text-lg">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div 
            className="md:col-span-2 bg-gray-50 dark:bg-primary-light rounded-xl p-8 shadow-lg border border-gray-100 dark:border-primary"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-text-primary text-center">
              Personal Details
            </h3>
            
            <div className="space-y-6">
              <InfoItem icon={<User />} label="Full Name" value="Nashit Budhwani" />
              <InfoItem icon={<Mail />} label="Email" value="nashitnoorali78@gmail.com" />
              <InfoItem icon={<MapPin />} label="Location" value="Karachi, Pakistan" />
              <InfoItem icon={<Calendar />} label="Availability" value="Open to Work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem = ({ icon, label, value }: InfoItemProps) => (
  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-secondary/20 flex-shrink-0 flex items-center justify-center">
      <div className="text-secondary">{icon}</div>
    </div>
    <div className="ml-4">
      <p className="text-sm text-gray-500 dark:text-text-secondary">{label}</p>
      <p className="font-semibold text-gray-900 dark:text-text-primary">{value}</p>
    </div>
  </div>
);

export default About;