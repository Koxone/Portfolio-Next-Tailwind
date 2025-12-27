type StackItem = {
  url: string;
  tooltip: string;
  border: string;
  text: string;
  bg: string;
  hover: string;
};

type StackGroup = {
  titleKey: string;
  cols?: string;
  items: StackItem[];
};

export type { StackItem, StackGroup };
