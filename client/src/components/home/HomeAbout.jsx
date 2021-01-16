import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getAbout} from '../../store/actions/actionAbout'
import styles from '../../styles/HomeAbout.module.scss'
import Loader from '../loader/Loader'

const HomeAbout = () => {
    const dispatch = useDispatch();
    const items = useSelector(state=> state.about)

    useEffect(()=> {
        dispatch(getAbout())
    }, [])

    const {about} = items

    return (
        <>
            {
                about ? 
                (
                    <div className={`container ${styles.container}`}>
                        <div className='row'>
                            <div className={`${styles.imgbox} col-md-4`}>
                                <div>
                                    <img src="https://scontent.fgyd4-2.fna.fbcdn.net/v/t1.0-9/116628529_775888813155932_8032967138028499832_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=XfH3mjRQJzkAX_nMba8&_nc_ht=scontent.fgyd4-2.fna&oh=4f49f04685683302aa91639ae0f57818&oe=60257A30" alt="About Photo"/>
                                </div>
                            </div>
                            <div className={`${styles.textbox} col-md-8`}>
                                {
                                    about ? 
                                    (
                                        <div>
                                            <p>{about[0].job}</p>
                                            <h4>{about[0].name}</h4>
                                            <p>{about[0].description}</p>
                                            <div>
                                                {/* <button>Hire Me</button> */}
                                                <div className={`${styles.button}`}>
                                                    <span>
                                                        Sosial Media
                                                        <i className="fas mx-1 fa-share"></i>
                                                    </span>
                                                    <a  ><i className="fab fa-facebook-f"></i></a>
                                                    <a  ><i className="fab fa-twitter"></i></a>
                                                    <a  ><i className="fab fa-instagram"></i></a>
                                                    <a  ><i className="fab fa-github"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    ''
                                }
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

export default HomeAbout;