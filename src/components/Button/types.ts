export type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ternary";
  isDisabled?: boolean;
  onClick?: () => void;
};
