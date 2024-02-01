
interface Props {
  children: string;
//   color: string;
  color?: 'primary' | 'secondary' | 'info' | 'danger' | 'success' | 'warning';
  onClick: (e: any) => void;
}
const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type="button" className={"m-2 btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
