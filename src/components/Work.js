
const WorkBlock = ({title, description, tech}) => {
    return (
        <div className="bg-paper relative p-8">
            <i className="bx bx-right-arrow-alt text-4xl absolute top-0 right-0 -rotate-45"></i>
            <h2 className="text-vw-sm leading-tight font-semibold text-off-black">{title}</h2>
            <p className="text-body text-off-black py-8">{description}</p>
            <p className="absolute bottom-3 left-8 text-body text-xs text-grey-40">{tech}</p>
        </div>
    )
}

export default function Work() {
    return (
        <div className="bg-off-black py-36 text-sand">
            <h1 className="text-center text-vw-xl font-semibold">Work</h1>
            <div className="container mx-auto my-10">
                <div className="w-full grid grid-cols-3 grid-flow-row gap-4">
                    <WorkBlock 
                        title="Backflip Mobile" 
                        description="Real Estate Investing made simple mobile apps for iOS and Android"
                        tech="SwiftUI, Kotlin, Python, AWS"
                    />
                    <WorkBlock 
                        title="RE/MAX" 
                        description="A comprehensive ground up custom real estate platform, from web to mobile. We built a suite of tools for agents, brokers, and consumers."
                        tech="VueJS, Laravel, Swift, Kotlin, GraphQL, AWS"
                    />
                    <WorkBlock 
                        title="MyOpenDoor" 
                        description="Open House contact management app for iOS"
                        tech="Swift, AWS"
                    />
                    <WorkBlock 
                        title="ENCON" 
                        description="Conferance and event management platform for iOS"
                        tech="Swift, AWS"
                    />
                    <WorkBlock 
                        title="MyRealTour" 
                        description="Open house property tour app utilizing AR and bluetooth beacons to guide users through properties"
                        tech="Swift, AWS"
                    />
                    <WorkBlock 
                        title="Enterprise Network" 
                        description="The booj independent Real Estate broker platform"
                        tech="Smarty, Laravel, Python, Swift, Kotlin, AWS"
                    />
                </div>
            </div>
        </div>
    )
}