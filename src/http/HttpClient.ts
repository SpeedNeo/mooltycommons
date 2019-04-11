import Client from "@core/Client";
import { ProcessUtils } from "@core/process";

const POST: string = "POST";
const PUT: string = "PUT";

type FunctionSuccess<T> = (json: T) => void;
type FunctionError = (error: string) => void;

class HttpClient implements Client {
  getResponseJson = <T>(url: string, fctSuccess: FunctionSuccess<T> = () => {}, fctError: FunctionError = () => {}): void => {
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

  methodJsonResponseJson = <U, V>(method: string, url: string, data: U, fctSuccess: FunctionSuccess<V>, fctError: FunctionError): void => {
    fetch(url, {
      method: method,
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

  postJsonResponseJson = <U, V>(url: string, data: U, fctSuccess: FunctionSuccess<V> = () => {}, fctError: FunctionError = () => {}) => this.methodJsonResponseJson(POST, url, data, fctSuccess, fctError);

  putJsonResponseJson = <U, V>(url: string, data: U, fctSuccess: FunctionSuccess<V> = () => {}, fctError: FunctionError = () => {}) => this.methodJsonResponseJson(PUT, url, data, fctSuccess, fctError);

  shutDown = () => {};
}

export default HttpClient;
