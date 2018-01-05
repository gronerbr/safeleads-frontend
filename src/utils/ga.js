const GA = {
  init: (UA) => {
    /**
     * GA code from 17/11/2017.
     * Always check if this has been modified
     */
    if (window) {
      // eslint-disable-next-line
      window.gtag = function() { dataLayer.push(arguments); }
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line
      window.gtag('js', new Date());
      window.gtag('config', UA);
      /* End of GA code */
    }
  },
};

module.exports = GA;
