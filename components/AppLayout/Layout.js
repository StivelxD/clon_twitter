import Head from "next/head";

const Layout = ( {children} ) => {
    return (
        <>
            <div className="grid h-screen place-items-center">
                <Head>
                    <title>Voltorb</title>
                </Head>
                <main className="bg-blue-400 h-screen w-screen sm:h-5/6 sm:w-96 rounded-lg shadow-xl">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;