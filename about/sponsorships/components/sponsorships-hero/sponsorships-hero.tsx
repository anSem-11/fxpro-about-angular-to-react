import './sponsorships-hero.scss';

import { CSS_DESKTOP_WIDTH, CSS_TABLET_WIDTH } from '@fx-project-shared/features/device/device.constant';
import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';

import SponsorshipsUiHero from './components/sponsorships-ui-hero/sponsorships-ui-hero.component';


const bem = buildBem('sponsorships-hero');

const bgImageAssetUrlPrefix = 'https://direct-website.azureedge.net/assets/img/pages/about-sponsorships';

export default function SponsorshipsHero(): JSX.Element {
  return (
    <section className={`${bem()}`}>
      <div>
        <div className={`${bem('wrapper')} ${styleBlock({
          type: 'flex',
          alignType: 'center',
        })}`}
        >
          <SponsorshipsUiHero
            bgPicture={(
              <picture>
                <source
                  srcSet={`
                ${bgImageAssetUrlPrefix}/sponsorships-bg-mobile-05x.webp 160w,
                ${bgImageAssetUrlPrefix}/sponsorships-bg-mobile-1x.webp 320w,
                ${bgImageAssetUrlPrefix}/sponsorships-bg-mobile-2x.webp 640w,
                ${bgImageAssetUrlPrefix}/sponsorships-bg-mobile-3x.webp 960w
              `}
                  media={`(max-width: ${CSS_TABLET_WIDTH - 1}px)`}
                />

                <source
                  srcSet={`
                ${bgImageAssetUrlPrefix}/sponsorships-bg-tablet-1x.webp 834w,
                ${bgImageAssetUrlPrefix}/sponsorships-bg-tablet-2x.webp 1668w,
                ${bgImageAssetUrlPrefix}/sponsorships-bg-tablet-3x.webp 2502w,
              `}
                  media={`(min-width: ${CSS_TABLET_WIDTH}px) and (max-width: ${CSS_DESKTOP_WIDTH}px)`}
                />

                <source
                  srcSet={`
                ${bgImageAssetUrlPrefix}/sponsorships-bg-desktop-1x.webp 1500w,
                ${bgImageAssetUrlPrefix}/sponsorships-bg-desktop-2x.webp 3000w,
                ${bgImageAssetUrlPrefix}/sponsorships-bg-desktop-3x.webp 4500w,
              `}
                  media={`(min-width: ${CSS_DESKTOP_WIDTH}px)`}
                />

                <img
                  className={bem('background')}
                  src={`${bgImageAssetUrlPrefix}/sponsorships-bg-mobile-05x.webp`}
                />
              </picture>
            )}
            descriptionKey="sponsorships_hero_description"
            modifier="sponsorships"
            screenSizeBreakPoint="tablet"
            titleKey="sponsorships_hero_title"
            titleMobileKey="sponsorships_hero_title_mobile"
          />
        </div>
      </div>
    </section>
  );
}
