import './about-flags.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useRegulatorStore } from '@react-root/store/regulator.store';
import UiAnimatedInfoBox from '@react-root/ui/animated-info-box/ui-animated-info-box.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { Regulator } from '@fx-project-shared/models/regulators.model';


const bem = buildBem('about-flags');

const FLAGS = [
  {
    country: 'UK',
    text: 'about-us-flags-translationKey-1',
  },
  {
    country: 'CY',
    text: 'about-us-flags-translationKey-2',
  },
  {
    country: 'BS',
    text: 'about-us-flags-translationKey-3',
  },
  {
    country: 'ZA',
    text: 'about-us-flags-translationKey-4',
  },
];

const getFlags = (regulator: Regulator) => {
  const isNonEu = ![ Regulator.FCA, Regulator.CySec ].includes(regulator);

  if (isNonEu) {
    return FLAGS.filter(flag => flag.country !== 'CY');
  }

  return FLAGS;
};


export default function AboutFlags(): JSX.Element {
  const regulator = useRegulatorStore();

  return (
    <section className={bem()}>
      <div className="container">
        <UiAnimatedInfoBox
          descriptionKey="about-us-most-trusted-info-text-2"
          titleKey="about-us-most-trusted-title"
        />
        <div className={bem('cards')}>
          {getFlags(regulator).map((flag, index) => (
            <div
              key={index}
              className={bem('card')}
            >
              <div className={bem('icon')}>
                <img
                  alt={flag.country.toLowerCase()}
                  height={40}
                  loading="lazy"
                  src={`https://direct-website.azureedge.net/assets/img/pages/about-us-page/${flag.country.toLowerCase()}-flag-icon.svg`}
                  width={40}
                />
              </div>
              <p className={bem('info')}><Tx>{flag.text}</Tx></p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
