import { Briefcase, Building2, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Cybersecurity Intern',
    organization: 'Rajasthan Police (Cyber Cell)',
    location: 'Jaipur, Rajasthan',
    period: 'Internship',
    description: 'Gained hands-on experience in cyber crime investigation, digital forensics, and security incident response. Assisted in analyzing cyber threats and supporting law enforcement operations.',
    highlights: ['Digital Forensics', 'Incident Response', 'Threat Analysis', 'Law Enforcement Support']
  },
  {
    title: 'Cybersecurity Intern',
    organization: 'Uttar Pradesh Police (Cyber Cell)',
    location: 'Amroha, Uttar Pradesh',
    period: 'Internship',
    description: 'Contributed to cybersecurity awareness initiatives and assisted in investigating cyber crimes. Developed understanding of real-world security challenges faced by law enforcement.',
    highlights: ['Cyber Crime Investigation', 'Security Awareness', 'Report Writing', 'Evidence Collection']
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Experience</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Terminal intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-lg px-6 py-3">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground ml-2">cat /var/log/career.log</span>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.organization}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}
              >
                {/* Timeline dot - positioned on the center line */}
                <div className={`absolute top-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary))] left-0 -translate-x-1/2 ${index % 2 === 0 ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}`} />
                
                {/* Content card */}
                <div className="cyber-card p-6 ml-8 md:ml-0 group hover-glow">
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-2 bg-primary/20 rounded-lg shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-secondary font-medium">{exp.organization}</p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 text-xs border border-primary/30 text-primary/70 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
