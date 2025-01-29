import './about-invest.scss';

import { Tx } from '@react-features/translation/tx.component';
import CoatOfArms from '@react-ui/icons/logos/ui-icon-coat-of-arms.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleSpacing } from '@fx-project-shared/features/style/style-spacing/style-spacing.util';
import { styleText } from '@fx-project-shared/features/style/style-text/style-text.util';


const bem = buildBem('about-invest');

const baseImageUrl = 'https://direct-website.azureedge.net/assets/img/pages/about-us-page/';

const LOGOS = [
  {
    src: 'invest-in-gb.svg',
    height: 60,
    width: 82,
  },
  {
    src: 'FxPro_Logo_Main_RedBG.svg',
    height: 100,
    width: 100,
  },
  {
    src: 'coat-of-arms-small-logo.svg',
    height: 88,
    width: 82,
  },
];

export default function AboutInvest(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <CoatOfArms className={bem('coat-of-arms-icon')} />
        <p className={`${bem('description')} ${styleSpacing({ mb: 'm' })}`}>
          <Tx>about-us-invest-description-1</Tx>
        </p>
        <h2 className={`
          ${styleText({
      size: '3xl',
      fontWeight: '600',
      lineHeight: '100',
      align: 'center',
    })}
          ${styleSpacing({ mb: 'm' })}
        `}
        >
          <Tx>about-us-invest-title</Tx>
        </h2>
        <p className={`${bem('description')} ${styleSpacing({ mb: '5xl' })}`}>
          <Tx>about-us-invest-description-2</Tx>
        </p>
        <div className={bem('logos-wrapper')}>
          {LOGOS.map((logo, index) => (
            <img
              key={index}
              alt={logo.src}
              className={bem('logo')}
              height={logo.height}
              loading="lazy"
              src={`${baseImageUrl}${logo.src}`}
              width={logo.width}
            />
          ))}
        </div>
        <p className={styleText({
          size: 'm',
          lineHeight: '130',
          align: 'center',
        })}
        >
          <Tx>about-us-invest-visit-link</Tx>
        </p>
      </div>
    </section>
  );
}
