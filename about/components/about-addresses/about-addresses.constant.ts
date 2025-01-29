type History = {
  title: string;
  content: string;
}[];
const HISTORY_CYSEC_INDEX = 3;

const HISTORY: History = [
  {
    title: 'about-us-addresses-title-1',
    content: '1999',
  },
  {
    title: 'about-us-addresses-title-2',
    content: 'about-us-addresses-content-1',
  },
  {
    title: 'about-us-addresses-title-3',
    content: 'about-us-addresses-content-2',
  },
  {
    title: '',
    content: 'about-us-addresses-content-3',
  },
  {
    title: '',
    content: 'about-us-addresses-content-4',
  },
  {
    title: '',
    content: 'about-us-addresses-content-5',
  },
];

export const getAboutAddressesHistory = (isNonEu: boolean): History => {
  if (!isNonEu) {
    return HISTORY;
  }

  const history = [ ...HISTORY ];

  history.splice(HISTORY_CYSEC_INDEX, 1);

  return history;
};

export const ABOUT_ADDRESSES_REGULATIONS = [
  {
    title: 'about-us-addresses-title-4',
    content: 'about-us-addresses-content-6',
  },
  {
    title: '',
    content: 'about-us-addresses-content-7',
  },
  {
    title: '',
    content: 'about-us-addresses-content-8',
  },
  {
    title: '',
    content: 'about-us-addresses-content-9',
  },
];
