it('passing test', () => {

  const urlRedirects = [];

  cy
    .visit('/')

  cy
    .on('url:changed', (url) => {
      urlRedirects.push(url);
    });


  cy
    .get('a')
    .click()


  cy
    .then(() => {

      expect(urlRedirects).to.have.length(3);
      expect(urlRedirects[1]).to.eq(`${Cypress.config('baseUrl')}/page2`);
      expect(urlRedirects[2]).to.eq(`${Cypress.config('baseUrl')}/page3`);

    });

});
