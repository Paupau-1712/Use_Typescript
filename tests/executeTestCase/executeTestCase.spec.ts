import test, { chromium, Page } from '@playwright/test';
import {actionHandler } from '../Utility/ActionHandler';
import { readTestCaseTemplate } from '../Utility/ExcelReader';
import { ExcelTestDataSource } from '../Utility/fileSettings';

test('Execute Excel Test Case', async ({page}) => {

  const performAction = new actionHandler(page);
  const testExecutor = new readTestCaseTemplate(performAction);
  const dataSource = new ExcelTestDataSource();
  await testExecutor.readTestSteps(dataSource.getFilePath(),dataSource.getSheetName() );
});