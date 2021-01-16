import styles from '../../styles/Footer.module.scss'

const Footer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                    <h6 className={`${styles.text}`}> &#169; 2021 All rights reserved.</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;