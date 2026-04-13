export function Tech() {
  const arsenals = [
    {
      category: "Front-end",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: ["REACT", "NEXT.JS", "TAILWIND", "TYPESCRIPT", "JAVASCRIPT", "VUE.JS", "VITE"],
    },
    {
      category: "Back-end",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      skills: ["LARAVEL", "NODE.JS", "MYSQL", "POSTGRESQL", "RUBY ON RAILS", "API REST", "GRAPHQL"],
    },
    {
      category: "Sistemas",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: ["DOCKER", "AWS", "GIT", "CI/CD", "GITLAB", "BITBUCKET", "CLAUDE CODE"],
    },
  ];

  return (
    <section id="tech" className="py-24 md:px-32 bg-surface">
      <div className="w-full mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter mb-2 text-text-main">
            Habilidades
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arsenals.map((arsenal, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-lg shadow-black/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {arsenal.icon}
                </div>
                <h3 className="text-xl font-headline font-bold text-text-main">
                  {arsenal.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {arsenal.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
