import userIcon from "./user-photo.jpg";
import logo from "./logo.png";
import styles from "./Header.module.css";

function Header(props) {
  const { isLogin } = props;
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      {isLogin ? (
        <img className={styles.userImg}
        src={userIcon} alt="user" />
      ) : (
        <div>
          <button>Login</button>
          <button>Registration</button>
        </div>
      )}
    </header>
  );
}

export default Header;
