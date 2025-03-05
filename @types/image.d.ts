declare module '*.svg' {
  import React from 'react';
  const src: string;
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  export default src;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
