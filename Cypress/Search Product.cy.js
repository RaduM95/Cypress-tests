//Step 1
describe("Test Case 9", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3

  it("Search Product", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains("Products").click();

    //Step 5
    cy.get("#search_product").should("be.visible");
    cy.get(".container").contains("All Products").should("be.visible");

    //Step 6
    cy.get("#search_product").type("shirt");
    cy.get("#submit_search").click();

    //Step 7
    cy.get(".container").contains("Searched Products").should("be.visible");

    //Step 8
    cy.get(".features_items").should("be.visible");
  });
});
