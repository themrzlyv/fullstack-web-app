import SidePanel from '../components/account/sidepanel/SidePanel'
import Contents from '../components/account/contents/Contents'


const Account:React.FC = () => {
    return (
        <div className='container my-3'>
            <div className="row">
                <div className="col-md-4 my-2">
                    <SidePanel />
                </div>
                <div className="col-md-8 my-2">
                    <Contents />
                </div>
            </div>
        </div>
    )
}



export default Account;