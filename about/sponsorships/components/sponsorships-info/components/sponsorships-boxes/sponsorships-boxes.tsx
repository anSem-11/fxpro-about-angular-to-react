import './sponsorships-boxes.scss';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';

import SponsorshipsBox from './components/sponsorships-box/sponsorships-box';
import SponsorshipsCompanyIcons from './components/sponsorships-company-icons/sponsorships-company-icons';


const bem = buildBem('sponsorships-boxes');

export default function SponsorshipsBoxes(): JSX.Element {
  return (
    <div className={`${bem()} sponsorships-vertical-container`} >
      <div className={`${bem('wrapper')} ${styleBlock({
        type: 'flex',
        alignType: 'center',
        justifyType: 'center',
      })} sponsorships-container`}
      >
        <SponsorshipsBox
          description="page_sponsorship_sectionHero_smallTitle"
          title="3"
        />
        <SponsorshipsBox
          description="page_sponsorship_sectionHero_smallTitle2"
          title="4"
        />
        <SponsorshipsBox
          description="page_sponsorship_sectionHero_smallTitle3"
          title="2"
        />
        <SponsorshipsBox
          description="page_sponsorship_sectionHero_smallTitle4"
          title="22+"
        />
      </div>
      <SponsorshipsCompanyIcons />
    </div>
  );
}
