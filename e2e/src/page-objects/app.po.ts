import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public validUrl(): Promise<string> {
    return browser.getCurrentUrl() as Promise<string>;
  }
}
