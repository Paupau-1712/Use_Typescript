import * as XLSX from 'xlsx';
import { actionHandler } from './ActionHandler'; // You must implement this
import { propertyLocators } from '../pageobjects/propertyLocators';

export class readTestCaseTemplate {
  private performStep: actionHandler;

  constructor(performStep: actionHandler){
    this.performStep = performStep;

  }

  async readTestSteps(filePath: string, sheetName: string) {
    // Load Excel
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    const data: any[] = XLSX.utils.sheet_to_json(sheet);

  
    for (const row of data) {
      const propertyType = row["propertyType"];
      const locatorPath = row["LocatorPath"];
      const locatorValue = row["LocatorValue"];

      // Delegates the action handling
      await this.performStep.performAction(propertyType, locatorPath, locatorValue);
      console.log(`PropertyType: ${propertyType}, LocatorPath: ${locatorPath}, LocatorValue: ${locatorValue}`);
    }
  }
}

interface TestDataSource {
  getFilePath(): string;
  getSheetName(): string;
  getSheetCount(): number;
}
export class ExcelTestDataSource implements TestDataSource {
  getSheetCount(): number {
    throw new Error("Method not implemented.");
  }
  getFilePath(): string {
    return "/Users/paupau/Desktop/Coding-Projects/Portfolio/Playwright/Use_TypeScript/tests/testdata/TestCaseTemplate.xlsx";
  }

  getSheetName(): string {
    return "Sheet1";
  }
}
