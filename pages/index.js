import styles from "../styles/home.module.scss";
import Layout from "../components/Layout/Layout";
import IndexMenu from "../components/IndexMenu/IndexMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />
      <IndexMenu />
    </div>
  );
}
