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
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-text-primary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            NASHIT BUDHWANI
          </h1>
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-text-secondary mb-6"
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
            className="text-lg text-gray-600 dark:text-text-secondary mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            A passionate and dedicated software engineer with experience in building robust and scalable applications.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="btn-secondary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="btn-primary"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm text-gray-500 dark:text-text-secondary mb-2">
            Scroll Down
          </span>
          <ArrowDown className="h-6 w-6 text-secondary" />
        </Link>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
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