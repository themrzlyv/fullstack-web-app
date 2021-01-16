import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNavbar } from '../../store/actions/actionNavbar';

import styles from '../../styles/Navi.module.scss'

const Navi = () => {
    const dispatch = useDispatch();
    const items = useSelector(state=>state.navbar)

    useEffect(()=> {
        dispatch(getNavbar())
    }, [])

    const {data} = items;

    return (
        <div className={styles.container}>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className={`container ${styles.navContainer}`}>
                    <a className="navbar-brand">
                        <button>SM</button>
                        <span>The</span>
                        MRZLYV
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fas fa-align-right"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                data ? data.map(el=> (
                                    <li key={el._id} className="nav-item ">
                                        <Link href={el.adress}>
                                            <a className="nav-link">{el.title}</a>
                                        </Link>
                                    </li>
                                ))
                                :
                                ''
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navi;