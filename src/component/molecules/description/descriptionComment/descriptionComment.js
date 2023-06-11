import styles from './descriptionComment.module.css'
import { useState } from "react";
import Button from "@mui/material/Button";
import { useRecoilState } from "recoil";
//import Moment from "react-moment";
//import PersonIcon from "@mui/icons-material/Person";
import { getData } from '../../../organisms/data/data';
import { list,
  uidOfListItem,atomListUid } from '../../../organisms/recoil/descriptionData';

function DescriptionComments() {
  const [showComment, setShowComment] = useState(false);
  const [commentText, setCommentText] = useState("");

  const tempList = getData();

  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  const [listData, setListData] = useRecoilState(list);
  const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem);

  const commentsListIndex = tempList.findIndex(
    (ele) => ele.ListId === currentListUid
  );
  const CommentsCardIndex = tempList[commentsListIndex].tasks.findIndex(
    (ele) => ele.cardItemId === uidOfList
  );

  const currentComment =
    tempList[commentsListIndex].tasks[CommentsCardIndex].comments;
  const [comments, setComments] = useState(currentComment || []);

  function handleComments(e) {
    e.preventDefault();
    if (commentText.trim() === "") {
      return;
    }
    const commentTimeValue = {
      id: new Date(),
      comment: commentText,
      time: new Date().getTime(),
    };

    let updatedComments = [...comments, commentTimeValue];
    setComments(updatedComments);

    const listIndex = tempList.findIndex(
      (ele) => ele.ListId === currentListUid
    );
    const cardIndex = tempList[listIndex].tasks.findIndex(
      (ele) => ele.cardItemId === uidOfList
    );
    tempList[listIndex].tasks[cardIndex].comments = updatedComments;
    localStorage.setItem("listData", JSON.stringify(tempList));
    setListData(tempList);

    setCommentText("");
  }

  function handleDelete(i) {
    let removeItems = comments.filter((element, index) => {
      return index !== i;
    });
    setComments(removeItems);

    const listIndex = tempList.findIndex(
      (ele) => ele.ListId === currentListUid
    );
    const cardIndex = tempList[listIndex].tasks.findIndex(
      (ele) => ele.cardItemId === uidOfList
    );
    tempList[listIndex].tasks[cardIndex].comments = removeItems;
    localStorage.setItem("listData", JSON.stringify(tempList));
  }

  return (
    <div className={styles.Main}>
      
      <div className={styles.commentContainer}>
        {showComment ? (
          <div className={styles.commentTexts}>
            <div className={styles.comment}>
              <input
                type="text"
                placeholder="Write a comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className={styles.comments}
              />
            </div>
            <div>
              <Button
                variant="contained"
                sx={{ width: "18%", ml: 4.7, borderLeft: "1rem" }}
                onClick={handleComments}
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.comment}>
            <input
              type="text"
              placeholder="Write a comment..."
              onClick={() => setShowComment(!showComment)}
              className={styles.comments}
            />
          </div>
        )}

        {comments.map(
          (comment, index) =>
            comment &&
            comment.comment &&
            comment.comment.trim() !== "" && (
              <div key={comment.id} className={styles.commentsContainer}>
                {/* <small className={styles.user}>
                  <span>User</span>{" "}
                  <Moment fromNow className={styles.commentsTime}>
                    {comment.time}
                  </Moment>
                </small>  */}
                <div className={styles.eachComment}>{comment.comment}</div>
                <div className={styles.updateComment}>
                  <button
                    styles={{ color: "red" }}
                    onClick={() => handleDelete(index)}
                    className={styles.modifyComment}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default DescriptionComments;