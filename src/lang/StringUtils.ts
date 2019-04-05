class StringUtils {
  static stringNotNull = (str: string, strIfNull: string = ""): string => (str == null ? strIfNull : str);

  static stringNotEmpty = (str: string, strIfEmpty: string): string => (StringUtils.stringNotNull(str) === "" ? strIfEmpty : str);

  static contains = (str: string, substring: string): boolean => str.includes(substring);

  static isNumber = (str: string): boolean => !isNaN(+str);
}

export default StringUtils;
