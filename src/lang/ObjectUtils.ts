import * as _ from "lodash";

class ObjectUtils {
  static clone = (obj: object): object => _.cloneDeep(obj);

  static isEqual = (obj1: object, obj2: object): boolean => _.isEqual(obj1, obj2);

  static isEmpty = (obj: object): boolean => {
    if (obj == null) {
      return true;
    }

    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  static merge = (obj1: object, obj2: object): void => {
    _.merge(obj1, obj2);
  }
}

export default ObjectUtils;
