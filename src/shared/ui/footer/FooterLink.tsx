interface Props {
  children: string;
  onClick?: () => void;
}

export const FooterLink = ({ children, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      className="hover:text-primary transition-colors cursor-pointer"
    >
      {children}
    </li>
  );
};