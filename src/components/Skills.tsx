import { useState, useEffect, useRef } from 'react';
import { Code, Layout, Settings, User } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      name: 'Languages',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'C#', level: 90 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Go', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C/C++', level: 70 },
      ],
    },
    {
      id: 'frameworks',
      name: 'Frameworks',
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: 'ASP.NET', level: 90 },
        { name: 'DOTNET Core', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'ExpressJS', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'Flask', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: 'Laravel', level: 75 },
        { name: 'ReactJS', level: 90 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Keras', level: 80 },
        { name: 'PyTorch', level: 80 },
        { name: 'OpenCV', level: 75 },
      ],
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: 'Software Engineering', level: 95 },
        { name: 'Database Management', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'DevOps', level: 80 },
        { name: 'Cloud', level: 80 },
        { name: 'Azure', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 95 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Full-stack Web Development', level: 90 },
        { name: 'OOP', level: 95 },
        { name: 'Data Structures', level: 90 },
        { name: 'Data Science', level: 85 },
      ],
    },
    {
      id: 'soft-skills',
      name: 'Soft Skills',
      icon: <User className="h-6 w-6" />,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Analytical Thinking', level: 95 },
        { name: 'Punctuality', level: 100 },
        { name: 'Critical Thinking', level: 95 },
        { name: 'Adaptability', level: 90 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-primary-dark" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-right">
          My Skills
        </h2>
        
        <div className="mt-12">
          {/* Skills Categories */}
          <div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-secondary text-primary-dark font-medium shadow-md'
                    : 'bg-white dark:bg-primary-light text-gray-700 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-primary'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Skills Progress Bars */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {activeSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 dark:text-text-primary">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-text-secondary">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;