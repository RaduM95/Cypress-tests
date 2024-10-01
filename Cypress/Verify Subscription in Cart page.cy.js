//Step 1
describe("Test Case 11", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3

  it("Verify Subscription in Cart page", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains("Cart").click();

    //Step 5
    cy.get("#footer").scrollIntoView();

    //Step 6
    cy.contains(".container", "Subscription").should("be.visible");

    //Step 7
    cy.get("#susbscribe_email").type("testa1z1@test.com");
    cy.get("#subscribe").click();

    //Step 8
    cy.contains(
      "#success-subscribe",
      "You have been successfully subscribed!"
    ).should("be.visible");
  });
});
