import './sponsorships-cards.scss';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';

import SponsorshipsCard from './components/sponsorships-card/sponsorships-card';
import SponsorshipsMainCard from './components/sponsorships-main-card/sponsorships-main-card';


const imageAssetUrlPrefix = 'https://direct-website.azureedge.net/assets/img/pages/about-sponsorships';

type SponsorshipsOtherCardProps = {
  logoUrl: string;
  title: string;
  subtitle: string;
  description: string;
  buttonLink: string;
};

type SponsorshipsCardsProps = {
  main: {
    logoUrl: string;
    mainImageUrl: string;
    buttonLink: string;
  };
  card1: SponsorshipsOtherCardProps;
  card2: SponsorshipsOtherCardProps;
};

const CARDS: SponsorshipsCardsProps = {
  main: {
    logoUrl: `${imageAssetUrlPrefix}/mclaren_sponsorship_logo.svg`,
    mainImageUrl: `${imageAssetUrlPrefix}/car`,
    buttonLink: 'https://in-speed-we-trust.com/',
  },
  card1: {
    logoUrl: `${imageAssetUrlPrefix}/monaco-yachtclub.svg`,
    title: 'sponsorship_YachtClubDeMonaco',
    subtitle: 'page_sponsorship_sectionCurrent_MonacoYachtClub_text',
    description: 'page_sponsorship_sectionCurrent_MonacoYachtClub_note',
    buttonLink: 'https://yacht-club-monaco.mc/en/yacht-club-en/partners-club/',
  },
  card2: {
    logoUrl: `${imageAssetUrlPrefix}/beda-sailing-team.svg`,
    title: 'page_sponsorship_sectionCurrent_BedaSailingTeam_Title',
    subtitle: 'page_sponsorship_sectionCurrent_BedaSailingTeam_text',
    description: 'page_sponsorship_sectionCurrent_MonacoYachtClub_note2',
    buttonLink: 'https://beda.team',
  },
};

const bem = buildBem('sponsorships-cards');

export default function SponsorshipsCards(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="sponsorships-vertical-container">
        <SponsorshipsMainCard card={CARDS.main} />
        <div className={`${bem('other-cards')} sponsorships-container ${styleBlock({
          type: 'flex',
          justifyType: 'center',
        })}`}
        >
          <SponsorshipsCard card={CARDS.card1} />
          <SponsorshipsCard card={CARDS.card2} />
        </div>
      </div>
    </section>
  );
}
