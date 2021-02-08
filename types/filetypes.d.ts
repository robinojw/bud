declare module "*.svg" {
  const content: any;
  export default content;
  export const ReactComponent: React.SVGFactory;
}

declare module "*.png" {
  const urlStr: string;
  export default urlStr;
}

declare module "*.jpg" {
  const urlStr: string;
  export default urlStr;
}
