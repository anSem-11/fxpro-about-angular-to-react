import './about.scss';

import { Main } from '@react-features/main/main.component';
import { useRegulatorStore } from '@react-root/store/regulator.store';
import UiAchievements from '@react-root/ui/ui-achievements/ui-achievements.component';
import UiTimeline from '@react-root/ui/ui-timeline/ui-timeline.component';

import { Regulator } from '@fx-project-shared/models/regulators.model';

import UiHero from '../../ui/hero/ui-hero.component';

import AboutAchievements from './components/about-achievements/about-achievements.component';
import AboutAddresses from './components/about-addresses/about-addresses.component';
import AboutAmount from './components/about-amount/about-amount.component';
import AboutDocuments from './components/about-documents/about-documents.component';
import AboutFlags from './components/about-flags/about-flags.component';
import AboutHistory from './components/about-history/about-history.component';
import AboutInvest from './components/about-invest/about-invest.component';
import AboutMostTrusted from './components/about-most-trusted/about-most-trusted.component';
import AboutRequisites from './components/about-requisites/about-requisites.component';
import AboutSponsorship from './components/about-sponsorship/about-sponsorship.component';


export default function AboutPage(): JSX.Element {
  const regulator = useRegulatorStore();
  const isNonEu = ![ Regulator.FCA, Regulator.CySec ].includes(regulator);

  return (
    <Main>

      <UiHero
        descriptionKey="about-us-hero-description"
        modifier="about"
        titleKey="about-us-hero-title"
        videoPoster="https://direct-website.azureedge.net/assets/img/pages/about-us-page/video-bg-copy.webp"
        videoSrc="https://direct-website.azureedge.net/assets/img/pages/about-us-page/video-about-us.webm"
      />

      <UiTimeline />

      <AboutMostTrusted isNonEu={isNonEu} />

      <AboutFlags />

      <AboutInvest />

      <AboutAchievements />

      <AboutAddresses isNonEu={isNonEu} />

      <AboutDocuments isNonEu={isNonEu} />

      <AboutRequisites />

      <AboutHistory />

      <AboutAmount />

      <UiAchievements />

      <AboutSponsorship />

    </Main>
  );
}
