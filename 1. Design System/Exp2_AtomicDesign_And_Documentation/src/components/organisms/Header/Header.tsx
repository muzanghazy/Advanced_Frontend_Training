import Badge from "../../atoms/Badge/Badge";
// import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-icon">⬡</span>
          <span className="logo-text">MyDS</span>
        </div>
        <nav className="header-nav">
          <a href="#tokens">Tokens</a>
          <a href="#atoms">Atoms</a>
          <a href="#molecules">Molecules</a>
        </nav>
        <Badge variant="success" dot>
          v1.0.0
        </Badge>
      </div>
    </header>
    // <header className={styles.header}>
    //   <div className={styles.inner}>
    //     <div className={styles.logo}>
    //       <span>⬡</span> <span>MyDS</span>
    //     </div>
    //     <nav className={styles.nav}>
    //       <a href="#tokens">Tokens</a> <a href="#atoms">Atoms</a>
    //       <a href="#molecules">Molecules</a>
    //     </nav>
    //     <Badge variant="success" dot>
    //       v1.0.0
    //     </Badge>
    //   </div>
    // </header>
  );
};
