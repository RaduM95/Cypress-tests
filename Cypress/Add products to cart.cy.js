//Step 1
describe("Test Case 12", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3
  it("Add Products to Cart", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains("Products").click();

    //Step 5
    cy.get(".product-image-wrapper").first().contains("Add to cart").click();

    //Step 6
    cy.contains(".modal-footer", "Continue Shopping").click();

    //Step 7
    cy.get(".product-image-wrapper").eq("1").contains("Add to cart").click();

    //Step 8
    cy.contains(".modal-content", "View Cart").click();

    //Step 9
    cy.get("#product-1").should("be.visible");
    cy.get("#product-2").should("be.visible");

    //Step 10

    cy.get("#product-1")
      .contains(".cart_price", "Rs. 500")
      .should("be.visible");
    cy.get("#product-1").contains(".cart_quantity", "1").should("be.visible");
    cy.get("#product-1")
      .contains(".cart_total_price", "Rs. 500")
      .should("be.visible");

    cy.get("#product-2")
      .contains(".cart_price", "Rs. 400")
      .should("be.visible");
    cy.get("#product-2").contains(".cart_quantity", "1").should("be.visible");
    cy.get("#product-2")
      .contains(".cart_total_price", "Rs. 400")
      .should("be.visible");
  });
});
