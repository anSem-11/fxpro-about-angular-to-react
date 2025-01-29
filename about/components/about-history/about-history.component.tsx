import './about-history.scss';

import UiAnimatedInfoBox from '@react-ui/animated-info-box/ui-animated-info-box.component';
import UiSpaceHistory from '@react-ui/ui-space-history/ui-space-history.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

const bem = buildBem('about-history');


export default function AboutHistory(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <UiAnimatedInfoBox
          descriptionKey="about-us-history-description"
          titleKey="about-us-history-title"
        />
      </div>
      <UiSpaceHistory />
    </section>
  );
}
