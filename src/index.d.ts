declare module "vsc-app-test" {
  import * as React from "react";
  import { ViewProps, TextProps } from "react-native";

  export interface MyComponentProps extends ViewProps, TextProps {}

  const MyComponent: React.FC<MyComponentProps>;

  export default MyComponent;
}
