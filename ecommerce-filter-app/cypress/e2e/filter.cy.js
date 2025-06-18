describe('🧪 Product Filter Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // adjust if your port is different
  });

  it('shows all products initially', () => {
    cy.get('[data-testid="product-item"]').should('have.length', 5);
  });

  it('filters by Electronics category', () => {
    cy.get('[data-testid="category-select"]').select('Electronics');
    cy.get('[data-testid="product-item"]').should('have.length', 3);
    cy.contains('Smartphone');
    cy.contains('Laptop');
    cy.contains('Headphones');
  });

  it('filters by Clothing category', () => {
    cy.get('[data-testid="category-select"]').select('Clothing');
    cy.get('[data-testid="product-item"]').should('have.length', 2);
    cy.contains('Jeans');
    cy.contains('T-shirt');
  });
});
