export class Helper {
  public static formatNumber(n: number) { var s = `0${n}`; return s.substr(s.length - 2, 2) };
  public static formatTime = (d: Date) => `${Helper.formatNumber(d.getHours())}:${Helper.formatNumber(d.getMinutes())}:${Helper.formatNumber(d.getSeconds())}`;
  public static randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  public static randomNumber = (min, max) => (max - min) * Math.random() + min;
  public static randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  public static strData = ['abcdefghijklmnopqrstuvwxyz', '0123456789', '`!@#$%^&*()_+'];
  public static randomString(length: number): string {
    return Array(length).fill('0').map(v => {
      var str = Helper.randomItem(Helper.strData);
      return str[Math.floor(Math.random() * str.length)];
    }).join('');
  };
}
