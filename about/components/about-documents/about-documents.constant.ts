type PdfLinks = {
  href: string;
  imgSrc: string;
}[];

const PDF_LINKS_CYSEC_INDEX = 1;

const PDF_LINKS: PdfLinks = [
  {
    href: 'https://direct-website.azureedge.net/assets/docs/Gen-Info-UK.pdf',
    imgSrc: 'https://direct-website.azureedge.net/assets/img/pages/about-us-page/Gen-Info-UK.svg',
  },
  {
    href: 'https://direct-website.azureedge.net/assets/docs/Gen-Info-CY.pdf',
    imgSrc: 'https://direct-website.azureedge.net/assets/img/pages/about-us-page/Gen-Info-CY.svg',
  },
  {
    href: 'https://direct-website.azureedge.net/assets/docs/Gen-Info-GM.pdf',
    imgSrc: 'https://direct-website.azureedge.net/assets/img/pages/about-us-page/Gen-Info-GM.svg',
  },
];

export const getAboutDocumentsPdfLinks = (isNonEu: boolean): PdfLinks => {
  if (!isNonEu) {
    return PDF_LINKS;
  }

  const pdfLinks = [ ...PDF_LINKS ];

  pdfLinks.splice(PDF_LINKS_CYSEC_INDEX, 1);

  return pdfLinks;
};
