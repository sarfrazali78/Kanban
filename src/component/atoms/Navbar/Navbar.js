import styles from './Navbar.module.css';
import {AiOutlineStar} from 'react-icons/ai'
import {AiTwotoneThunderbolt} from 'react-icons/ai'
import {VscListFilter} from 'react-icons/vsc'
import {BiChevronDown} from 'react-icons/bi'
import {SiSimpleanalytics} from 'react-icons/si'
import {BsRocketTakeoffFill} from 'react-icons/bs'
import {BsFillPersonPlusFill} from 'react-icons/bs'

import {BsThreeDots} from 'react-icons/bs'
const Navbar = () => {
    return (
        <>
            <div className={styles.mainnav}>
            <>

                <div className={styles.head}>
                    <a>   Home Task Management</a>
                   <AiOutlineStar/>
                    <a> WorkSpace Visible</a>
                    <button className={styles.board} > <SiSimpleanalytics/> Board </button> <BiChevronDown/>
                    <a> <BsRocketTakeoffFill/> Power-Ups</a>
                    <a> <AiTwotoneThunderbolt/> Automation</a>
                    <a> <VscListFilter/>  Filter</a>
                    <button className={styles.button}>PR</button> 
                    <button className={styles.share}> <BsFillPersonPlusFill/>  Share</button>
                    <BsThreeDots/>
                </div>

            </>

            </div>

        </>
    )
}

export default Navbar