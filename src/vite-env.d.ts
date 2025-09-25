/// <reference types="vite/client" />
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "react-big-calendar";

declare module "react-big-calendar/lib/addons/dragAndDrop";
