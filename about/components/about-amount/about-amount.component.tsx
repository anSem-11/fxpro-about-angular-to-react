import './about-amount.scss';

import UiAmountOrders from '@react-ui/ui-amount-orders/ui-amount-orders.component';
import UiFxExecutionBanner from '@react-ui/ui-fx-execution-banner/ui-fx-execution-banner.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('about-amount');


export default function AboutAmount(): JSX.Element {
  return (
    <section className={bem()}>
      <div className="container">
        <UiAmountOrders />
        <UiFxExecutionBanner />
      </div>
    </section>
  );
}
