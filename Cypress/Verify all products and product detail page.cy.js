//Step 1
describe("Test Case 8", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3
  it("Verify all products and product detail page", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains("Products").click();

    //Step 5
    cy.get("#search_product").should("be.visible");
    cy.get(".container").contains("All Products").should("be.visible");

    //Step 6
    cy.get(".features_items").should("be.visible");

    //Step 7
    cy.get(".product-image-wrapper").first().contains("View Product").click();

    //Step 8

    cy.get(".product-details").should("be.visible");

    //Step 9
    cy.get("h2").should("be.visible");
    cy.contains("p", "Category").should("be.visible");
    cy.contains("span", "Rs.").should("be.visible");
    cy.contains("p", "Availability").should("be.visible");
    cy.contains("p", "Condition").should("be.visible");
    cy.contains("p", "Brand").should("be.visible");
  });
});
