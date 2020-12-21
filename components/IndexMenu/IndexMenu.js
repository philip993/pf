import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import styles from "../../styles/IndexMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const IndexMenu = () => {
  return (
    <div className={styles.iMenu}>
      <div className={styles.indexMenu}>
        <h1>FILIP MIHAJLOVSKI</h1>
        <h4>JavaScript Developer</h4>
      </div>
      <div className={styles.indexIcons}>
        <IconButton className={styles.indexButton}>
          <a href="http://facebook.com">
            {/* <FacebookIcon className={styles.fbIcon} /> */}
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className={styles.gitIcon}
            />
          </a>
        </IconButton>
        <IconButton className={styles.indexButton}>
          <a href="https://linkedin.com/in/filip-mihajlovski-68773116b">
            {/* <LinkedInIcon className={styles.linkedIcon} /> */}
            <FontAwesomeIcon icon={faLinkedin} className={styles.gitIcon} />
          </a>
        </IconButton>
        <IconButton className={styles.indexButton}>
          <a href="https://github.com/philip993?tab=repositories">
            {/* <GitHubIcon className={styles.gitIcon} /> */}
            <FontAwesomeIcon icon={faGithubSquare} className={styles.gitIcon} />
          </a>
        </IconButton>
      </div>
      <footer className={styles.footer}>
        <h6>Copyright &#169; 2020</h6>
        <h6>All Rights Reserved</h6>
      </footer>
    </div>
  );
};

export default IndexMenu;
