import {expect , type Locator , type Page , selectors} from '@playwright/test';

export class loginDemopage {
    readonly page: Page
    readonly demologinlink: Locator
    readonly username: Locator
    readonly password: Locator
    readonly login_button: Locator
    readonly successful_login: Locator
    readonly invalid_login_error: Locator

    constructor(page: Page) {
        this.page = page;
        this.demologinlink =page.getByRole('heading', { name: 'Test login' });
        this.username =page.locator('[id=username]')
        this.password = page.locator('[id=password]');
        this.login_button = page.locator('[id=submit]');
        this.successful_login = page.locator('h1', {hasText: 'Logged In Successfully'});
        this.invalid_login_error = page.locator('[id=error]');
    }

    async gotologinsite() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
        await expect(this.demologinlink).toBeVisible();
    }

    async closebrowser() {
        await this.page.close()
    }

    async enterUsername(username_input: string) {
        await this.username.waitFor({ state: 'visible' });
        await this.username.fill(username_input)
    }

    async enterPassword(password_input: string) {
        await this.password.waitFor({ state: 'visible' });
        await this.password.fill(password_input)
    }

    async login_btn() {
        await this.login_button.waitFor({ state: 'visible' });
        await this.login_button.click()
    }

    async validate_successful_login(username_input: string,password_input: string) {
        await this.enterUsername(username_input)
        await this.enterPassword(password_input)
        await this.login_btn()
    }

    async validate_invalid_login(username_input: string,password_input: string) {
        await this.enterUsername(username_input)
        await this.enterPassword(password_input)
        await this.login_btn()
    }

    async assert_successful_login(){
        await expect(this.successful_login).toBeVisible();
    }

    async assert_invalid_login(){
        await expect(this.invalid_login_error).toBeVisible();
    }

}