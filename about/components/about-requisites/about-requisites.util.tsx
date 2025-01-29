export function getAboutRequisites(awards: string): AboutRequisites {
  return [
    {
      title: 'aboutUs_companyProfile_SWIFT',
      content: 'FXPRGB21',
    },
    {
      title: 'aboutUs_companyProfileTierCapital',
      content: '$120,000,000+',
    },
    {
      title: 'aboutUs_companyProfileLiquidityProviders',
      content: '12+',
    },
    {
      title: 'aboutUs_companyProfileNumberOffices',
      content: '5',
    },
    {
      title: 'aboutUs_companyProfileNumberEmployees',
      content: '500+',
    },
    {
      title: 'menu_awards',
      content: `${awards}+`,
    },
  ];
}

type AboutRequisites = {
  title: string;
  content: string;
}[];
