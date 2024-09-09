import "./Header.css"
import HeaderCartButton from "./HeaderCartButton";

type HeaderProps = {
  onShowCart: () => void;
}

const Header: React.FC<HeaderProps> = ({onShowCart}) => {
  return (
    <header className="header">
      <h1>Trend Mağaza</h1>
     <HeaderCartButton onShowCart={onShowCart} />
    </header>
  );
};

export default Header;
