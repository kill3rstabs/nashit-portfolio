import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-primary-dark dark:to-primary"
    >
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p 
            className="text-secondary font-medium mb-4 tracking-wider"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            HELLO, MY NAME IS
          </p>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-text-primary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="hidden md:inline">NASHIT BUDHWANI</span>
            <span className="md:hidden">Nashit B.</span>
          </h1>
          <h2 
            className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-text-secondary mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I'm a{' '}
            <ReactTyped
              strings={[
                'Software Engineer',
                'Full Stack Developer',
                'AI Engineer'
              ]}
              typeSpeed={80}
              backSpeed={50}
              loop
              className="text-secondary"
            />
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-600 dark:text-text-secondary mb-10 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            A passionate and dedicated software engineer with experience in building robust and scalable applications.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="btn-secondary text-lg"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="btn-primary text-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-sm text-gray-500 dark:text-text-secondary mb-1 transition-opacity duration-300 opacity-70 group-hover:opacity-100">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 text-secondary animate-bounce-slow" />
        </Link>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;