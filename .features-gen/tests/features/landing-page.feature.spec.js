// Generated from: tests/features/landing-page.feature
import { test } from "playwright-bdd";

test.describe('LandingPage', () => {

  test('LandingPage - Loads successfully', async ({ Given, Then, page }) => { 
    await Given('user navigate to Gamba Play landing page', null, { page }); 
    await Then('user can see that Gamba Play page loads successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/landing-page.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user navigate to Gamba Play landing page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user can see that Gamba Play page loads successfully","stepMatchArguments":[]}]},
]; // bdd-data-end