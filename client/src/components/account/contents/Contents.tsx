import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {useEffect} from 'react'

// css imports
import styles from '../../../styles/Contents.module.scss'

//loader component import
import Loader from '../../loader/Loader'

// redux store imports
import { getAbout } from '../../../store/actions/actionAbout'
import { getNavbar } from '../../../store/actions/actionNavbar'

// TypeScript interface
import {Iabout} from '../../../types'
import Deletepopup from '../../popups/deletepopup'

const Contents:React.FC<Iabout> = () => {

    const dispatch = useDispatch()
    const navlist = useSelector(state=> state.navbar)
    const aboutpage = useSelector(state=>state.about)
    const isshow = useSelector(state=>state.isshowing)

    useEffect(()=> {
        dispatch(getNavbar())
        dispatch(getAbout())
    }, [])

    const {data} = navlist

    const {about} = aboutpage

    const { isshowing } = isshow

    return (
        <>

            {
                isshowing ? 

                about ? 
                    (
                        <div className={`container ${styles.container}`}>
                            <div className="row">
                                <div className="col-lg-12">
                                <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Job</th>
                                                <th scope="col">Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                about.map(item => (
                                                    <tr key={item._id}>
                                                        <td>{item._id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.job}</td>
                                                        <td>
                                                            <i className="fas fa-trash"></i>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    ''
                
                :

                data ? 
                    (
                        <div className={`container  ${styles.container}`}>
                            <div className="row">
                                <div className="col-lg-12 p-0">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#id</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Adress</th>
                                                <th scope="col">Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map(item => (
                                                    <tr key={item._id}>
                                                        <td>{item._id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.adress}</td>
                                                        <td>
                                                            <i className="fas fa-wrench"></i>
                                                            /
                                                            <Deletepopup item={item}/>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <Loader />

            }
        </>
    )
}

export default Contents;