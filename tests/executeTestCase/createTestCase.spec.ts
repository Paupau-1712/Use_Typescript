import test, { chromium, Page } from '@playwright/test';
import {actionHandler } from '../Utility/ActionHandler';
import { readTestCaseTemplate } from '../Utility/ExcelReader';

test('Execute Excel Test Case', async ({page}) => {
  const performAction = new actionHandler(page);
  const testExecutor = new readTestCaseTemplate(performAction);
  await testExecutor.readTestSteps('/Users/paupau/Desktop/Coding-Projects/Portfolio/Playwright/Use_TypeScript/tests/testdata/TestCaseTemplate.xlsx', 'Sheet1');
});