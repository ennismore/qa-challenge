# Booking Automated QA Task

For this exercise, we'd like candidates to write some automated tests against Amazon.co.uk.

## Scenario

1. Search for a product
1. Add the first 3 results that qualify for Prime delivery
1. Reach the basket page
1. Modify the quantity of one item
1. Check totals
1. Click checkout
1. Confirm you have reached the login screen

[END]

Repeat this for 3 different product searches.

## Notes

The main purpose of this exercise is to provide a springboard for a more technical discussion in the next step. Key things we'll be looking to discuss include:

* Code cleanliness
* DOM traversal
* Building a resiliant suite of tests against a black box that will only fail in appropriate scenarios
* Accessibility considerations

No more than 1h30m should be spent on the task. Don't worry if you're unable to finish within that time, but **please put together some notes and a diagram to help illustrate your thinking as you complete the task.**

This repo contains everything you need to start writing [Playwright](https://playwright.dev) tests out of the box. Please fork the repository and open a PR with your work when complete. We would strongly recommended installing the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) for extensive support with debugging and running tests within VS Code.

If you'd rather use an alternative JS/TS test framework that you're more comfortable with (Cypress or TestCafe), that's no problem, but you'll need to setup the project yourself. Similarly - this project is setup with TypeScript, but if you're more comfortable writing JavaScript that's no issue either. Please pick the setup you're most comfortable working with.

## Running Tests

### Prerequisites

* Node.js
* [pnpm](https://pnpm.io/) package manager (`npm install -g pnpm`)

### Steps

1. Clone this repository

```bash
git clone https://github.com/ennismore/qa-challenge && cd qa-challenge
```

2. Install dependencies and Playwright browsers

```bash
pnpm install && npx playwright install
```

3. Run tests

```bash
pnpm test
```
