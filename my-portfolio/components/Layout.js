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
            <main className="bg-gradient-to-t from-gray-900 via-gray-500 to-gray-900  ">{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;