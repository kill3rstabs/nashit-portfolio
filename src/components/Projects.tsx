import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  category: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 'tradesage',
      title: 'TradeSage for ABC Co.',
      description: 'Pioneered a trade-focused Language Model (LLM) using techniques like RAG, fine-tuning, and semantic search.',
      image: 'https://i.ibb.co/rf7ScNqk/Untitled.jpg',
      technologies: ['LLM', 'RAG', 'Fine-tuning', 'Semantic Search'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'ai',
    },
    {
      id: 'assignment-solver',
      title: 'Assignment Solver',
      description: 'Developed a project allowing users to input photos/PDFs, generating handwritten PDF outputs for assignments.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTKwNye9mltfjfzAN1ve-4Q5B4MdjrpshIA&s',
      technologies: ['PDF Manipulation', 'Image Processing'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    },
    {
      id: 'coders-cup',
      title: 'Coders Cup',
      description: 'Participated in and contributed to Coders Cup \'24, a competitive programming event, solving complex algorithmic challenges.',
      image: 'https://res.cloudinary.com/dlriiwcsn/image/upload/v1731254698/Coder_s_Cup_24_Logo_With_Sponsors_qyhl7g.png',
      technologies: ['Competitive Programming', 'Algorithms', 'Data Structures', 'Problem Solving'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'ai',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Web Application',
      description: 'Constructed a feature-rich web application providing customers with seamless online purchasing capabilities.',
      image: 'https://infostride.com/wp-content/uploads/2024/01/How-Much-Does-eCommerce-Website-Development-Cost.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    },
    {
      id: 'voice-sales-ai',
      title: 'Voice Sales AI Agent',
      description: 'A sophisticated AI agent designed for voice-based sales, capable of engaging customers in natural conversations to drive sales and improve customer experience.',
      image: 'https://img.freepik.com/free-vector/robotic-hand-using-touchscreen-virtual-hud-display-background_1441-2853.jpg',
      technologies: ['AI', 'Voice Recognition', 'Sales Automation', 'NLP'],
      links: {},
      category: 'ai',
    },
    {
      id: 'bond-management',
      title: 'Bond Management System for Florida',
      description: 'A comprehensive bond management system for the state of Florida, featuring integration with Liberty.',
      image: 'https://info.expeditors.com/hs-fs/hubfs/Photography%20Assets/Customs%20Bonds%20Overview%20graphic-01.jpg?width=320&name=Customs%20Bonds%20Overview%20graphic-01.jpg',
      technologies: ['System Integration', 'Regulatory Compliance', 'Data Management'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    },
    {
      id: 'payroll-automation',
      title: 'Payroll Processing Automation',
      description: 'Automated payroll system for companies like CTR, streamlining operations with advanced data extraction.',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQFdBp2lcFE3rg/article-cover_image-shrink_600_2000/B4DZc6hhi7HMAQ-/0/1749033556997?e=2147483647&v=beta&t=Z3u2bu_D_i-cQUgysMeXXpoVuyKurqXhkL819RSODng',
      technologies: ['Automation', 'Data Extraction', 'Payroll Systems'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    },
    {
      id: 'highgate-reporting',
      title: 'Highgate Hotels Reporting Automation',
      description: 'Automation for Highgate Hotels to collect chargeback reports from various payment processors like AMEX, Fiserv, Elavon, and Clearent.',
      image: 'https://static.dashthis.com/media/2277/blog_automation.svg',
      technologies: ['Automation', 'Reporting', 'Payment Processors'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    },
    {
      id: 'optifit-ai',
      title: 'Optifit.ai - AI Gym Trainer',
      description: 'Co-supervised a final year project at National University of Emerging Sciences - FAST. Optifit.ai is an AI gym trainer with a rep counter, meal planning, and workout planning according to your goal, featuring pose detection.',
      image: 'https://cdn.prod.website-files.com/5ecf8d4fd463368e57125560/5ecf8d4fd463363660125583_feature-2.png',
      technologies: ['AI', 'Pose Detection', 'Meal Planning', 'Workout Planning'],
      links: {
        github: 'https://github.com/kill3rstabs/optifit.ai',
      },
      category: 'ai',
    },
    {
      id: 'n8n-automation',
      title: 'Workflow Automation with n8n',
      description: 'Created various automations using n8n to streamline workflows and improve efficiency.',
      image: 'https://miro.medium.com/v2/resize:fit:1155/0*G-5F38rBStjlMNwd.png',
      technologies: ['n8n', 'Workflow Automation', 'API Integration'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    },
    {
      id: 'lms-courts',
      title: 'LMS for American Courts',
      description: 'A Learning Management System for American courts, designed for traffic courses.',
      image: 'https://all-digital.org/wp-content/uploads/2019/07/LMS-needed.jpg',
      technologies: ['LMS', 'E-Learning', 'Judicial System'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    },
    {
      id: 'metosi-chatbot',
      title: 'Metosi - Real-time Stock Analysis Chatbot',
      description: 'A chatbot that parses FIX logs in real-time and provides analysis of the US stock market.',
      image: 'https://unitedfintech.com/wp-content/uploads/2021/07/photo-1611974789855-9c2a0a7236a3-1500x1000.jpg',
      technologies: ['Chatbot', 'Real-time Data Processing', 'Stock Market Analysis', 'FIX Protocol'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'ai',
    },
    {
      id: 'ecommerce-app',
      title: 'Ecommerce Web Application',
      description: 'A full-featured ecommerce platform with product listings, a shopping cart, and a secure checkout process.',
      image: 'https://www.notiontechnologies.com/blog/wp-content/uploads/2023/03/how-to-build-an-ecommerce-website-from-scratch.webp',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      links: {
        github: 'https://github.com/kill3rstabs',
      },
      category: 'web',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-primary-dark">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-right">
          My Projects
        </h2>
        
        {/* Filter buttons */}
        <div 
          className="flex flex-wrap justify-center gap-4 mt-12 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'all'
                ? 'bg-secondary text-primary-dark font-medium'
                : 'bg-white dark:bg-primary-light text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-primary'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'web'
                ? 'bg-secondary text-primary-dark font-medium'
                : 'bg-white dark:bg-primary-light text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-primary'
            }`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'ai'
                ? 'bg-secondary text-primary-dark font-medium'
                : 'bg-white dark:bg-primary-light text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-primary'
            }`}
            onClick={() => setFilter('ai')}
          >
            AI / ML
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="card overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-primary rounded-full text-primary dark:text-secondary hover:bg-gray-100 dark:hover:bg-primary-light transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-primary rounded-full text-primary dark:text-secondary hover:bg-gray-100 dark:hover:bg-primary-light transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-primary text-gray-800 dark:text-text-secondary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More projects link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kill3rstabs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
            data-aos="fade-up"
          >
            <Code className="mr-2 h-5 w-5" />
            See More On GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;