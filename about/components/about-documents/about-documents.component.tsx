import './about-documents.scss';

import { Tx } from '@react-features/translation/tx.component';
import { useLanguageStore } from '@react-store/language.store';
import PdfDocIcon from '@react-ui/icons/ui-pdf-doc-icon.component';

import { buildBem } from '@fx-project-shared/features/style/style-bem/style-bem.util';

import { getAboutDocumentsPdfLinks } from './about-documents.constant';


const bem = buildBem('about-documents');

type SectionContentProps = {
  textId: string;
};

const SectionСontent = ({ textId }: SectionContentProps) => (
  <div className={bem('profile-info')}>
    <div className={bem('title')}>
      <Tx>{textId}</Tx>
    </div>
    <span>•</span>
    <div className={bem('download')}>
      <Tx>global_downloadPDF</Tx>
    </div>
    <PdfDocIcon className={bem('download-icon')} />
  </div>
);

type PDFLinkProps = {
  href: string;
  imgSrc: string;
  height?: number;
};

const PDFLink = ({
  href,
  imgSrc,
  height,
}: PDFLinkProps) => (
  <a
    data-testid={`pdf-link-${href}`}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      alt={imgSrc}
      height={height}
      loading="lazy"
      src={imgSrc}
      width="100%"
    />
  </a>
);

type AboutDocumentsProps = {
  isNonEu: boolean;
};
export default function AboutDocuments({ isNonEu }: AboutDocumentsProps): JSX.Element {
  const language = useLanguageStore();

  let brochureLink;

  switch (language) {
    case 'zh':
      brochureLink = 'https://fxprorepo.blob.core.windows.net/repo/mrkt-portal/presentations/fxpro-cn.pdf#toolbar=0';

      break;

    case 'tw':
      brochureLink = 'https://direct-website.azureedge.net/assets/docs/about/FxPro%20Presentation%20Book%20-%20Traditional%20Chinese.pdf';

      break;

    case 'ru':
      brochureLink = 'https://fxdatarepro.blob.core.windows.net/repo/mrkt-portal/presentations/fxpro-ru.pdf';

      break;

    default:
      brochureLink = 'https://fxdatarepro.blob.core.windows.net/repo/mrkt-portal/presentations/fxpro-en.pdf';

      break;
  }

  return (
    <section className={bem()}>
      <div className="container">
        <div className={bem('column-company')}>
          <SectionСontent textId="aboutUs_companyProfileFactSheets" />
          <div className={bem('pdf-list')}>
            {getAboutDocumentsPdfLinks(isNonEu).map((link, index) => (
              <PDFLink
                key={index}
                {...link}
              />
            ))}
          </div>
        </div>

        <div className={bem('column-company')}>
          <SectionСontent textId="aboutUs_Brochure" />
          <a
            data-testid="brochure-link"
            href={brochureLink}
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            <img
              srcSet={`
                https://direct-website.azureedge.net/assets/img/pages/about-us-page/brochure-new@300w.webp 300w,
                https://direct-website.azureedge.net/assets/img/pages/about-us-page/brochure-new@600w.webp 600w,
                https://direct-website.azureedge.net/assets/img/pages/about-us-page/brochure-new@900w.webp 900w,
                https://direct-website.azureedge.net/assets/img/pages/about-us-page/brochure-new@1600w.webp 1600w,
                https://direct-website.azureedge.net/assets/img/pages/about-us-page/brochure-new@2200w.webp 2200w,
                https://direct-website.azureedge.net/assets/img/pages/about-us-page/brochure-new@2800w.webp 2800w
              `}
              alt="brochure"
              className={bem('brochure-img')}
              height={200}
              loading="lazy"
              sizes="300px"
              src="https://direct-website.azureedge.net/assets/img/pages/about-us-page/brochure-new@300w.webp"
              width={200}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
