import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css"
type HeaderProps = {
  onShowCart: () => void;
};

const HeaderCartButton: React.FC<HeaderProps> = ({onShowCart}) => {
  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
