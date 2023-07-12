export default class Checker {
  static get emailFormat() {
    // eslint-disable-next-line no-useless-escape
    return /^[\w\-\.\/]+\@[\w\-]+\.[\w]+$/
  }

  static get pwFormat() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  }

  static checkEmailFormat(email: string) {
    return Checker.emailFormat.test(email)
  }

  static checkPasswordFormat(password: string) {
    return Checker.pwFormat.test(password)
  }

  static checkPasswordRepeatSame(password: string, passwordRepeat: string) {
    return password === passwordRepeat
  }
}
