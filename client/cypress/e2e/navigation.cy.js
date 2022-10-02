describe('Navigation', () => {
  it('should have a list events link that navigates to the event list page', () => {
    // Navigate to the home page
    cy.visit("/");
    // Check the "List Events" link is visible
    cy.get("a[href='/list-events']").should("be.visible");
    // Click on the "List Events" link
    cy.get("a[href='/list-events']").click();
    // Verify the "Event List" page is opened
    cy.get("h2").contains("Event List").should("be.visible");
  })
})