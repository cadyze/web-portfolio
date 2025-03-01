import ASCIIText from "@/components/ASCIIText/ASCIIText";
import { SlideTabs } from "../../components/SlideTabs";
import SplitText from "../../components/SplitText";
import TiltedCard from "@/components/TiltedCard";

const Projects = () => {
    return (
        <div>
            <div className="flex flex-col space-y-4 p-4">
                <SplitText
                    textAlign='center'
                    text="Projects"
                    className="text-9xl text-center block overflow-hidden whitespace-nowrap font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeInCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
                <div className="h-100">
                    <SlideTabs></SlideTabs>
                </div>
            </div>

            {/* ADDING COMPONENTS */}
            <div>
                <TiltedCardGrid/>
            </div>
        </div>
    );
};

const TiltedCardGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 p-6 ml-5 mr-5">
            <ProjectCard imageSrc="/game-thumbnails/dice-traveler-preview.gif" altText="Dice Traveler" captionText="Game" />
            <ProjectCard imageSrc="/game-thumbnails/dice-traveler-preview.gif" altText="Dice Traveler" captionText="Dice Traveler" />
            <ProjectCard imageSrc="/game-thumbnails/dice-traveler-preview.gif" altText="Dice Traveler" captionText="Dice Traveler" />
            <ProjectCard imageSrc="/game-thumbnails/dice-traveler-preview.gif" altText="Dice Traveler" captionText="Dice Traveler" />
            <ProjectCard imageSrc="/game-thumbnails/dice-traveler-preview.gif" altText="Dice Traveler" captionText="Dice Traveler" />

        </div>
    );
};

const ProjectCard = ({ imageSrc, altText, captionText }) => {
    return (
        <div>
            <TiltedCard
                imageSrc={imageSrc}
                altText={altText}
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                captionText={altText}
                displayOverlayContent={true}
                overlayContent={
                    <div className="bg-black bg-opacity-50 rounded-xl p-2 ml-5 mt-5">
                        <p className="text-white">{captionText}</p>
                    </div>
                }
            />
        </div>
    );
};

export default Projects;