import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar"
import Card from "@/components/card/card"

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (

        <div className={styles.container}>
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.main}>
                <NavBar userName="cuongho803@gmail.com"/>
                <Banner
                    videoId="4zH5iYM4wJo"
                    title="Clifford the red dog"
                    subTitle="a very cute dog"
                    imgUrl="/static/clifford.webp"
                />

                <Card imgUrl='/static/clifford.webp'
                      size="large"
                />
                <Card imgUrl='/static/clifford.webp'
                      size="medium"
                />
                <Card imgUrl='/static/clifford.webp'
                      size="small"
                />
                {/*<div className={styles.sectionWrapper}>*/}
                {/*    <SectionCards title="Disney" videos={disneyVideos} size="large"/>*/}
                {/*    <SectionCards*/}
                {/*        title="Watch it again"*/}
                {/*        videos={watchItAgainVideos}*/}
                {/*        size="small"*/}
                {/*    />*/}
                {/*    <SectionCards title="Travel" videos={travelVideos} size="small"/>*/}
                {/*    <SectionCards*/}
                {/*        title="Productivity"*/}
                {/*        videos={productivityVideos}*/}
                {/*        size="medium"*/}
                {/*    />*/}
                {/*    <SectionCards title="Popular" videos={popularVideos} size="small"/>*/}
                {/*</div>*/}
            </div>
        </div>

    )
}
