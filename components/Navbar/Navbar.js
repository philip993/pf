import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  const router = useRouter();
  return (
    <AppBar
      className={styles.appBar}
      style={{ background: "transparent", boxShadow: "none" }}
      position="static"
    >
      <Toolbar className={styles.toolbar}>
        <div className={styles.left}>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.active : ""}>FM</a>
          </Link>
        </div>

        <div className={styles.right}>
          <Link href="/about">
            <a className={router.pathname === "/about" ? styles.active : ""}>
              About Me
            </a>
          </Link>
          <Link href="/projects">
            <a className={router.pathname === "/projects" ? styles.active : ""}>
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname === "/contact" ? styles.active : ""}>
              Contact Me
            </a>
          </Link>
          <Link href="/cv">
            <a className={router.pathname == "/cv" ? styles.active : ""}>CV</a>
          </Link>
        </div>
        <div className={styles.drawer}>
          <IconButton
            className={styles.iButton}
            onClick={!isOpen ? handleDrawerOpen : handleDrawerClose}
          >
            <MenuIcon fontSize="large" className={styles.icon} />
          </IconButton>
          <Drawer open={isOpen} onClose={handleDrawerClose} anchor="right">
            <List onClick={handleDrawerClose} className={styles.menu}>
              <IconButton
                className={styles.closeIcon}
                onClick={handleDrawerClose}
              >
                <FontAwesomeIcon icon={faTimes} className={styles.cIcon} />
              </IconButton>
              <ListItem className={styles.menuItems}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </ListItem>
              <ListItem className={styles.menuItems}>
                <Link href="/about">
                  <a> About</a>
                </Link>
              </ListItem>
              <ListItem className={styles.menuItems}>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </ListItem>
              <ListItem className={styles.menuItems}>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </ListItem>
              <ListItem className={styles.menuItems}>
                <Link href="/cv">
                  <a>CV</a>
                </Link>
              </ListItem>
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
