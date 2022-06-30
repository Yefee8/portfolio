import React, {FC, useEffect, useState} from 'react'
import First from "../components/parts/first";
import Second from "../components/parts/second";
import Footer from "../components/parts/footer";
import Head from "next/head";

const Home: FC = () => {
    return (
        <main>
            <Head>
                <title>Yefee - full stack dev</title>
                <meta name="descrpiton" content="Yefee(Yavuz Efe Fındıklı)'s portfolio."/>
                <meta name="keywords" content="Yavuz Efe Fındıklı Yefee Yefe portfolyo portfolio porföy"/>
                <meta name="author" content="Yefee, Yavuz Efe Fındıklı"/>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <First />
            <Second />
            <Footer />
        </main>
    )
}

export default Home;
