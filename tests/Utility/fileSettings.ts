//file setting for Single Testcase

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
