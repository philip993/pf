import Layout from '../components/Layout/Layout';
import styles from '../styles/about.module.scss';
import { Avatar, Button } from '@material-ui/core';
import Link from 'next/link';
import CvButton from '../components/CvButton/CvButton';

const About = () => {
  return (
    <div className={styles.about}>
      <Layout className={styles.t} />
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>
      <div className={styles.body}>
        <div className={styles.aboutContainer}>
          <div className={styles.avatarContainer}>
            <Avatar
              className={styles.avatar}
              alt="profie"
              src={require('../public/pf.png')}
            />
            <CvButton />
          </div>

          <div className={styles.bContainer}>
            <h2>BIO</h2>
            <div className={styles.bioContainer}>
              <p>
                My name is Filip Mihajlovski. I'm 27 years old. Based in
                Kumanovo, N. Macedonia.
              </p>
              <p>
                I'm aspiring Full Stack JavaScript Developer. I prefer working
                with MERN stack.
              </p>
              <p>
                {/* Coming from management and financial accounting background with
                eye for details and business know-how. */}
                Coming from financial accounting field and management background
                is giving me a knack for details and know-how from the industry.
              </p>
              <p>
                I'm passionate about creating and delivering modern and
                functional websites and applications.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cvContainer}></div>
        <div className={styles.info}>
          <section>
            <h2>Frameworks/Libraries</h2>
            <ul>
              <li>Proficient with React and Express.</li>
              <li>
                Experience with NestJs, Next.js, AngularJs and Handlebars.
              </li>
              <li>REST API</li>
            </ul>
          </section>
          <section>
            <h2>Databases</h2>
            <ul>
              <li>MongoDB with Mongoose.</li>
              <li>MySQL with Sequelize and TypeORM.</li>
            </ul>
          </section>
          <section>
            <h2>Features</h2>
            <ul>
              <li>Implementation of Payment systems for E-commerce.</li>
              <li>Adding Admin Panel to websites.</li>
              <li>Authentication and Authorization.</li>
              <li>Create UI for external API.</li>
            </ul>
          </section>
          <section>
            <h2>Tools</h2>
            <ul>
              <li>
                Creating Mockups and high-fidelity Prototypes with Figma and
                InVision Studio.
              </li>
              <li>Scheduling Project features and time-frames in Trello.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
export default About;
