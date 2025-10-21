import {expect, Page} from "@playwright/test";

export function assert(page: Page) {

    const pageTitle = async (title: string) => {
        await expect(page).toHaveTitle(title);
    };

    return {
        pageTitle
    };
}
