import './sponsorships-main-card.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiButton } from '@react-ui/button/ui-button.component';

import { CSS_DESKTOP_WIDTH, CSS_TABLET_WIDTH } from '@fx-project-shared/features/device/device.constant';
import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';


type SponsorshipsMainCardProps = {
  card: {
    logoUrl: string;
    mainImageUrl: string;
    buttonLink: string;
  };
};

const bem = buildBem('sponsorships-main-card');

export default function SponsorshipsMainCard({ card }: SponsorshipsMainCardProps ): JSX.Element {
  return (
    <div className={`${bem()} sponsorships-vertical-container main-card-margin-extra ${styleBlock({ type: 'flex' })}`}>
      <div className={`${bem('wrapper')} ${styleBlock({
        type: 'flex',
        alignType: 'center',
        justifyType: 'center',
        direction: 'column',
      })}`}
      >
        <img
          alt="Logo"
          className={bem('logo')}
          src={card.logoUrl}
        />
        <picture>
          <source
            srcSet={`
                ${card.mainImageUrl}_mobile.webp 320w,
                ${card.mainImageUrl}_mobile@2x.webp 640w,
                ${card.mainImageUrl}_mobile@3x.webp 960w
              `}
            media={`(max-width: ${CSS_TABLET_WIDTH - 1}px)`}
          />

          <source
            srcSet={`
                ${card.mainImageUrl}_tablet.webp 754w,
                ${card.mainImageUrl}_tablet@2x.webp 1508w,
                ${card.mainImageUrl}_tablet@3x.webp 2262w,
              `}
            media={`(min-width: ${CSS_TABLET_WIDTH}px) and (max-width: ${CSS_DESKTOP_WIDTH}px)`}
          />

          <source
            srcSet={`
                ${card.mainImageUrl}_desktop.webp 1170w,
                ${card.mainImageUrl}_desktop@2x.webp 2340w,
                ${card.mainImageUrl}_desktop@3x.webp 3510w,
              `}
            media={`(min-width: ${CSS_DESKTOP_WIDTH}px)`}
          />

          <img
            className={bem('image')}
            src={`${card.mainImageUrl}_mobile.webp 320w`}
          />
        </picture>
        <a
          href={card.buttonLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          <UiButton
            className={bem('button')}
            type="passive"
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
