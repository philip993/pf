import {
  AppBar,
  Toolbar,
  Drawer,
  Button,
  List,
  ListItem,
  IconButton,
} from '@material-ui/core';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.scss';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <AppBar
      className={styles.appBar}
      style={{ background: 'transparent', boxShadow: 'none' }}
      position="static"
    >
      <Toolbar className={styles.toolbar}>
        <div className={styles.left}>
          <Link href="/">
            <a>FM</a>
          </Link>
        </div>

        <div className={styles.right}>
          <Link href="/about" className={styles.link}>
            <a>About Me</a>
          </Link>
          <Link href="/projects" className={styles.link}>
            <a>Projects</a>
          </Link>
          <Link href="/contact" className={styles.link}>
            <a>Contact Me</a>
          </Link>
          <Link href="/cv" className={styles.link}>
            <a>CV</a>
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
              <Button
                className={styles.closeIcon}
                onClick={handleDrawerClose}
              />
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
