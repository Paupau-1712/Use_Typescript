
import {expect , type Locator , type Page , selectors} from '@playwright/test';


export class propertyLocators {
   readonly page: Page;
  locatorPath: Record<string, string>;


  constructor(page: Page) {
    this.page = page;
    this.locatorPath = {
     searchBox: 'input[name="q"]',
      searchButton: 'input[name="btnK"]',
      loginButton: '#login-btn',
      usernameField: '#username',
      passwordField: '#password', 
    }
    
  }
  get key(): string {
    return `${this.locatorPath}`;
  }
  getLocator(key: string):Locator {
    const selector = this.locatorPath[key] || key; // fallback: raw selector
    return this.page.locator(selector);
  
  }
}