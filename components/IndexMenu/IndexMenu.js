import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import styles from "../../styles/IndexMenu.module.scss";

const IndexMenu = () => {
  return (
    <div className={styles.iMenu}>
      <div className={styles.indexMenu}>
        <h1>FILIP MIHAJLOVSKI</h1>
        <h4>JavaScript Developer</h4>
      </div>
      <div className={styles.indexIcons}>
        <IconButton>
          <a href="http://facebook.com">
            <FacebookIcon className={styles.fbIcon} />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://linkedin.com/in/filip-mihajlovski-68773116b">
            <LinkedInIcon className={styles.linkedIcon} />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://github.com/philip993?tab=repositories">
            <GitHubIcon className={styles.gitIcon} />
          </a>
        </IconButton>
      </div>
    </div>
  );
};

export default IndexMenu;
