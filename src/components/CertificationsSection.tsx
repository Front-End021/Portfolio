import { Award, Shield, Cloud, Network, Search } from 'lucide-react';

const certifications = [
  {
    title: 'Ethical Hacking Essentials',
    issuer: 'EC-Council',
    icon: Shield,
    color: 'primary',
    link: 'https://www.coursera.org/account/accomplishments/verify/FOOEYXR8FCXQ'
  },
  {
    title: 'CCST Cybersecurity',
    issuer: 'Cisco',
    icon: Network,
    color: 'secondary',
    link: 'https://www.credly.com/badges/1d9344b6-265c-43dc-a863-ef28f21b12ef/linked_in_profile'
  },
  {
    title: 'CyberSecurity Certificate',
    issuer: 'Google Cloud',
    icon: Cloud,
    color: 'primary',
    link: 'https://www.credly.com/badges/c5f9de60-a768-4891-889d-11ddfc155835/linked_in_profile'
  },
  {
    title: 'OCI Networking Professional',
    issuer: 'Oracle',
    icon: Cloud,
    color: 'secondary',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1B2074D633BC52C68BDC5404F8108365C2999D9BDBB2BAA84EDE66299B702145'
  },
  {
    title: 'Junior Penetration Tester',
    issuer: 'TryHackMe',
    icon: Search,
    color: 'primary',
    link: 'https://tryhackme.com/certificate/THM-GWWI8Q8R5N'
  },
  {
    title: 'CompTIA Pentest+',
    issuer: 'TryHackMe',
    icon: Shield,
    color: 'secondary',
    link: 'https://tryhackme.com/certificate/THM-VWFJFNHAZC'
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Certifications</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Terminal intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-lg px-6 py-3">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground ml-2">gpg --verify certifications.sig</span>
          </div>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-6 group hover-glow relative overflow-hidden block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${cert.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${cert.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                    <cert.icon className={`w-6 h-6 ${cert.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                
                {/* Verification badge */}
                <div className="mt-4 flex items-center gap-2 text-xs text-secondary">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span>Verified • Click to view</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
