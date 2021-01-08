export type Store = {
  status: {
    optimization: LoadingState;
    meta: LoadingState;
  };
  skills: string[];
};

export type OptError = {
  isError: boolean;
  errorStep: number;
};
