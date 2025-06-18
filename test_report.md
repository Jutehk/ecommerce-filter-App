# 🧪 E-Commerce Filter System – Cypress Testing Report

## 👤 Student Info
- **Name**: Juliana Ndunge  
- **Cohort**: PLP Academy, Feb 2025  
- **Date**: June 2025  

---

## 📋 Project Summary

This React-based E-Commerce Filter App allows users to filter products by category using a dropdown. The application is built using Vite + React and tested using Cypress.

---

## 🧪 Testing Tools
- **Framework**: Cypress
- **Browser Tested**: Chrome (via Cypress UI)
- **Test File**: `cypress/e2e/filter.cy.js`

---

## ✅ Features Tested

| Feature                         | Status     | Test Case Description                                   |
|-------------------------------|------------|--------------------------------------------------------|
| Load All Products             | ✅ Passed  | On initial load, all products should be visible        |
| Filter by Electronics         | ✅ Passed  | Dropdown selects "Electronics", shows only 3 products |
| Filter by Clothing            | ✅ Passed  | Dropdown selects "Clothing", shows only 2 products    |

---

## 🔍 Sample Test Code (Cypress)

```js
describe('🧪 Product Filter Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows all products initially', () => {
    cy.get('[data-testid="product-item"]').should('have.length', 5);
  });

  it('filters by Electronics', () => {
    cy.get('[data-testid="category-select"]').select('Electronics');
    cy.get('[data-testid="product-item"]').should('have.length', 3);
  });

  it('filters by Clothing', () => {
    cy.get('[data-testid="category-select"]').select('Clothing');
    cy.get('[data-testid="product-item"]').should('have.length', 2);
  });
});
