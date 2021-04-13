import Layout from '../components/AppLayout/Layout'
import Code from '../components/code'


export default function Home() {

    return(
        <Layout>
            <div className="h-full grid place-items-center place-content-center">
                <img src="cartoonist.png" alt="logo"/>
                <h1 className="text-4xl font-bold text-white mb-5">Voltorb</h1>
                <h2 className="text-2xl font-bold text-center text-white mb-5">Talk about development with developers</h2>  
                <div>
                    <Code />
                </div>
            </div>
        </Layout>
    )
}
