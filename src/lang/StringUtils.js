import "babel/polyfill";

class StringUtils {
  constructor() {
    String.prototype.contains = str => this.includes(str);
  }
}

export default StringUtils;
