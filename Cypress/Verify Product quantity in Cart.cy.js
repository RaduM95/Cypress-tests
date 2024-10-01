//Step 1
describe("Test Case 13", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3
  it("Verify Product quantity in Cart", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get(".features_items .product-image-wrapper")
      .its("length")
      .then((count) => {
        cy.log(`Number of list items: ${count}`);
        cy.get(".features_items .product-image-wrapper")
          .eq(Math.floor(Math.random() * (count - 1)))
          .contains("View Product")
          .click();
      });

    //Step 5
    cy.get(".product-details").should("be.visible");

    //Step 6
    cy.get("#quantity").clear().type("4");

    //Step 7
    cy.get(".product-information").contains("Add to cart").click();

    //Step 8
    cy.get(".modal-content").contains("View Cart").click();

    //Step 9
    cy.contains(".cart_quantity", "4").should("be.visible");
  });
});
