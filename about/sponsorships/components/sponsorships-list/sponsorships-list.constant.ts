export type SponsorshipsListItemProps = {
  id: string;
  imageUrl: string;
  flagUrl: string;
  title: string;
  period: string;
  largeImage?: boolean;
};

const imageAssetUrlPrefix = 'https://direct-website.azureedge.net/assets/img/pages/about-sponsorships/other_sponsorships';
const flagAssetUrlPrefix = 'https://direct-website.azureedge.net/assets/img/sections/section-other-sponsorships';

export const PREVIOUS_SPONSORSHIPS: SponsorshipsListItemProps[] = [
  {
    id: 'watford-fc',
    imageUrl: `${imageAssetUrlPrefix}/watford_fc.webp`,
    flagUrl: `${flagAssetUrlPrefix}/United-Kingdom.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title1',
    period: '2017 ― 2019',
    largeImage: true,
  },
  {
    id: 'aston-villa-fc',
    imageUrl: `${imageAssetUrlPrefix}/aston_villa_fc.webp`,
    flagUrl: `${flagAssetUrlPrefix}/United-Kingdom.svg`,
    title: 'aboutUs_SponsorshipSponsor4',
    period: '2012 ― 2013',
  },
  {
    id: 'fulham-fc',
    imageUrl: `${imageAssetUrlPrefix}/fullham_fc.webp`,
    flagUrl: `${flagAssetUrlPrefix}/United-Kingdom.svg`,
    title: 'aboutUs_SponsorshipSponsor2',
    period: '2012 ― 2013',
  },
  {
    id: 'virgin-racing',
    imageUrl: `${imageAssetUrlPrefix}/virgin_racing.webp`,
    flagUrl: `${flagAssetUrlPrefix}/United-Kingdom.svg`,
    title: 'aboutUs_SponsorshipSponsorVirginRacingF1team',
    period: '2010',
    largeImage: true,
  },
  {
    id: 'monaco-fc',
    imageUrl: `${imageAssetUrlPrefix}/monaco_fc.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Monaco.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title4',
    period: '2011 - 2012',
  },
  {
    id: 'wrc-rally-forex-partner',
    imageUrl: `${imageAssetUrlPrefix}/wrc_partner.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Cyprus.svg`,
    title: 'aboutUs_SponsorshipSponsor5',
    period: '2011',
  },
  {
    id: 'irc-rally',
    imageUrl: `${imageAssetUrlPrefix}/irc.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Cyprus.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title5',
    period: '2009',
  },
  {
    id: 'wrc-rally',
    imageUrl: `${imageAssetUrlPrefix}/wrc.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Cyprus.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title6',
    period: '2010',
  },
  {
    id: 'formula-1-bmw-sauber-f1-team',
    imageUrl: `${imageAssetUrlPrefix}/f1_bmw.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Switzerland.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title7',
    period: '2009',
  },
  {
    id: 'superstar-sunday-golf-tournament',
    imageUrl: `${imageAssetUrlPrefix}/superstar_golf.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Cyprus.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title8',
    period: '2010',
  },
  {
    id: 'super-rugby-naming-rights-partner',
    imageUrl: `${imageAssetUrlPrefix}/super_rugby.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Australia.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title10',
    period: '2009',
  },
  {
    id: 'afc-champions-league',
    imageUrl: `${imageAssetUrlPrefix}/afc.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Malaysia.svg`,
    title: 'page_sponsorship_sectionOtherSponsorships_title9',
    period: '2008',
  },
  {
    id: 'volleyball-monte-carlo',
    imageUrl: `${imageAssetUrlPrefix}/monte_carlo_volleyball.webp`,
    flagUrl: `${flagAssetUrlPrefix}/Monaco.svg`,
    title: 'aboutUs_SponsorshipSponsorVolley',
    period: '2011-2018',
  },
];
