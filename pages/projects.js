import Layout from '../components/Layout/Layout';
import styles from '../styles/projects.module.scss';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Button,
  CardActions,
} from '@material-ui/core';

import ReactLogo from '../public/react-js.svg';
import ExpressLogo from '../public/expressjs.svg';
import MongoLogo from '../public/mongodb.svg';
import SassLogo from '../public/sass.svg';
import NodeLogo from '../public/nodejs.svg';
import MySqlLogo from '../public/mysql.svg';
import NestLogo from '../public/nestjs_logo.svg';

const Projects = () => (
  <div className={styles.projects}>
    <Layout />
    <header className={styles.header}>
      <h1>Projects</h1>
    </header>
    <div className={styles.body}>
      <section className={styles.sectionOne}>
        <Card className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>E-COMMERCE</h2>
          </div>
          <CardContent className={styles.content}>
            <div className={styles.cardSpan}>
              <div className={styles.buttonContainer}>
                <Button className={styles.btn}>
                  <a href="https://github.com/philip993/e-com">GitHub</a>
                </Button>
              </div>
              <p>
                E-Commerce website. Provides User Sign-Up/Login with
                authentication system. Logged User can browse through Shop. User
                can create Order, view or pay the any Order on his account.
                Implemented payment system - STRAPI.
              </p>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={MongoLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={ExpressLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={ReactLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={NodeLogo} alt="" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className={styles.sectionTwo}>
        <Card className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>EMPLOYEE RECORDS</h2>
          </div>
          <CardContent className={styles.content}>
            <div className={styles.cardSpan}>
              <div className={styles.buttonContainer}>
                <Button className={styles.btn}>
                  <a href="https://github.com/philip993/employee-rec">GitHub</a>
                </Button>
              </div>
              <p>
                Employee Records is application suitable for HR management.
                Allows total User evidention and various schedules. Option to
                create PDF documents, such as Contracts, Contract Extentions and
                Terminations. Added option to send mail and attach documents.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={MySqlLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={ExpressLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={ReactLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={NodeLogo} alt="" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className={styles.sectionThree}>
        <Card className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>ACCOUNTING APP</h2>
          </div>
          <CardContent className={styles.content}>
            <div className={styles.cardSpan}>
              <div className={styles.buttonContainer}>
                <Button className={styles.btn}>
                  <a href="https://github.com/philip993/accounting">GitHub</a>
                </Button>
              </div>
              <p>
                Accounting App. Provides User with simple accounting software.
                User can create Customers, Vendors, Invoices, etc. Various
                statitics and reports.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={MySqlLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={NestLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={ReactLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={NodeLogo} alt="" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className={styles.sectionFour}>
        <Card className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>OSM MAPS</h2>
          </div>
          <CardContent className={styles.content}>
            <div className={styles.cardSpan}>
              <div className={styles.buttonContainer}>
                <Button className={styles.btn}>
                  <a href="https://github.com/philip993/osm-maps">GitHub</a>
                </Button>
              </div>
              <p>
                OSM-Maps is here to help you with the search for any desire
                place. Get directions from your point to any point on the Map.
                Search for Place of Interest around any given place on the Map.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={ReactLogo} alt="" />
              </div>
              <div className={styles.imageContrainer}>
                <img className={styles.images} src={SassLogo} alt="" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  </div>
);

export default Projects;
