import styles from './scss/pandac_linkBtn.module.scss';
const PandacLinkBtn = ({ link, text, serviceName }) => {
  return (
    <div className={styles["linkBtn-container"]}>
      <a className={styles[serviceName]} href={link}>{text}</a>
    </div>
  );
};

export default  PandacLinkBtn;