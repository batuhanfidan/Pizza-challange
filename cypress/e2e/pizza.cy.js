describe("MainOrder Component", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/OrderPage");
  });

  it("should enter a name in the input field", () => {
    const name = "John Doe";

    cy.get('input[placeholder="İsim"]').type(name);

    cy.get('input[placeholder="İsim"]').should("have.value", name);
  });

  it("should select multiple ingredients", () => {
    const ingredientsToSelect = [
      "Pepperoni",
      "Mısır",
      "Sosis",
      "Kanada Jambonu",
    ];

    ingredientsToSelect.forEach((ingredient) => {
      cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
        force: true,
      });

      cy.get('input[type="checkbox"][value="' + ingredient + '"]').should(
        "be.checked"
      );
    });
  });

  it("should select dough type", () => {
    const doughType = "İnce";

    cy.get('select[name="Hamur Kalınlığı"]').select(doughType);

    cy.get('select[name="Hamur Kalınlığı"]').should("have.value", doughType);
  });

  it("should select pizza size", () => {
    const pizzaSize = "Büyük";

    cy.get('input[type="radio"][value="' + pizzaSize + '"]').check();

    cy.get('input[type="radio"][value="' + pizzaSize + '"]').should(
      "be.checked"
    );
  });
  it('should submit the form when clicking "SİPARİŞ VER" button', () => {
    cy.get('input[placeholder="İsim"]').type("John Doe");

    const ingredientsToSelect = [
      "Pepperoni",
      "Mısır",
      "Sosis",
      "Kanada Jambonu",
    ];
    ingredientsToSelect.forEach((ingredient) => {
      cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
        force: true,
      });
    });

    cy.get('select[name="Hamur Kalınlığı"]').select("İnce");

    cy.get('input[type="radio"][value="Büyük"]').check();

    cy.get(".tamamlandi-button").click({ force: true });

    cy.url().should("include", "/OrderCompleted");
  });
});
