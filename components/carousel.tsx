import {Carousel} from "primereact/carousel";
import {Button} from "primereact/button";

export default function YCarousel(){
    const repos = [
        {
            name: 'YefeeCloud',
            description:'A basic cloud made with Node.js & React',
            image:'https://cdn.discordapp.com/attachments/921726256481976360/991996923919740949/unknown.png',
            link: 'https://github.com/Yefee8/cloud-frontend'
        },
        {
            name: 'Landing page',
            description:'A landing page made with Vue.js',
            image:'https://cdn.discordapp.com/attachments/921726256481976360/991997801418461224/unknown.png',
            link: 'https://github.com/Yefee8/landingpage'
        },
        {
            name: 'For more!',
            description:'Check out my Github account for more!',
            image:'https://i.gadgets360cdn.com/large/github_twitter_full_1570696775252.jpg',
            link: 'https://github.com/Yefee8'
        },
    ]

    const repoTemplate = (repo: any) => {
        return (
            <div className="border-1 border-primary rounded mr-1 text-center px-8">
                <div className="border-1 border-primary rounded mr-1 text-center px-8">

                    <div className="mb-3">
                        <a href={repo.link} target="_blank" rel="noreferrer">
                            <img src={`${repo.image}`} alt={repo.name} className="w-full h-48" />
                        </a>
                    </div>

                    <div>
                        <h1 className="mb-1 text-primary text-xl" style={{fontFamily:'Nothing You Could Do'}}>{repo.name}</h1>
                        <h4 className="mt-0 mb-3">{repo.description}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className="card">
            <Carousel value={repos} itemTemplate={repoTemplate} orientation="vertical" />
        </div>
    )
}
