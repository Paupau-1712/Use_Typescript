import test from '@playwright/test';
import {actionHandler } from '../Utility/ActionHandler';
import { ExcelTestDataSource, readTestCaseTemplate } from '../Utility/ExcelReader';

test('Execute Excel Test Case', async ({page}) => {

  const performAction = new actionHandler(page);
  const testExecutor = new readTestCaseTemplate(performAction);
  const excelSource = new ExcelTestDataSource();
  await testExecutor.readTestSteps(excelSource.getFilePath(),excelSource.getSheetName());
});