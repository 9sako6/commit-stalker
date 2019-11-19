
declare module "react-useanimations" {
  import React from "react";
  export interface UseAnimationsProps {
    animationKey: string;
    size: number;
  }
  export default class UseAnimations extends React.Component<UseAnimationsProps> {}
}