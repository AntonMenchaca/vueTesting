describe("Initial render of home screen", () => {
  beforeEach(() => cy.visit("http://localhost:3000/"))
  it("Contains the proper title", () => {
    cy.contains("h1", "My Movie List");
  });
  it("Contains a dropdown set to a default: 'Choose a genre'", () => {
    cy.contains('Choose a Genre');
  });
  it("initial render of show Favorites button", () => {
    cy.contains("button",'Show Favorites');
  });
});
