export type Card =
  | {
      id: number;
      title: string;
      type: "value" | "progress" | "avatar";
      value?: string;
      change: string;
      changeColor: string;
      chartColor: string;
      descriptionTitle: string;
      description: string;
    }
  | {
      id: number;
      title: string;
      steps: number[];
      activeStep: number;
      descriptionTitle: string;
      description: string;
    }
  | {
      id: number;
      title: string;
      avatars: string[];
      descriptionTitle: string;
      description: string;
    };


    