import './about-achievements.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useIsAboveTablet } from '@react-hooks/use-is-above-tablet';
import { useRenderData } from '@react-root/hooks/use-render-data';
import UiDirectLink from '@react-root/ui/ui-direct-link/ui-direct-link.component';
import { UiButton } from '@react-ui/button/ui-button.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';
import { styleText } from '@fx-project-shared/features/style/style-text/style-text.util';

import { getAboutAchievements } from './about-achievements.util';


const bem = buildBem('about-achievements');

export default function AboutAchievements(): JSX.Element {
  const isAboveTablet = useIsAboveTablet();
  const { ssrData } = useRenderData();

  const awards = `${ssrData.staticVariables.awards}`;
  const years_of_operation = `${ssrData.staticVariables.years_of_operation}`;

  return (
    <section className={bem()}>
      <div className={bem('background-text')}><Tx>about-us-achievements-bg-text</Tx></div>
      <div className="container">
        <ul className={bem('list')}>
          {getAboutAchievements(awards, years_of_operation).map((achievement, index) => (
            <li
              key={index}
              className={bem('item')}
              style={isAboveTablet ? { gridArea: achievement.gridArea } : {}}
            >
              <p className={`
                ${styleText({
              size: '4xl',
              fontWeight: '600',
              lineHeight: '130',
              align: 'center',
            })}
                ${bem('title')}
              `}
              >
                <Tx>{achievement.title}</Tx>
              </p>
              <p className={styleText({
                size: 'm',
                fontWeight: '500',
                lineHeight: '130',
                align: 'center',
              })}
              >
                <Tx>{achievement.description}</Tx>
              </p>
            </li>
          ))}
        </ul>
        <UiDirectLink
          className={bem('button')}
          dataTestId="about-achievements"
          mode="register"
        >
          <UiButton size="l"><Tx>about-us-most-trusted-btn</Tx></UiButton>
        </UiDirectLink>
      </div>
    </section>
  );
}
