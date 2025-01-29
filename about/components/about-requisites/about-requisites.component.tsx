import './about-requisites.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useRenderData } from '@react-root/hooks/use-render-data';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import { getAboutRequisites } from './about-requisites.util';


const bem = buildBem('about-requisites');

type RequisitesItemProps = {
  title: string;
  content: string | string[];
};

type RequisitesCardProps = {
  items: RequisitesItemProps[];
};

const renderContent = (content: string | string[]) => {
  if (Array.isArray(content)) {
    return (
      <div>
        {content.map((item, index) => (
          <p key={index}>
            <Tx>{item}</Tx>
          </p>
        ))}
      </div>
    );
  }

  return <Tx>{content}</Tx>;
};

const RequisitesCard = ({ items }: RequisitesCardProps) => (
  <div className={bem('card')}>
    <ul className={bem('card-list')}>
      {items.map((item, index) => (
        <li
          key={index}
          className={bem('card-item')}
        >
          <h3 className={bem('card-title')}><Tx>{item.title}</Tx></h3>
          <div className={bem('card-content')}>{renderContent(item.content)}</div>
        </li>
      ))}
    </ul>
  </div>
);

const BANK_DETAILS = [
  {
    title: 'aboutUs_companyProfileBanksAndMajor',
    content: [
      'aboutUs_companyProfileBanksAndMajorBarclays',
      'aboutUs_companyProfileBanksAndMajorRBS',
      'aboutUs_companyProfileBanksAndMajorEmirates',
    ],
  },
  {
    title: 'aboutUs_companyProfileLegal',
    content: 'aboutUs_companyProfileLegalValue',
  },
  {
    title: 'aboutUs_companyProfileDisasterRecoverySites',
    content: 'aboutUs_companyProfileDisasterRecoverySitesValue',
  },
  {
    title: 'aboutUs_companyProfileExternalAuditors',
    content: 'aboutUs_companyProfileExternalAuditorsValue',
  },
];

export default function AboutRequisites(): JSX.Element {
  const { ssrData } = useRenderData();

  const awards = `${ssrData.staticVariables.awards}`;

  return (
    <section className={bem()}>
      <div className="container">
        {RequisitesCard({ items: getAboutRequisites(awards) })}
        {RequisitesCard({ items: BANK_DETAILS })}
      </div>
    </section>
  );
}
