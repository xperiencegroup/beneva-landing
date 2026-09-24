const PROJECT = "beneva";

export const TRACK = {
  layout: {
    pageView: `${PROJECT}:page:view`,
    menu: {
      toggle: `${PROJECT}:menu:toggle:click`,
      item: `${PROJECT}:menu:item:click`,
    },
    logo: {
      home: `${PROJECT}:logo:home:click`,
    },
    footer: {
      logo: `${PROJECT}:footer:logo:click`,
      nav: `${PROJECT}:footer:nav:click`,
      social: `${PROJECT}:footer:social:click`,
      contact: `${PROJECT}:footer:contact:click`,
    },
  },

  home: {
    nosotros: {
      cta: `${PROJECT}:home:nosotros:cta:click`,
    },
    patrimonio: {
      cta: `${PROJECT}:home:patrimonio:cta:click`,
    },
    enterarme: {
      formSubmit: `${PROJECT}:home:enterarme:form:submit`,
      formSubmitError: `${PROJECT}:home:enterarme:form:submit-error`,
    },
    closingBanner: {
      click: `${PROJECT}:home:closingBanner:cta:click`,
    },
  },

  about: {
    cta: {
      click: `${PROJECT}:about:cta:click`,
    },
  },

  projects: {
    mision: {
      siteClick: `${PROJECT}:projects:mision:site:click`,
    },
  },

  develop: {
    cta: `${PROJECT}:develop:cta:click`,
    formSubmit: `${PROJECT}:develop:form:submit`,
    formSubmitError: `${PROJECT}:develop:form:submit-error`,
    formReset: `${PROJECT}:develop:form:reset`,
  },

  contact: {
    formSubmit: `${PROJECT}:contact:form:submit`,
    formSubmitError: `${PROJECT}:contact:form:submit-error`,
  },
};
