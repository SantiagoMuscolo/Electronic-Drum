import { DrumPad } from "./components/DrumPad";
import { DrumPadInterface } from "../types/Drum";
import "./style.css";



const drumPads: DrumPadInterface[] = [
    { keyTrigger: "Q", id: "Heater-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { keyTrigger: "W", id: "Heater-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { keyTrigger: "E", id: "Heater-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { keyTrigger: "A", id: "Heater-4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { keyTrigger: "S", id: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { keyTrigger: "D", id: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { keyTrigger: "Z", id: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { keyTrigger: "X", id: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { keyTrigger: "C", id: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
];



export const Drum: React.FC = () => {

    const renderDrumPads = () => {
        return drumPads.map((drumPad) => (
            <DrumPad key={drumPad.keyTrigger} drumPad={drumPad} onClick={function (): void {
                throw new Error("Function not implemented.");
            } } />
        ));
    };

    return (
        <div id="drum-machine">
            <h1>Play it!</h1>
            {renderDrumPads()}
        </div>
    );
};

