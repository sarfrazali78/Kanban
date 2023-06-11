import { Fragment } from 'react'
import styles from './sidebar.module.css'
import { BiUser, BiCustomize } from 'react-icons/bi'
import { TbCheckbox, TbArchive } from 'react-icons/tb'
import { MdOutlineContentCopy, MdAdd, MdOutlineChangeHistory } from 'react-icons/md'
import { RiAttachment2 } from 'react-icons/ri'
import { HiTemplate } from 'react-icons/hi'
import { AiOutlineArrowRight, AiOutlineShareAlt, AiFillGithub, AiOutlineClockCircle } from 'react-icons/ai'
import { TiTag } from 'react-icons/ti'
import { CgFile } from 'react-icons/cg'


export default function SideBar() {
    return (
        <Fragment>
            <div className={styles.MainSideBar}>
                <div >
                    <h5>Add to card</h5>
                    <p className={styles.SideBar}>{<BiUser/>} Members</p>
                    <p className={styles.SideBar}>{<TiTag/>} Label</p>
                    <p className={styles.SideBar}>{<TbCheckbox />} Checklist</p>
                    <p className={styles.SideBar}>{<AiOutlineClockCircle />} Dates</p>
                    <p className={styles.SideBar}>{<RiAttachment2 />} Attachment</p>
                    <p className={styles.SideBar}>{<CgFile/>} Cover</p>
                    <p className={styles.SideBar}>{<BiCustomize/>} Custom Fields</p>

                </div>
                <div >
                    <h5>Power-Ups</h5>
                    <p className={styles.SideBar}>{<AiFillGithub/>} GitHub</p>
                    <p className={styles.SideBar}>{<MdOutlineChangeHistory/>} Story Points</p>
                    <p className={styles.SideBar}>{<MdAdd />} Add Power-Ups</p>
                </div>
                <div >
                    <h5>Actions</h5>
                    <p className={styles.SideBar}>{<AiOutlineArrowRight />} Move</p>
                    <p className={styles.SideBar}>{<MdOutlineContentCopy />} Copy</p>
                    <p className={styles.SideBar}>{<HiTemplate />} Make template</p>
                    <p className={styles.SideBar}>{<TbArchive />} Archive</p>
                    <p className={styles.SideBar}>{<AiOutlineShareAlt />} Share</p>
                </div>
            </div>
        </Fragment>
    )
}