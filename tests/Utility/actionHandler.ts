import { Page } from '@playwright/test';
import { propertyLocators } from '../pageobjects/propertyLocators';

export class actionHandler {
    public page: Page;
    public locator: propertyLocators;

  constructor(page: Page) {
    this.page = page;
    this.locator = new propertyLocators(page);

    if (!this.locator) {
    console.error("Locator was not initialized correctly!");
  }}

  async performAction(elementType: string,locatorPath: string,locatorValue: string)
  {
    const locators = this.locator.getLocator(locatorPath);

    switch (elementType.toLowerCase()) {

        case 'URL':
            await this.page.goto(locatorValue);   // ✅ Open a generic URL
            break;
        case 'button':
            await locators.click();   // ✅ Click a generic button
            break;
        case 'input':
            await locators.fill(locatorValue);  // ✅ Input a generic field
            break;
    }
    await this.page.screenshot({ path: `screenshots/${Date.now()}-${elementType}.png` });
}
  
}
