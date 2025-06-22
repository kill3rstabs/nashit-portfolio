import { User, Mail, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-primary">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-right">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg text-gray-700 dark:text-text-secondary leading-relaxed">
              As a Software Engineer, I've had the privilege of working in dynamic environments where I've been able to contribute to impactful projects. At Blue Ocean Strategic Partners, I architected a bond management system for Florida, enhancing regulatory compliance. My role at Logiciel Services involved developing a multimodal chatbot that increased user engagement by 40%.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-text-secondary leading-relaxed">
              I have a strong background in data engineering, having built a pipeline at Logiciel Services that aggregated over 500,000 data points. At KoderLabs, I honed my skills in full-stack development, contributing to a comprehensive management system and improving application performance with socket-based communication.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-text-secondary leading-relaxed">
              I am a proactive problem-solver with a passion for learning and a knack for analytical thinking. I thrive in collaborative environments and I am always eager to take on new challenges.
            </p>
            
            <div className="pt-4">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div 
            className="bg-gray-50 dark:bg-primary-light rounded-lg p-8 shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-text-primary">
              Personal Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-text-secondary">Full Name</p>
                  <p className="font-medium text-gray-900 dark:text-text-primary">Nashit Budhwani</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-text-secondary">Email</p>
                  <p className="font-medium text-gray-900 dark:text-text-primary">nashitnoorali78@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-text-secondary">Location</p>
                  <p className="font-medium text-gray-900 dark:text-text-primary">Karachi, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-text-secondary">Available For</p>
                  <p className="font-medium text-gray-900 dark:text-text-primary">Full-time Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;