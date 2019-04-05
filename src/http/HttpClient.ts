import Client from "@core/Client";

enum Method {
  POST,
  PUT
}

type FunctionSuccess = (json: object) => void;
type FunctionError = (error: string) => void;

class HttpClient implements Client {
  getResponseJson = (url: string, fctSuccess: FunctionSuccess = () => {}, fctError: FunctionError = () => {}): void => {
    fetch(url)
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      })
      .then(json => fctSuccess(json))
      .catch(error => fctError(error));
  }

  methodJsonResponseJson = (method: Method, url: string, data: object, fctSuccess: FunctionSuccess, fctError: FunctionError): void => {
    fetch(url, {
      method: Method[method],
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf8"
      },
      body: JSON.stringify(data)
    })
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      })
      .then(json => fctSuccess(json))
      .catch(error => fctError(error));
  }

  postJsonResponseJson = (url: string, data: object, fctSuccess: FunctionSuccess = () => {}, fctError: FunctionError = () => {}) => this.methodJsonResponseJson(Method.POST, url, data, fctSuccess, fctError);

  putJsonResponseJson = (url: string, data: object, fctSuccess: FunctionSuccess = () => {}, fctError: FunctionError = () => {}) => this.methodJsonResponseJson(Method.PUT, url, data, fctSuccess, fctError);

  shutDown = () => {};
}

export default HttpClient;
