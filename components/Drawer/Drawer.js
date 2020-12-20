import Link from 'next/link';
import styles from '../../styles/Drawer.module.scss';
import { useState } from 'react';
import { Button, Drawer, List, ListItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.drawer}>
      <IconButton
        onClick={!isOpen ? handleDrawerOpen : handleDrawerClose}
        edge="start"
      >
        <MenuIcon fontSize="large" className={styles.icon} />
      </IconButton>
      <Drawer open={isOpen} onClose={handleDrawerClose} anchor="right">
        <List onClick={handleDrawerClose} className={styles.menu}>
          <CloseIcon className={styles.closeIcon} onClick={handleDrawerClose} />
          <ListItem className={styles.menuItems}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ListItem>
          <ListItem className={styles.menuItems}>
            <Link href="/about">
              <a> About Me</a>
            </Link>
          </ListItem>
          <ListItem className={styles.menuItems}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </ListItem>
          <ListItem className={styles.menuItems}>
            <Link href="/contact">
              <a>Contact Me</a>
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
  );
};

export default DrawerMenu;
