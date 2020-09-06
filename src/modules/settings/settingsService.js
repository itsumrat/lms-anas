export default class SettingsService {
  static async fetchAndApply() {
    const settings = await this.find();
    this.applyTheme(settings.theme);
  }

  static async find() {
    return { theme: 'default' };
  }

  static async save(settings) {
    return null;
  }

  static applyTheme(color) {
    const oldLink = document.getElementById('theme-link');

    const link = document.createElement('link');
    link.setAttribute('id', 'theme-link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute(
      'href',
      `${process.env.PUBLIC_URL}/theme/dist/${color}.css`,
    );

    if (oldLink) {
      document
        .getElementsByTagName('head')
        .item(0)
        .replaceChild(oldLink, link);
    } else {
      document
        .getElementsByTagName('head')
        .item(0)
        .appendChild(link);
    }
  }
}
