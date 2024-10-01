//Step 1
describe("Test Case 10", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3
  it("Verify Subscription in home page", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#footer").scrollIntoView();
    cy.contains(".container", "Subscription").should("be.visible");

    //Step 5
    cy.get("#susbscribe_email").type("testa1z1@test.com");
    cy.get("#subscribe").click();

    //Step 6
    cy.contains(
      "#success-subscribe",
      "You have been successfully subscribed!"
    ).should("be.visible");
  });
});
