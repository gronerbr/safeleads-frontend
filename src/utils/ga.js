const GA_ID = process.env.REACT_APP_GA_UA || '';

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
};

module.exports = GA;
