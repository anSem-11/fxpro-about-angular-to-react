import './sponsorships-company-icons.scss';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';


const bem = buildBem('sponsorships-company-icons');

const iconAssetUrlPrefix = 'https://direct-website.azureedge.net/assets/img/pages/about-sponsorships';

type SponsorshipsIcon = {
  title: string;
  url: string;
};

const iconList: SponsorshipsIcon[] = [
  {
    title: 'McLaren',
    url: `${iconAssetUrlPrefix}/mclaren.svg`,
  },
  {
    title: 'Virgin',
    url: `${iconAssetUrlPrefix}/virgin.svg`,
  },
  {
    title: 'Sauber',
    url: `${iconAssetUrlPrefix}/sauber.svg`,
  },
  {
    title: 'Fullham FC',
    url: `${iconAssetUrlPrefix}/fullham_fc.svg`,
  },
  {
    title: 'Aston Villa FC',
    url: `${iconAssetUrlPrefix}/av_fc.svg`,
  },
  {
    title: 'Monaco FC',
    url: `${iconAssetUrlPrefix}/monaco_fc.svg`,
  },
  {
    title: 'Watford FC',
    url: `${iconAssetUrlPrefix}/watford_fc.svg`,
  },
  {
    title: 'WRC',
    url: `${iconAssetUrlPrefix}/wrc.svg`,
  },
  {
    title: 'IRC',
    url: `${iconAssetUrlPrefix}/irc.svg`,
  },
];

export default function SponsorshipsCompanyIcons(): JSX.Element {
  return (
    <div className={bem()}>
      <div className={`${bem('wrapper')} sponsorships-container ${styleBlock({
        type: 'flex',
        alignType: 'center',
        justifyType: 'center',
      })}`}
      >
        {iconList.map((icon, index) => (
          <div
            key={index}
            className={bem('icon')}
          >
            <img
              alt={icon.title}
              src={icon.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
