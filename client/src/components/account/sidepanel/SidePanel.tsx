import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {useEffect , useState} from 'react'
import {aboutShowing, navShowing} from '../../../store/actions/actionIsShowing'
import styles from '../../../styles/SidePanel.module.scss'

const SidePanel:React.FC = () => {
    const dispatch = useDispatch()
    
    const [navActive:Boolean, setnavActive] = useState<Boolean>(false)

    const [aboutActive:Boolean, setaboutActive] = useState<Boolean>(true)

    return (
        <div className={`container ${styles.container}`}>
            <div className="row">
                <div className="col-lg-12 py-2 m-2">
                    <h6 className="h5 m-0 p-0">
                        <i className="fas fa-cogs mx-1"></i>
                        Control Panel
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 py-1">
                    <ul className="list-group bg-transparent border-rounded">
                        <li 
                        onClick={() => dispatch(navShowing(navActive))}
                        className={` list-group-item bg-transparent`}>
                            Navigation Links
                        </li>
                        <li 
                        onClick={() => dispatch(aboutShowing(aboutActive))}
                        className={` list-group-item bg-transparent`}>
                            About Page
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidePanel;