import { LoginPO } from "../page-objects/login.po";
import { browser, logging } from "protractor";

describe("Login Page", () => {
  let loginPo: LoginPO;

  beforeEach(() => {
    loginPo = new LoginPO();
  });

  it("Needs to fill the form and logon", () => {
    loginPo.fillLoginForm("Billie", "123");
    expect(loginPo.validUrl()).toContain("dashboard");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
