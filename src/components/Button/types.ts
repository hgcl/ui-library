export type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "primary" | "secondary" | "ternary";
  onClick?: () => void;
  disabled?: boolean;
};
