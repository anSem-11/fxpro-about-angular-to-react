import './sponsorships-card.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiButton } from '@react-ui/button/ui-button.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';


type SponsorshipsCardProps = {
  card: {
    logoUrl: string;
    title: string;
    subtitle: string;
    description: string;
    buttonLink: string;
  };
};

const bem = buildBem('sponsorships-card');

export default function SponsorshipsCard({ card }: SponsorshipsCardProps ): JSX.Element {
  return (
    <div className={`${bem()} ${styleBlock({ type: 'flex' })}`}>
      <div className={`${bem('wrapper')} ${styleBlock({
        type: 'flex',
        alignType: 'center',
        justifyType: 'end',
        direction: 'column',
      })} sponsorships-container`}
      >
        <img
          alt="Logo"
          className={bem('logo')}
          src={card.logoUrl}
        />
        <div className={`${bem('text-block')} ${styleBlock({
          type: 'flex',
          alignType: 'center',
          justifyType: 'center',
          direction: 'column',
        })}`}
        >
          <h3 className={bem('title')}><Tx>{card.title}</Tx></h3>
          <h4 className={bem('subtitle')}><Tx>{card.subtitle}</Tx></h4>
          <p className={bem('description')}><Tx>{card.description}</Tx></p>
        </div>
        <a
          href={card.buttonLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <UiButton
            className={bem('button')}
            type="faint"
          >
            <Tx>global_learnMore</Tx>
            {' '}
            →
          </UiButton>
        </a>
      </div>
    </div>
  );
}
