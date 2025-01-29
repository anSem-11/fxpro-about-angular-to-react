import './sponsorships-info.scss';

import UiAnimatedInfoBox from '@react-ui/animated-info-box/ui-animated-info-box.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import SponsorshipsBoxes from './components/sponsorships-boxes/sponsorships-boxes';


const bem = buildBem('sponsorships-info');

export default function SponsorshipsInfo(): JSX.Element {
  return (
    <section className={`${bem()}`}>
      <div className="sponsorships-vertical-container main-card-margin-extra">
        <SponsorshipsBoxes />
        <div className="container">
          <UiAnimatedInfoBox
            descriptionKey="page_sponsorship_sectionCurrent_description_v2"
            titleKey="page_sponsorship_sectionCurrent_title_v2"
          />
        </div>
      </div>
    </section>
  );
}
