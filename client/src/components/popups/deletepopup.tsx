import {useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useRouter} from 'next/router'

import {useDispatch , useSelector} from 'react-redux'
import {useEffect} from 'react'
import { deleteNavitem } from '../../store/actions/actionNavbar';

const  Deletepopup:React.FC = ({item}) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const router = useRouter();

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(deleteNavitem())
    // })

    return (
        <>
            <i onClick={() => setOpen(o => !o)} className="fas fa-trash"></i>
            <Popup  open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="container bg-transparent rounded">
                    <div className='row'>
                        <div className="col-lg-12 m-3">
                            <h4 className="h5">You want to delete <strong>{item.title}</strong> ?</h4>
                            <button 
                            onClick={closeModal} 
                            className='btn btn-outline-dark'>Back
                            </button>
                            <button 
                            onClick={() => {
                                dispatch(deleteNavitem(item._id))
                                router.push("/")
                            }}
                            className='btn mx-4 btn-outline-danger'>
                                Delete 
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default Deletepopup;