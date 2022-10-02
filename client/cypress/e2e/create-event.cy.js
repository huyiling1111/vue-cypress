describe("Create Event", () => {
    it("should create a new event", () => {
        // Navigate to the home page
        cy.visit("/");
        // Go to the "create event" page
        cy.get("a[href='/create-event']").click();
        // Fill in the form
        cy.get("#event-name").type("Happy Music Event");
        cy.get("#event-venue").type("Some famous place");
        cy.get("#event-date-month").select("11");
        cy.get("#event-date-day").select("12");
        cy.get("#event-date-year").select("2026");
        cy.get('#ticket-quantity').type("250");
        cy.get("textarea[name='event-notes']").type("Don't miss out!");
        cy.get("input[name='event-image']").check("./assets/event-2.jpg", {force:true});
        // Submit the form
        cy.get("#create-btn").click();
        // Assert that a new event has been created
        cy.get("h2").should('have.text', "Event Details");
    });

    it.only("should create a new event directly by dispatching action from Vuex store", () => {
        cy.visit("/list-events");
        cy.window().then(window => {
            cy.fixture("create-event.json").then(event => {
                window.__app__.$store.dispatch('createEvent', event);
            });
        })
    });
})