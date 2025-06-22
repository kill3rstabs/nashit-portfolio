import { CheckCircle } from 'lucide-react';
import Section from './Section.tsx';
import SectionTitle from './SectionTitle.tsx';

const services = [
  'Full-Stack Web Development with Django, React, and modern frameworks',
  'Custom Backend Solutions using Python, FastAPI, and Node.js',
  'AI-Powered Features (e.g., chatbots, object detection with YOLOv7, predictive models)',
  'Automation Workflows with n8n, Make.com, and custom scripts',
  'API Design & Integration (RESTful) for seamless connectivity',
  'Database Management (MongoDB, PostgreSQL, SQL) and DevOps with Docker',
  'Custom AI Agents that reason, plan, and take actions (e.g., AutoGPT, DSPy)',
  'Agentic RAG Systems – retrieval-augmented generation with context-aware AI agents',
  'End-to-end solutions for lead generation, customer support, data handling, and more',
];

const whyChooseMe = [
  'Expertise across web development, AI/ML, automation, and system architecture',
  'Cross-disciplinary expertise in AI/ML, automation, and real-world business workflows',
  'Skilled in building scalable, modular, and secure systems for startups and enterprises',
  'Fast turnaround, custom-tailored implementations, and clear communication',
  'Strong background in tools like LangChain, Haystack, DSPy, Pytorch, FastAPI, Docker',
  '100% satisfaction with post-delivery support and improvements',
];

const perks = [
    'Future-Proof AI Stack – Stay ahead with modern tooling and LLM-native architectures',
    'Plug-and-Play AI Workflows – Easily extensible, documented, and modular code',
    'Scalable Infrastructure – Ready for cloud deployment (AWS, GCP, Dockerized apps)',
    'Ongoing Support & Optimization – I don\'t just build; I help you grow and iterate fast',
]

const Services = () => {
  return (
    <Section id="services">
      <SectionTitle>What I Offer</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={index * 100}>
            <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
            <p className="text-gray-700 dark:text-text-secondary">{service}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionTitle>Why Choose Me?</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {whyChooseMe.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-text-secondary">{reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionTitle>Exceptional Perks</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {perks.map((perk, index) => (
            <div key={index} className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-text-secondary">{perk}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services; 