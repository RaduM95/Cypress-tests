//Step 1
describe("Test Case 7", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3

  it("Verify Test Cases Page", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains("Test Cases").click();

    //Step 5
    cy.url().should("eq", "https://automationexercise.com/test_cases");
    cy.get(".title").contains("Test Cases").should("be.visible");
  });
});
