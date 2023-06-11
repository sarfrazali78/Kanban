import React from "react";

import styles from "./description.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import DescriptionEdit from "./descriptionEdit/descriptionEdit";
import DescriptionActivity from "./descriptionActivity/descriptionActivity";
import DescriptionCommennts from './descriptionComment/descriptionComment'
import DescriptionTitle from './descriptionTitle/descriptionTitle'
import ActivityList from "../activityList/activityList";
import SideBar from "./sideBar/sidebar";


function DescriptionModel() {
  const navigate = useNavigate();
  return (
    <div className={styles.DescriptionModel}>
      <div className={styles.descriptionMainContainer}>
        
        <div>
        <div className={styles.close}>
          <DescriptionTitle/>
         
        </div>
        <DescriptionEdit/>
        <DescriptionActivity/>
        <DescriptionCommennts/>
        <ActivityList/>
        </div>
        <CloseIcon
        sx={{
            marginLeft: "20rem"
        }}
            onClick={() => navigate("/kanban")}
            className={styles.iconClose}
          />
        <SideBar/>
      </div>
      
    </div>
  );
}

export default DescriptionModel;
