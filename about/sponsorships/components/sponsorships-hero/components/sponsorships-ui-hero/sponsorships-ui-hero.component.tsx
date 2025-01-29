import './sponsorships-ui-hero.scss';

import { Tx } from '@react-features/translation/tx.component';
import { UiAnimateOnVisible } from '@react-ui/animation/ui-animate-visible.component';

import type { PropsWithChildren, ReactNode } from 'react';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


type SponsorshipsHeroMode = 'full' | 'simple';

export type SponsorshipsUiHeroProps = PropsWithChildren<{
  modifier: string;
  titleKey: string;
  titleMobileKey?: string;
  screenSizeBreakPoint?: 'mobile' | 'tablet' | 'desktop';
  descriptionKey: string;
  mode?: SponsorshipsHeroMode;
  videoSrc?: string;
  videoPoster?: string;
  titleIcon?: ReactNode;
  descriptionAnimationMode?: 'default' | 'without';
  bgPicture?: ReactNode;
  className?: string;
}>;

type VideoProps = {
  videoSrc: string;
  modifier: string;
  videoPoster?: string;
};


const bem = buildBem('sponsorships-ui-hero');

const Video = ({
  videoSrc,
  modifier,
  videoPoster = null,
}: VideoProps): JSX.Element => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={bem('video', { [modifier]: true })}
      poster={videoPoster}
    >
      <source
        src={videoSrc}
        type="video/webm"
      />
    </video>
  );
};

export default function SponsorshipsUiHero({
  modifier,
  titleKey,
  titleMobileKey,
  screenSizeBreakPoint,
  descriptionKey,
  children,
  mode = 'full',
  videoSrc,
  videoPoster,
  descriptionAnimationMode = 'default',
  bgPicture,
  titleIcon,
  className,
}: SponsorshipsUiHeroProps): JSX.Element {
  const modeClassSuffix = mode !== 'full' ? `_${mode}` : '';
  const descriptionModeSuffix = descriptionAnimationMode !== 'default' ? `_${descriptionAnimationMode}` : '';

  return (
    <section className={`${bem({ [modifier]: true })} ${className ? className : ''}`}>
      {bgPicture && bgPicture}
      <div className="container">
        <div className={bem('wrapper', { [modifier]: true })}>
          {videoSrc
            ? (
              <Video
                modifier={modifier}
                videoPoster={videoPoster}
                videoSrc={videoSrc}
              />
            )
            : children}
          <UiAnimateOnVisible animationClassName={`g-hero-animation${modeClassSuffix}`}>
            <h1 className={`g-hero-title${modeClassSuffix} ${bem('title')} ${titleMobileKey ? `hide-below-${screenSizeBreakPoint}` : ''}`}>
              <Tx>{titleKey}</Tx>
              {titleIcon}
            </h1>
            {titleMobileKey && (
              <h1 className={`g-hero-title${modeClassSuffix} ${bem('title')} ${titleMobileKey ? `hide-above-${screenSizeBreakPoint}` : ''}`}>
                <Tx>{titleMobileKey}</Tx>
                {titleIcon}
              </h1>
            )}
          </UiAnimateOnVisible>
          <UiAnimateOnVisible
            animationClassName={`g-hero-description-animation${descriptionModeSuffix}`}
            className={`g-hero-description${modeClassSuffix}`}
          >
            <Tx>{descriptionKey}</Tx>
          </UiAnimateOnVisible>
        </div>
      </div>
    </section>
  );
}
