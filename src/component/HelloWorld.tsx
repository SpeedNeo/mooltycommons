import * as React from "react";

interface IHelloWorld extends React.Props<HelloWorld> {
  color: string;
}

class HelloWorld extends React.Component<IHelloWorld, any> {
  render() {
    const a = { b: "toto" };

    const b = a.b;

    return (
      <div style={{ color: this.props.color }}>
        Hello world!
      </div>
    );
  }
}

export default HelloWorld;
