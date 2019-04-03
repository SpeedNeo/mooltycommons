var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.stringNotNull = function (str, strIfNull) {
        if (strIfNull === void 0) { strIfNull = ""; }
        return (str == null ? strIfNull : str);
    };
    StringUtils.stringNotEmpty = function (str, strIfEmpty) { return (StringUtils.stringNotNull(str) === "" ? strIfEmpty : str); };
    StringUtils.contains = function (str, substring) { return str.includes(substring); };
    StringUtils.isNumber = function (str) { return !isNaN(+str); };
    return StringUtils;
}());
export default StringUtils;
