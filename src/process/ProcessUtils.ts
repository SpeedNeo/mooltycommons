class ProcessUtils {
  static isProd = (): boolean => process.env && process.env.NODE_ENV === "production";

  static isDev = (): boolean => process.env && process.env.NODE_ENV === "development";
}

export default ProcessUtils;
