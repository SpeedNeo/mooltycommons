import * as React from "react";

interface MathieuProps {
  message: string;
}

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
