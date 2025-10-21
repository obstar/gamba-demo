import {createBdd} from "playwright-bdd";
import {landing} from "../pages/landing.page";

const {Given, Then} = createBdd();

Given(/^user navigate to Gamba Play landing page$/, async ({page}) => {
    await landing(page).navigateTo();
});

Then(/^user can see that Gamba Play page loads successfully$/, async ({page}) => {
    await landing(page).loads();
});
