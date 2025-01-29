import './about-addresses.scss';

import { Tx } from '@react-features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import { ABOUT_ADDRESSES_REGULATIONS, getAboutAddressesHistory } from './about-addresses.constant';


const bem = buildBem('about-addresses');

type AddressesItemProps = {
  title: string;
  content: string;
};

type AddressesCardProps = {
  logoSrc: string;
  items: AddressesItemProps[];
  isNonEu?: boolean;
};

const AddressesCard = ({
  logoSrc,
  items,
  isNonEu,
}: AddressesCardProps) => (
  <div className={bem('card', { noneu: isNonEu })}>
    {logoSrc && (
      <div className={bem('card-logo', { noneu: isNonEu })}>
        <img
          alt="card-logo"
          height={120}
          loading="lazy"
          src={logoSrc}
          width={120}
        />
      </div>
    )}
    <ul className={bem('card-list', { noneu: isNonEu })}>
      {items.map((item, index) => (
        <li
          key={index}
          className={bem('card-item')}
        >
          <h3 className={bem('card-title')}><Tx>{item.title}</Tx></h3>
          <p className={bem('card-content')}><Tx>{item.content}</Tx></p>
        </li>
      ))}
    </ul>
  </div>
);

type AboutDocumentsProps = {
  isNonEu: boolean;
};

export default function AboutAddresses({ isNonEu }: AboutDocumentsProps): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        {AddressesCard({
          logoSrc: 'https://direct-website.azureedge.net/assets/img/pages/about-us-page/logo_fxpro.svg',
          items: getAboutAddressesHistory(isNonEu),
          isNonEu: isNonEu,
        })}
        {!isNonEu && AddressesCard({
          logoSrc: 'https://direct-website.azureedge.net/assets/img/pages/about-us-page/logo_city_of_london.svg',
          items: ABOUT_ADDRESSES_REGULATIONS,
        })}
      </div>
    </section>
  );
}
