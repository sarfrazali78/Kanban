import styles from './descriptionTitle.module.css'
import { useRecoilState } from "recoil";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { atomListUid,list,uidOfListItem,atomCardName, Watch } from "../../../organisms/recoil/descriptionData";
import { getData } from '../../../organisms/data/data';
import { GlobalStyles } from '@mui/material';


export default function DescriptionTitle() {
  const [watch, setWatch] = useRecoilState(Watch);
  const [titleEdit, setTitleEdit] = useState(false);
  const [titleText, setTitleText] = useRecoilState(atomCardName);
  const [listData, setListData] = useRecoilState(list);
  const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem);
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  const [listTitle, setListTitle] = useState("");

  useEffect(() => {
    let listData = getData();
    const listIndex = listData.findIndex(
      (item) => item.ListId === currentListUid
    );
    if (listIndex !== -1) {
      const nameOfList = listData[listIndex].nameOfList;
      setListTitle(nameOfList);
    }
  }, []);

  function handleTextField(e) {
    setTitleText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTitleEdit(!titleEdit);

    const tempList = getData();
    const listIndex = tempList.findIndex(
      (ele) => ele.ListId === currentListUid
    );
    const cardIndex = tempList[listIndex].tasks.findIndex(
      (ele) => ele.cardItemId === uidOfList
    );
    tempList[listIndex].tasks[cardIndex].nameOfCardItem = titleText;
    localStorage.setItem("listData", JSON.stringify(tempList));
    setListData(tempList);
  }

  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.titleFirst}>
          <div className={styles.titleIcon}>
            <DvrOutlinedIcon
              className={styles.icon}
              style={{ fontSize: "20px" }}
            />
          </div>

          <div className={styles.titleSecond}>
            <div className={styles.titleName}>
              <form onSubmit={handleSubmit}>
                {titleEdit ? (
                  <>
                    <TextField
                      id="outlined-size-small"
                      value={titleText}
                      size="small"
                      onChange={handleTextField}
                      className={styles.textField}
                    />
                  </>
                ) : (
                  <p onClick={() => setTitleEdit(!titleEdit)}>{titleText}</p>
                )}
              </form>
              {/* <div className={styles.listName}>
                <small>
                  in list{" "}
                  <span className={styles.listTitleName}>{listTitle} </span>{" "}
                </small>
                {watch && (
                  <VisibilityOutlinedIcon style={{ fontSize: "16px" }} />
                )}
              </div> */}
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.notificationContainer}>
                <small>Notifications</small>
                <div>
                  {watch ? (
                    <div
                      className={styles.watching}
                      onClick={() => setWatch(!watch)}
                    >
                      <div>
                        <VisibilityOutlinedIcon style={{ fontSize: "16px" }} />
                      </div>
                      <small>Watching</small>
                      <div>
                        <CheckOutlinedIcon
                          className={GlobalStyles.check}
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={styles.watch}
                      onClick={() => setWatch(!watch)}
                    >
                      <div>
                        <VisibilityOutlinedIcon style={{ fontSize: "16px" }} />
                      </div>
                      <small>Watch</small>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


