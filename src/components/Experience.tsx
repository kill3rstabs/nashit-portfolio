import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  const jobs: Job[] = [
    {
      id: 'blue-ocean',
      company: 'Blue Ocean Strategic Partners',
      position: 'Software Engineer II',
      period: 'October 2024 – Present',
      description: [
        'Streamlined bond reporting processes by architecting and implementing a bond management system for Florida, resulting in enhanced regulatory compliance and efficient workflows.',
        'Achieved seamless system integration by designing and executing robust data migration pipelines from legacy systems to a modernized platform, ensuring data accuracy.',
        'Boosted deployment efficiency and scalability by engineering containerized applications with Docker, including crafting Dockerfiles and orchestrating services with Docker Compose.',
        'Reduced payroll processing time by 40% by developing an automated payroll system featuring advanced document data extraction, thereby streamlining operations.',
        'Enhanced solution development by collaborating daily with clients to gather requirements and incorporate feedback, resulting in iterative improvements within an agile startup environment.'
      ],
      technologies: ['Docker', 'Data Migration', 'System Integration', 'Agile']
    },
    {
      id: 'logiciel',
      company: 'Logiciel Services',
      position: 'Software Engineer - Data',
      period: 'July 2024 - October 2024',
      description: [
        'Increased user engagement by 40% and improved sentiment analysis accuracy by 88% by developing a multimodal chatbot powered by large language models.',
        'Enhanced data processing efficiency by building a pipeline that aggregated over 500,000 data points from 10+ sources using vector and graph databases, ensuring robust integration.',
        'Streamlined support operations by automating processes, which cut error resolution time by 50% and achieved 98% accuracy across 200+ daily queries.'
      ],
      technologies: ['LLM', 'Chatbot', 'Vector Databases', 'Graph Databases', 'Data Pipelines']
    },
    {
      id: 'koderlabs',
      company: 'KoderLabs',
      position: 'Associate Software Engineer',
      period: 'August 2023 - July 2024',
      description: [
        'Improved project outcomes by collaborating with cross-functional teams to gather requirements, design innovative solutions, and implement new features, ensuring on-time delivery.',
        'Enhanced application performance by developing robust socket-based communication modules that enabled real-time data exchange between server and client applications.',
        'Reduced bug fix time by 20% and bolstered system reliability by contributing to the development of a comprehensive management system.',
        'Optimized data management by analyzing business needs and collaborating with teams to define effective database structures, resulting in smoother data retrieval processes.',
        'Increased overall system efficiency by implementing asynchronous message processing using queues, which reduced processing delays by 30%.'
      ],
      technologies: ['Socket.io', 'System Design', 'Database Design', 'Message Queues']
    },
    {
      id: 'optimizia',
      company: 'Optimizia',
      position: 'AI Engineering Intern',
      period: 'July 2022 - September 2022',
      description: [
        'Enhanced safety protocols and analytics by designing web APIs for seamless software communication and leading backend development for real-time seatbelt monitoring.'
      ],
      technologies: ['Web API', 'Backend Development']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-primary">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-right">
          Work Experience
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab navigation for companies */}
          <div 
            className="lg:col-span-3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible mb-6 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {jobs.map((job, index) => (
              <button
                key={job.id}
                className={`whitespace-nowrap px-4 py-3 text-left transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 ${
                  activeJob === index
                    ? 'border-secondary text-secondary dark:text-secondary bg-gray-50 dark:bg-primary-light'
                    : 'border-transparent text-gray-600 dark:text-text-secondary hover:text-gray-900 dark:hover:text-text-primary hover:bg-gray-50 dark:hover:bg-primary-light'
                }`}
                onClick={() => setActiveJob(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          
          {/* Job details */}
          <div 
            className="lg:col-span-9"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-text-primary">
                {jobs[activeJob].position} <span className="text-secondary">@ {jobs[activeJob].company}</span>
              </h3>
              
              <div className="flex items-center mt-2 text-gray-600 dark:text-text-secondary">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{jobs[activeJob].period}</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-6">
              {jobs[activeJob].description.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-secondary mr-2">▹</span>
                  <span className="text-gray-700 dark:text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="text-gray-700 dark:text-text-primary font-medium mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {jobs[activeJob].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-primary-light text-gray-800 dark:text-text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Education section */}
        <div className="mt-24">
          <h3 
            className="text-2xl font-bold mb-8 text-gray-900 dark:text-text-primary"
            data-aos="fade-right"
          >
            Education
          </h3>
          
          <div 
            className="bg-gray-50 dark:bg-primary-light p-6 rounded-lg shadow-sm"
            data-aos="fade-up"
          >
            <div className="flex items-start">
              <div className="hidden sm:block mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-text-primary">
                  B.S. Computer Science
                </h4>
                <p className="text-gray-700 dark:text-text-secondary mt-1">
                  FAST University Karachi, Pakistan
                </p>
                <p className="text-gray-600 dark:text-text-dark mt-1 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  CGPA: 3.58
                </p>
                <p className="mt-4 text-gray-700 dark:text-text-secondary">
                  Dean's List (5x)
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="mt-6 bg-gray-50 dark:bg-primary-light p-6 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-start">
              <div className="hidden sm:block mr-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-primary flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-gray-600 dark:text-secondary" />
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-text-primary">
                  Certifications & Recognitions
                </h4>
                <p className="text-gray-700 dark:text-text-secondary mt-1">
                  Continuously learning and growing in the field of software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;