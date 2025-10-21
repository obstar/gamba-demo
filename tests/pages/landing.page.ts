import {expect, Page} from "@playwright/test";

import {assert} from "../helpers/assert";

export function landing(page: Page) {
    const acknowledgeButton = page.getByRole("button").getByText("Acknowledge");
    const addLiquidityButton = page.getByRole("button").getByText("Add Liquidity");
    const buildYourOwnButton = page.getByRole("button").getByText("Build your own");
    const connectButton = page.getByRole("button").getByText("Connect");
    const discordButton = page.getByRole("button").getByText("Discord");
    const fakeCoinButton = page.getByRole("button").getByText("1,000 FAKE");
    const gameCrashLink = page.locator('a[href="/crash"]');
    const gameDiceLink = page.locator('a[href="/dice"]');
    const gameFlipLink = page.locator('a[href="/flip"]');
    const gameHiloLink = page.locator('a[href="/hilo"]');
    const gameMinesLink = page.locator('a[href="/mines"]');
    const gamePlinkoLink = page.locator('a[href="/plinko"]');
    const gameRouletteLink = page.locator('a[href="/roulette"]');
    const gameSlotsLink = page.locator('a[href="/slots"]');
    const pageLogo = page.locator('img[alt="Gamba logo"]');
    const sectionGamesTitle = page.getByText("Games");
    const sectionRecentPlaysTitle = page.getByText("Recent Plays");


    const navigateTo = async () => {
        await page.goto("/");
    };

    const loads = async () => {
        // COULD be more assertions around texts etc this is just a demo ;)

        await assert(page).pageTitle("Play | Gamba");
        await acknowledgeButton.click();
        await expect(pageLogo).toBeVisible();
        await expect(fakeCoinButton).toBeVisible();
        await expect(connectButton).toBeVisible();
        await expect(addLiquidityButton).toBeVisible();
        await expect(buildYourOwnButton).toBeVisible();
        await expect(discordButton).toBeVisible();
        await expect(sectionGamesTitle).toBeVisible();
        await expect(gameDiceLink).toBeVisible();
        await expect(gameSlotsLink).toBeVisible();
        await expect(gameFlipLink).toBeVisible();
        await expect(gameHiloLink).toBeVisible();
        await expect(gameMinesLink).toBeVisible();
        await expect(gameRouletteLink).toBeVisible();
        await expect(gamePlinkoLink).toBeVisible();
        await expect(gameCrashLink).toBeVisible();
        await expect(sectionRecentPlaysTitle).toBeVisible();
    };

    return {
        loads,
        navigateTo,
    };
}
