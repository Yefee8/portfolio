import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {node} from "prop-types";

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
            <h1 className="text-xl md:text-3xl font-bold text-primary" style={{fontFamily: 'Shockwave'}}>Skills</h1>
            <div className="cards mt-12 flex justify-around flex-wrap w-full">
                <Card title="Vue.js" subTitle="" style={{width: '25em'}} header={vueHeader}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>
                        I am started to Vue.js in 2020 winter, <br/>
                        Vue skills: <br/>
                        Nuxt.js,
                        PrimeVue,
                        Tailwind,
                        Material Ui,
                        a little bit Vuetify. <br/>

                        <div className="mt-3 flex-col w-full items-center justify-between gap-y-3 flex wrap">
                            <a href="https://github.com/Yefee8/landingpage" target="_blank">
                                <Button>Landing Page</Button>
                            </a>
                            <a href="https://github.com/Yefee8/vue-scroll-load" target="_blank">
                                <Button>Scroll Loader</Button>
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

                        <div className="mt-3 flex-col w-full items-center justify-between gap-y-3 flex wrap">
                            <a href="https://github.com/Yefee8/react-xox" target="_blank">
                                <Button>Tic Tac Toe</Button>
                            </a>
                            <a href="https://github.com/Yefee8/cloud-frontend" target="_blank">
                                <Button>Yefee Cloud</Button>
                            </a>
                            <a href="https://stalk.gg" target="_blank">
                                <Button>Stalk.gg</Button>
                            </a>
                        </div>
                    </p>
                </Card>

                <Card title="Node.js" subTitle="" style={{width: '25em'}} header={nodeHeader}>
                    <p className="m-0" style={{lineHeight: '1.5'}}>
                        I am started to React.js in 2021 Summer, <br/>
                        React skills: <br/>
                        Next.js,
                        PrimeReact. <br/>

                        <div className="mt-3 flex-col w-full items-center justify-between gap-y-3 flex wrap">
                            <a href="https://github.com/Yefee8/infinite-scroller-y" target="_blank">
                                <Button>Infinite Scroller(library)</Button>
                            </a>
                            <a href="https://github.com/Yefee8/cloud-frontend" target="_blank">
                                <Button>Yefee Cloud</Button>
                            </a>
                            <a href="https://github.com/Yefee8/send-mail-api" target="_blank">
                                <Button>Send Mail API (library)</Button>
                            </a>
                        </div>
                    </p>
                </Card>
            </div>
        </div>
    )
}
