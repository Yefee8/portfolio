import {Card} from "primereact/card";
import {Button} from "primereact/button";

export default function Second() {
    const vueHeader = (
        <img src="https://cdn.discordapp.com/attachments/921726256481976360/992008339129118790/vue_banner.png"
             className="w-full h-48" alt="Vue"/>
    );

    const reactHeader = (
        <img src="https://cdn.discordapp.com/attachments/921726256481976360/992008095653974066/react_banner.png"
             className="w-full h-48" alt="React"/>
    )
    const nodeHeader = (
        <img src="https://cdn.discordapp.com/attachments/921726256481976360/992010431914848286/node_banner.png"
             className="w-full h-48" alt="Node"/>
    )

    return (
        <div className="flex flex-col items-center justify-between mt-24">
            <h1 className="text-xl md:text-3xl font-bold text-primary"
                style={{fontFamily: 'Nothing You Could Do'}}>skills</h1>

            <div className="cards mt-24 flex justify-around flex-wrap w-full">
                <Card title="Vue.js" subTitle="" style={{width: '25em'}} header={vueHeader}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>
                        I am started to Vue.js in 2020 winter, <br/>
                        Vue skills: <br/>
                        Nuxt.js,
                        PrimeVue,
                        Tailwind,
                        Material Ui,
                        a little bit Vuetify. <br/>
                        {/*https://github.com/Yefee8/template-shop*/}
                        <div className="mt-12 flex-col w-full items-center justify-between gap-y-3 flex wrap">
                            <a href="https://github.com/Yefee8/landingpage" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>landing page</Button>
                            </a>
                            <a href="https://github.com/Yefee8/vue-scroll-load" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>scroll loader</Button>
                            </a>
                            <a href="https://github.com/Yefee8/template-shop" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>template shop</Button>
                            </a>
                        </div>
                    </p>
                </Card>

                <Card title="React.js" subTitle="" style={{width: '25em'}} header={reactHeader}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>
                        I am started to React.js in 2021 Summer, <br/>
                        React skills: <br/>
                        Next.js,
                        Tailwind,
                        Material Ui &
                        PrimeReact. <br/>

                        <div className="mt-12 flex-col w-full items-center justify-between gap-y-3 flex wrap">
                            <a href="https://github.com/Yefee8/react-xox" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>tic tac toe</Button>
                            </a>
                            <a href="https://github.com/Yefee8/cloud-frontend" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>yefee cloud</Button>
                            </a>
                            <a href="https://stalk.gg" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>stalk.gg</Button>
                            </a>
                        </div>
                    </p>
                </Card>

                <Card title="Node.js" subTitle="" style={{width: '25em'}} header={nodeHeader}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>
                        I am started to Node.js in 2020 Summer, <br/>
                        Node skills: <br/>
                        Multer,
                        MongoDb. <br/>

                        <div className="mt-12 flex-col w-full items-center justify-between gap-y-3 flex wrap">
                            <a href="https://github.com/Yefee8/infinite-scroller-y" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>infinite scroller</Button>
                            </a>
                            <a href="https://github.com/Yefee8/cloud-frontend" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>yefee cloud</Button>
                            </a>
                            <a href="https://github.com/Yefee8/send-mail-api" target="_blank" rel="noreferrer">
                                <Button className="w-36 h-12 text-md flex justify-center items-center"
                                        style={{fontSize: '12.5px'}}>send mail api</Button>
                            </a>
                        </div>
                    </p>
                </Card>
            </div>

            <h1 className="mt-24 text-md md:text-2xl w-full text-center" style={{fontFamily: 'Nothing You Could Do'}}>and for more, check out my <a href="https://github.com/Yefee8"><span className="cursor-pointer text-primary">github</span></a>!</h1>
        </div>
    )
}
