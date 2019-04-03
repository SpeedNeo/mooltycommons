import * as React from "react";
import { MathieuProps } from "./index";

class Mathieu extends React.Component<MathieuProps> {
  render() {
    return (
      <div>
        Coucou {this.props.message}
      </div>
    );
  }
}

export default Mathieu;
