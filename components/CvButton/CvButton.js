import { Button } from '@material-ui/core';
import styles from '../../styles/CvButton.module.scss';

const CvButton = () => {
  return (
    <Button className={styles.cvButton}>
      <a href="/cv">CV</a>
    </Button>
  );
};

export default CvButton;
