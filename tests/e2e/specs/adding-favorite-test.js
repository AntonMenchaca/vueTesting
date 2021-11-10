
describe("Successfully adds a movie to the favorites section", () => {
    beforeEach(() => cy.visit("http://localhost:3000/"))
    it("Can render a movie after a double click", () => {
      cy.get('ul.movies>:first-child').find('img').dblclick()
      cy.wait(600)
      cy.get('div.video-player-details>:first-child').contains('h2', 'Venom: Let There Be Carnage')
    });
    it("Can succesfully add a movie", () => {
        after(() => {
            cy.visit("http://localhost:3000/")
            cy.get('button[name="Show Favorites"]').click()
            cy.get('ul.movies>:first-child').find('img').dblclick()
            cy.get('button[name="Remove Favorite"]').click()
        })
      cy.get('ul.movies>:first-child').find('img').dblclick()
      cy.wait(600)
      cy.get('button[name="Add Favorite"]').click()
      cy.get('button[name="Return"]').click()
      cy.get('button[name="Show Favorites"]').click()
      cy.get('ul.movies').contains('li')
      
    });
  });