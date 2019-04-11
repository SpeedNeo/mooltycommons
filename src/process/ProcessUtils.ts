class ProcessUtils {
  static isProd = (): boolean => true; // process.env && process.env.NODE_ENV === "production";

  static isDev = (): boolean => true; // process.env && process.env.NODE_ENV === "development";
}

export default ProcessUtils;
