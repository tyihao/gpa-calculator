declare module "*.less";
declare module "*.gif";
declare module "*.png";
declare module "*.svg";
declare module "*.md";

type LoadingState = "REQUEST" | "SUCCESS" | "FAILURE";

// TODO use this for better routing components
type ModuleRoute = {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path: string;
  title: string;
  exact: boolean;
  protected?: boolean;
  disabled?: boolean | (() => boolean);
};

type Redirection<T> = T & { to: string };
