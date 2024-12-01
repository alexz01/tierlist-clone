import React, { MouseEventHandler, useState } from "react";
import { getRandom } from "../utils";
//import { EditableText } from "./editable-text";

export class TierModel {
    constructor(public label: string, public items: string[], public settings: TierSettingsModel) { }
}

export class TierSettingsModel { }

export default function Tier({ index, label, updateLabel, items, addItem, removeItem, settings, changeSettings, moveUp, moveDown }) {
    let [tierName, setTierName] = useState(label || "some tier");
    let bgColor = () => 'bg-' + getRandom("tw-color");

    const updateText = (event: any) => {
        const newLabel = (event.target as HTMLInputElement).innerText;
        setTierName(newLabel)
        updateLabel({ label: newLabel, index });
        console.log(event.target.innerText, tierName);
    }
    return (
        <div className="flex">
            <div contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={updateText}
                className="border min-w-20 w-20 min-h-20 inline-block text-center content-center">
                {tierName}
            </div>
            <div className="flex flex-wrap border w-full">
                {/*<div className='border bg-red-200 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-300 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-400 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-500 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                <div className='border bg-red-600 font-mono w-20 h-20 break-words'>{getRandom('text')}</div>
                */}
            </div>
            <div className="border min-h-20 min-w-20 flex flex-col">
                <button onClick={() => moveUp(index)}>🔼</button>
                <button onClick={() => changeSettings(index)}>⚙️</button>
                <button onClick={() => moveDown(index)}>🔽</button>
            </div>
        </div>);
}