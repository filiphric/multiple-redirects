it('failing test', () => {

  cy
    .visit('/')

  cy
    .get('a')
    .click()

  // test first redirect
  cy
    .location('href')
    .should('eq', 'page2')

  // test second redirect
  cy
    .location('href')
    .should('eq', 'page3')

});
