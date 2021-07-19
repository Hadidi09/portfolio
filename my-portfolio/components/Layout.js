import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const Layout = ({ children, page}) => {
    return (
        <div>
            <Head>
                <title>{ page}</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;