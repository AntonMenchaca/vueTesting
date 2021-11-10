describe("Backend Endpoints", () => {
    beforeEach(() => cy.visit("http://localhost:3000/"))
    it("gets genres after hitting /genres", () => {
        cy.request('GET','/genres').then((response) => 
        expect(response.status).to.eq(200))
    });
    // it("sends a new movie into the db as a favorite movie", () => {
    //     after(() => {
    //         cy.get('button[name="Show Favorites"]').click()
    //         cy.get('ul.movies>:first-child').find('img').dblclick()
    //         cy.get('button[name="Remove Favorite"]').click()
    //     })
    //     cy.request('POST','/movie', {newMovie: {
    //     title: 'hello world',
    //        poster_path: 'test',
    //        overview: 'best movie ever',
    //        release_date: '2000 and never',
    //        vote_average: 3,
    //        backdrop_path: 'ferfergerger',
    //        id: 23
    //      }}).then((response) => 
    //     expect(response.status).to.eq(200))

    // });
    it("gets movies after hitting /movies", () => {
        cy.request('GET','/movies').then((response) => 
        expect(response.status).to.eq(200))
    });
    it("can retrieve the favorite movies in mongo db", () => {
        cy.request('GET','/favorites').then((response) => 
        expect(response.status).to.eq(200))
    });
  });
  