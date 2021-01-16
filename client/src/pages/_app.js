import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'

import { ToastProvider } from 'react-toast-notifications'

import Layout from '../components/layouts/Layout'


import '../styles/Global.css'


function MyApp({ Component, pageProps }) {
    return (
        // <Provider store={store}>
            <ToastProvider autoDismiss={true} autoDismissTimeout="3000">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ToastProvider>
        // {/* </Provider> */}
    )
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)