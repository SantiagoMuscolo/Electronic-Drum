import { Howl } from "howler";
import { useEffect, useState } from "react";
import { DrumPadInterface } from "../../types/Drum";

export const DrumPad: React.FC<{ drumPad: DrumPadInterface; onClick: () => void }> = ({ drumPad }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const sound = new Howl({ src: [drumPad.url] });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toUpperCase() === drumPad.keyTrigger) {
                playSound();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const playSound = () => {
        sound.stop();
        sound.play();
        setIsPlaying(true);
        setTimeout(() => {
            setIsPlaying(false);
        }, 100);
    };

    return (
        <div className={`drum-pad ${isPlaying ? "active" : ""}`} id={drumPad.id} onClick={playSound}>
            <div className="drum-pad-key">{drumPad.keyTrigger}</div>
            <audio className="clip" id={drumPad.keyTrigger} src={drumPad.url}></audio>
        </div>
    );
};