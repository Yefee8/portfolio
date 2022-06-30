export default function Footer() {
    return (
        <footer className="border-t-2 border-primary w-full pb-24 mt-24">
            <div className="ml-20">
                <h1 className="text-xl ml-2 mt-4 border-primary text-primary border-b-2 flex justify-center items-center"
                    style={{fontFamily: 'Shockwave', width:'83px'}}>Reach me</h1>
                <div className="flex mt-12">
                    <div className="text-secondary-dark text-xl">
                        <a href="https://discord.com/users/420291800905940992"
                           className="mx-2 transition duration-200 hover:text-primary"
                           rel="noreferrer">
                            <i style={{fontSize: '2rem'}} className="pi pi-discord"/>
                        </a>

                        <a href="mailto:findikliyavuzefe@gmail.com"
                           className="mx-2 transition duration-200 hover:text-primary"
                           rel="noreferrer">
                            <i style={{fontSize: '2rem'}} className="pi pi-envelope"/>
                        </a>

                        <a href="https://instagram.com/Yefee8"
                           className="mx-2 transition duration-200 hover:text-primary"
                           rel="noreferrer">
                            <i style={{fontSize: '2rem'}} className="pi pi-instagram"/>
                        </a>

                        <a href="https://github.com/Yefee8"
                           className="mx-2 transition duration-200 hover:text-primary"
                           rel="noreferrer">
                            <i style={{fontSize: '2rem'}} className="pi pi-github"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
