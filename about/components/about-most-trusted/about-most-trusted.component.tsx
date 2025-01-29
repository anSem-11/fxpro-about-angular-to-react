import './about-most-trusted.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useWebsiteTypeStore } from '@react-root/store/website-type.store';
import UiSvgIcon from '@react-root/ui/icons/ui-svg-icon.component';
import UiDirectLink from '@react-root/ui/ui-direct-link/ui-direct-link.component';
import { UiButton } from '@react-ui/button/ui-button.component';
import MostTrustedBrokerAward from '@react-ui/icons/logos/ui-icon-most-trusted-broker-award.component';

import { Fragment } from 'react';

import { WebsiteType } from '@fx-project-shared/constants/website-type.enum';
import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleSpacing } from '@fx-project-shared/features/style/style-spacing/style-spacing.util';
import { styleText } from '@fx-project-shared/features/style/style-text/style-text.util';


const bem = buildBem('about-most-trusted');

type Instruments = {
  name: string;
  url: string;
}[];

const INSTRUMENTS: Instruments = [
  {
    name: 'about-us-most-trusted-link-forex',
    url: '/trading/forex',
  },
  {
    name: 'about-us-most-trusted-link-shares',
    url: '/trading/shares',
  },
  {
    name: 'about-us-most-trusted-link-indices',
    url: '/trading/indices',
  },
  {
    name: 'about-us-most-trusted-link-futures',
    url: '/trading/futures',
  },
  {
    name: 'about-us-most-trusted-link-metals',
    url: '/trading/metals',
  },
  {
    name: 'about-us-most-trusted-link-energy',
    url: '/trading/energies',
  },
];

type AboutMostTrustedProps = {
  isNonEu: boolean;
};

export default function AboutMostTrusted({ isNonEu }: AboutMostTrustedProps): JSX.Element {
  const websiteType = useWebsiteTypeStore();

  const isInvestWebsiteType = websiteType === WebsiteType.Invest;

  const renderInstrumentsList = (isInvestWebsiteType: boolean) => {
    function getCharacterToPrint(index: number, array: Instruments): string {
      const indexToStopCharacterPrinting = 2;

      return index < (array.length - 1) && (index === array.length - indexToStopCharacterPrinting ? ' and ' : ', ');
    }

    return (
      <p className={`${bem('banner-text')}`}>
        <span>
          <Tx>about-us-most-trusted-banner-text-1</Tx>
          {' '}
          {INSTRUMENTS.map((instrument, index, array) => {
            const isForexShown = !(isInvestWebsiteType && instrument.url === '/trading/forex');

            return isForexShown
              && (
                <Fragment key={instrument.name}>
                  <a href={instrument.url}><Tx>{instrument.name}</Tx></a>
                  {getCharacterToPrint(index, array)}
                </Fragment>
              );
          })}
          .
          {' '}
          <Tx>about-us-most-trusted-banner-text-2</Tx>
        </span>
      </p>
    );
  };

  return (
    <section className={bem()}>
      <div className="container">
        <div className={bem('info-wrapper')}>
          <p className={`
            ${styleText({
      size: '2xl',
      fontWeight: '600',
      lineHeight: '130',
      align: 'left',
    })}
            ${styleSpacing({ mb: '5xl' })}
            ${bem('info')}
          `}
          >
            <Tx>about-us-most-trusted-info-text-1</Tx>
          </p>
          <UiDirectLink
            className={bem('button')}
            dataTestId="about-most-trusted"
            mode="register"
          >
            <UiButton size="l"><Tx>about-us-most-trusted-btn</Tx></UiButton>
          </UiDirectLink>
        </div>
        <div className={bem('banner')}>
          {isNonEu
            ? (
              <UiSvgIcon
                style={{
                  width: '175px',
                  height: '154px',
                }}
                alt="Webtrader Icon."
                className={bem('award-noneu')}
                src="https://direct-website.azureedge.net/assets/img/pages/about-us-page/investors-chronicle-award.svg"
              />
            )
            : <MostTrustedBrokerAward className={bem('award-icon')} />}
          {renderInstrumentsList(isInvestWebsiteType)}
          <p className={bem('banner-text')}>
            <Tx>{isNonEu ? 'about-us-most-trusted-banner-text-3_noneu' : 'about-us-most-trusted-banner-text-3'}</Tx>
          </p>
        </div>
      </div>
    </section>
  );
}
