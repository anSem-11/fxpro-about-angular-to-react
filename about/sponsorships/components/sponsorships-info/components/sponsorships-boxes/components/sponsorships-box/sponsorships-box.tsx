import './sponsorships-box.scss';

import { Tx } from '@react-features/translation/tx.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleBlock } from '@fx-project-shared/features/style/style-block/style-block.util';


type SponsorshipsBoxProps = {
  title: string;
  description: string;
};

const bem = buildBem('sponsorships-box');

export default function SponsorshipsBox({ title, description }: SponsorshipsBoxProps): JSX.Element {
  return (
    <div className={`${bem()} ${styleBlock({
      type: 'flex',
      alignType: 'center',
      justifyType: 'center',
      direction: 'column',
    })}`}
    >
      <h3 className={bem('title')}>{title}</h3>
      <p className={bem('description')}><Tx>{description}</Tx></p>
    </div>
  );
}
