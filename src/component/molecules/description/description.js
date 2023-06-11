import React from "react";

import styles from "./description.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import DescriptionEdit from "./descriptionEdit/descriptionEdit";
import DescriptionActivity from "./descriptionActivity/descriptionActivity";
import DescriptionCommennts from './descriptionComment/descriptionComment'
import DescriptionTitle from './descriptionTitle/descriptionTitle'
import ActivityList from "../activityList/activityList";


function DescriptionModel() {
  const navigate = useNavigate();
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionMainContainer}>
        <div className={styles.close}>
          <DescriptionTitle/>
          <CloseIcon
            onClick={() => navigate("/kanban")}
            className={styles.iconClose}
          />
        </div>
        <DescriptionEdit/>
        <DescriptionActivity/>
        <DescriptionCommennts/>
        <ActivityList/>
      </div>
    </div>
  );
}

export default DescriptionModel;
