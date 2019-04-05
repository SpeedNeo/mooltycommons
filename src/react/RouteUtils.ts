import StringUtils from "@lang/StringUtils";

class RouteUtils {
  static isRoute = (location: Location, routeName: string): boolean => StringUtils.contains(location.pathname, routeName);
}

export default RouteUtils;
