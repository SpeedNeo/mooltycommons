class StringUtils {
  constructor() {
    String.prototype.contains = str => this.indexOf(str) > -1;
  }
}

export default StringUtils;
