describe("Intercept Events", () => {
    before(() => {
        cy.intercept("GET", "http://localhost:8081/event", { fixture: "list-events.json" })
        .as("interceptEvents");
    });

    it("should intercept events", () => {
        cy.visit("/");
        cy.wait("@interceptEvents");
    });
});
