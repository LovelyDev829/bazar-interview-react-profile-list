import Head from "next/head";
import "../styles/globals.scss";
import Header from "../lib/components/Header";
import Footer from "../lib/components/Footer";

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Profile List!</title>
            </Head>
            <Component />
        </>
    );
};

export default App;
