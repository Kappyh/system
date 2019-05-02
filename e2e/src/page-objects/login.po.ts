import { browser, element, by, ElementFinder } from "protractor";

export class LoginPO {
  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  private inputLogin(): ElementFinder {
    return element(by.id("input-username"));
  }

  private inputPassword(): ElementFinder {
    return element(by.id("input-password"));
  }

  private btnSubmit(): ElementFinder {
    return element(by.id("btn-submit"));
  }

  public fillLoginForm(username: string, password: string): void {
    this.inputLogin().sendKeys(username);
    this.inputPassword().sendKeys(password);
    this.btnSubmit().click();
  }

  public validUrl(): Promise<string> {
    return browser.getCurrentUrl() as Promise<string>;
  }
}
