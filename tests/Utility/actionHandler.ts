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
    }
  }

async getFormattedTimestamp(): Promise<string> {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}_${hh}-${min}-${ss}`;
}



  async performAction(step: number, elementType: string, locatorPath: string, locatorValue: string) {
    const locators = this.locator.getLocator(locatorPath);

    try {
      switch (elementType) {

        case 'URL':
          await this.page.goto(locatorValue);   // ✅ Open a generic URL
          break;

        case 'button':
          await locators.click();   // ✅ Click a generic button
          break;
        case 'input':
          await locators.fill(locatorValue);  // ✅ Input a generic field
          break;

        case 'closeBrowser':
          await this.page.close();
          break;
        // Validations
        case 'waitforURL':
          await this.page.waitForURL;   // ✅ waitforURL to load
          break;
      }
      await this.page.screenshot({ path: `Test Step/${this.getFormattedTimestamp}-Step${step}.png` });


    } catch (error) {
      console.error(`Error in performAction for ${elementType}:`, error);
    }


  }
}