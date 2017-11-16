/**
 * PASTE GA ID BELOW
 * (How to find: https://www.googletagmanager.com/gtag/js?id=THIS_IS_THE_GA_ID)
 */
const GA_ID = '';

const GA = {
  init: () => {
    /**
     * GA code from 16/11/2017.
     * Always check if this has been modified
     */
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
    /* End of GA code */
  },
  id: GA_ID,
};

module.exports = GA;
