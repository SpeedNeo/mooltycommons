import * as React from "react";

export interface MathieuProps {
  message: string;
}

declare class Mathieu extends React.Component<MathieuProps> {}

declare module "mathi" {}

export default Mathieu;
