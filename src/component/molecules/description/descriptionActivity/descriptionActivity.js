import styles from './descriptionActivity.module.css' 
import { useRecoilState } from "recoil";
import TocIcon from "@mui/icons-material/Toc";
import { ShowActivity } from '../../../organisms/recoil/descriptionData';

function DescriptionActivity() {
  const [detailsHide, setDetailsHide] = useRecoilState(ShowActivity);

  return (
    <>
      <div className={styles.activityContainer}>
        <div className={styles.activityLeft}>
          <div className={styles.activityIcon}>
            <TocIcon />
          </div>
          <div className={styles.activityText}>
            <p>Activity</p>
          </div>
        </div>
        <div
          className={styles.hideDetails}
          onClick={() => setDetailsHide(!detailsHide)}
        >
          {detailsHide ? (
            <small>Hide Details</small>
          ) : (
            <small>Show Details</small>
          )}
        </div>
      </div>
    </>
  );
}

export default DescriptionActivity;
