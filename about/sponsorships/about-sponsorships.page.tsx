import './sponsorships.scss';

import { Main } from '@react-features/main/main.component';

import SponsorshipsCards from './components/sponsorships-cards/sponsorships-cards';
import SponsorshipsHero from './components/sponsorships-hero/sponsorships-hero';
import SponsorshipsInfo from './components/sponsorships-info/sponsorships-info';
import SponsorshipsList from './components/sponsorships-list/sponsorships-list';


export default function Sponsorships(): JSX.Element {
  return (
    <Main>
      <SponsorshipsHero />
      <SponsorshipsInfo />
      <SponsorshipsCards />
      <SponsorshipsList />
    </Main>
  );
}
