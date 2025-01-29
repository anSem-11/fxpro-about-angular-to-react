import './about-sponsorship.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useBrowserMount } from '@react-hooks/use-browser-mount';
import UiAnimatedInfoBox from '@react-ui/animated-info-box/ui-animated-info-box.component';

import { scriptLoader } from '@fx-project-shared/features/script-loader';
import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';


const bem = buildBem('about-sponsorship');

const sliderCards = [
  {
    img: 'slider-img-1',
    text: 'about-us-sponsorship-translationkey-1',
  },
  {
    img: 'slider-img-2',
    text: 'about-us-sponsorship-translationkey-2',
  },
  {
    img: 'slider-img-3',
    text: 'about-us-sponsorship-translationkey-3',
  },
  {
    img: 'slider-img-4',
    text: 'about-us-sponsorship-translationkey-4',
  },
  {
    img: 'slider-img-5',
    text: 'about-us-sponsorship-translationkey-5',
  },
  {
    img: 'slider-img-6',
    text: 'about-us-sponsorship-translationkey-6',
  },
  {
    img: 'slider-img-2',
    text: 'about-us-sponsorship-translationkey-7',
  },
  {
    img: 'slider-img-7',
    text: 'about-us-sponsorship-translationkey-8',
  },
  {
    img: 'slider-img-8',
    text: 'about-us-sponsorship-translationkey-9',
  },
  {
    img: 'slider-img-9',
    text: 'about-us-sponsorship-translationkey-10',
  },
  {
    img: 'slider-img-10',
    text: 'about-us-sponsorship-translationkey-11',
  },
  {
    img: 'slider-img-11',
    text: 'about-us-sponsorship-translationkey-12',
  },
  {
    img: 'slider-img-12',
    text: 'about-us-sponsorship-translationkey-13',
  },
];

export default function AboutSponsorship(): JSX.Element {
  const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
      375: { slidesPerView: 2 },
      576: { slidesPerView: 5 },
      768: { slidesPerView: 6 },
      850: { slidesPerView: 7 },
      1024: { slidesPerView: 8 },
      1100: { slidesPerView: 9 },
      1200: { slidesPerView: 10 },
      1300: { slidesPerView: 11 },
      1600: { slidesPerView: 14 },
      1800: { slidesPerView: 16 },
      2400: { slidesPerView: 20 },
    },
    allowTouchMove: false,
    autoplay: { delay: 2000 },
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    loopedSlides: 24,
  };

  useBrowserMount(() => {
    scriptLoader()
      .load('https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js')
      .then(() => {
        const swiperEl = document.querySelector('swiper-container');

        Object.assign(swiperEl, swiperParams);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (swiperEl as any).initialize();
      });
  });

  return (
    <section className={bem()}>
      <div className="container">
        <UiAnimatedInfoBox
          descriptionKey="about-us-slides-info-description"
          titleKey="about-us-slides-info-title"
        />
      </div>
      <swiper-container init={false}>
        {[ ...sliderCards, ...sliderCards ].map((card, index) => (
          <swiper-slide key={index}>
            <div className={bem('slide-content')}>
              <img
                srcSet={`
                  https://direct-website.azureedge.net/assets/img/pages/about-us-page/${card.img}@1600w.webp 300w,
                  https://direct-website.azureedge.net/assets/img/pages/about-us-page/${card.img}@2200w.webp 1000w,
                  https://direct-website.azureedge.net/assets/img/pages/about-us-page/${card.img}@2800w.webp 1800w,
                `}
                alt={card.text}
                height={400}
                loading="lazy"
                sizes="570px"
                src={`https://direct-website.azureedge.net/assets/img/pages/about-us-page/${card.img}@1600w.webp`}
                width={570}
              />
              <a
                href="/about/sponsorships"
                target="_blank"
              >
                <Tx>{card.text}</Tx>
                <span className={bem('icon')}>
                  <img
                    alt=""
                    className={bem('icon-arrow')}
                    src="https://direct-website.azureedge.net/assets/img/pages/about-us-page/white-arrow.svg"
                  />
                </span>
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}
