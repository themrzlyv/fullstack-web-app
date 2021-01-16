import styles from '../../styles/Layout.module.scss'
import Footer from './Footer'
import Navi from './Navi'

const Layout = ({children}) => {
    return (
        <>
            <Navi />
            {children}
            <Footer />
        </>
    )
}

export default Layout;