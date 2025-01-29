export function getAboutAchievements(awards: string, years_of_operation: string): AboutAchievements {
  return [
    {
      title: '$120.000.000',
      description: 'about-us-achievements-capital',
      gridArea: 'capital',
    },
    {
      title: '4',
      description: 'about-us-achievements-platforms',
      gridArea: 'platforms',
    },
    {
      title: `${awards}+`,
      description: 'about-us-achievements-awards',
      gridArea: 'awards',
    },
    {
      title: '&lt;12 ms',
      description: 'about-us-achievements-execution',
      gridArea: 'execution',
    },
    {
      title: `${years_of_operation}+`,
      description: 'about-us-achievements-years',
      gridArea: 'years',
    },
    {
      title: '2100+',
      description: 'about-us-achievements-instruments',
      gridArea: 'instruments',
    },
    {
      title: '9',
      description: 'about-us-achievements-sponsorships',
      gridArea: 'sponsorships',
    },
    {
      title: '635+',
      description: 'about-us-achievements-orders',
      gridArea: 'orders',
    },
  ];
}

type AboutAchievements = {
  title: string;
  description: string;
  gridArea: string;
}[];
