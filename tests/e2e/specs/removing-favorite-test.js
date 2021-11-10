
describe("Successfully removes a movie from the favorites section", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
        cy.get('ul.movies>:first-child').find('img').dblclick()
        cy.wait(600)
        cy.get('button[name="Add Favorite"]').click()
        cy.get('button[name="Return"]').click()
        cy.get('button[name="Show Favorites"]').click()
})
   
    it("Can succesfully remove a movie", () => {
        cy.get('ul.movies>:first-child').find('img').dblclick()
        cy.get('button[name="Remove Favorite"]').click()
        cy.get('ul.movies>:first-child').should('to.not.exist')
    });
  });