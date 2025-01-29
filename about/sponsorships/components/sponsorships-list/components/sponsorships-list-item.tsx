import './sponsorships-list-item.scss';

import { Tx } from '@react-features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';

import type { SponsorshipsListItemProps } from '../sponsorships-list.constant';


const bem = buildBem('sponsorships-list-item');


export default function SponsorshipsListItem(sponsorship: SponsorshipsListItemProps): JSX.Element {
  return (
    <div
      key={sponsorship.id}
      className={`${bem()} ${styleBlock({
        type: 'flex',
        alignType: 'center',
      })} ${sponsorship.largeImage ? bem('span-2') : ''}`}
    >
      <div
        className={`${bem('content')} ${styleBlock({
          type: 'flex',
          direction: 'column',
        })}`}
      >
        <div className={bem('image')}>
          <picture>
            <source srcSet={sponsorship.imageUrl} />
            <img
              alt="Sponsorship Image"
              src={sponsorship.imageUrl}
            />
          </picture>
        </div>
        <div
          className={`${bem('text')} ${styleBlock({
            type: 'flex',
            alignType: 'start',
          })}`}
        >
          <img
            alt="Flag"
            src={sponsorship.flagUrl}
          />
          <div
            className={`${bem('name-block')} ${styleBlock({
              type: 'flex',
              alignType: 'start',
              justifyType: 'between',
            })}`}
          >
            <h3 className={bem('title')}>
              <Tx>{sponsorship.title}</Tx>
            </h3>
            <p className={bem('period')}>
              <Tx>{sponsorship.period}</Tx>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
