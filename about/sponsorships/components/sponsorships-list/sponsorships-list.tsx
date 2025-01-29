import './sponsorships-list.scss';

import { Tx } from '@react-features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';

import SponsorshipListItem from './components/sponsorships-list-item';
import { PREVIOUS_SPONSORSHIPS } from './sponsorships-list.constant';

const bem = buildBem('sponsorships-list');

export default function SponsorshipsList(): JSX.Element {
  return (
    <section className={`${bem()} sponsorships-container`}>
      <div className="sponsorships-vertical-container">
        <div className={bem('title')}><Tx>page_gallery_panelTitle04</Tx></div>
        <div className={`${bem('list')} ${styleBlock({
          type: 'grid',
          justifyType: 'center',
          alignType: 'start',
        })}`}
        >
          {PREVIOUS_SPONSORSHIPS.map(sponsorship => (
            <SponsorshipListItem
              key={sponsorship.id}
              {...sponsorship}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
