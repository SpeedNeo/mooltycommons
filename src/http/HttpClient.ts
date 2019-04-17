import Client from "../Client";

const POST: string = "POST";
const PUT: string = "PUT";

type FunctionResponse = (response: Response) => void;
type FunctionSuccess<T> = (json: T) => void;
type FunctionError = (error: any) => void;

class HttpClient implements Client {
  getResponseJson = <T>(url: string, fctResponse: FunctionResponse = () => {}, fctSuccess: FunctionSuccess<T> = () => {}, fctError: FunctionError = () => {}): void => {
    fetch(url)
      .then((response: Response) => {
        fctResponse(response);

        if (response.ok) {
          return response.json();
        }
      })
      .then(json => fctSuccess(json))
      .catch(error => fctError(error));
  }

  methodJsonResponseJson = <U, V>(method: string, url: string, data: U, fctResponse: FunctionResponse, fctSuccess: FunctionSuccess<V>, fctError: FunctionError): void => {
    fetch(url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf8"
      },
      body: JSON.stringify(data)
    })
      .then((response: Response) => {
        fctResponse(response);

        if (response.ok) {
          return response.json();
        }
      })
      .then(json => fctSuccess(json))
      .catch(error => fctError(error));
  }

  postJsonResponseJson = <U, V>(url: string, data: U, fctResponse: FunctionResponse = () => {}, fctSuccess: FunctionSuccess<V> = () => {}, fctError: FunctionError = () => {}) => this.methodJsonResponseJson(POST, url, data, fctResponse, fctSuccess, fctError);

  putJsonResponseJson = <U, V>(url: string, data: U, fctResponse: FunctionResponse = () => {}, fctSuccess: FunctionSuccess<V> = () => {}, fctError: FunctionError = () => {}) => this.methodJsonResponseJson(PUT, url, data, fctResponse, fctSuccess, fctError);

  shutDown = () => {};
}

export default HttpClient;
