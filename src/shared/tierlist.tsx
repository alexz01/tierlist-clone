import React, { useState } from "react";
import Tier, { TierModel } from "./tier";
import { AppButton } from "./button";

export default function TierList() {


    function changeSettings(id: number) {
        console.log('changeSettings', id);
    }

    function moveTierUp(index: number) {
        setTiers(t => {
            t = [...t]
            if (index > 0) {
                [t[index - 1], t[index]] = [t[index], t[index - 1]]
            }
            return t;
        });
    }

    function moveTierDown(index: number) {
        setTiers(t => {
            t = [...t];
            if (index < t.length - 1) {
                t.splice(index + 1, 0, t.splice(index, 1)[0]);
            }
            return t;
        });
    }

    function updateTierLabel({ index, label }) {
        setTiers(trs => {
            trs = [...trs];
            trs[index].label = label
            return trs;
        });
    }

    function addTier() {
        setTiers(t => [
            ...t,
            new TierModel(`${t.length}`, [], {})
        ]);
    }

    function addTierItem(index, item) {

    }

    function removeTierItem(index, item) {

    }

    let [tiers, setTiers] = useState<TierModel[]>([
        //<li key={0} draggable="true" className="border"><Tier /></li>
        new TierModel(`${0}`, [], {})
    ]);


    return (
        <div className="m-10">
            <AppButton label="Add Tier" onClick={addTier}></AppButton>
            <ul className="">
                {tiers.map((t, i) =>
                    <li key={'tier-' + t.label} id={'tier-' + i}>
                        <Tier
                            index={i}
                            label={t.label}
                            items={t.items}
                            settings={t.settings}
                            changeSettings={changeSettings}
                            moveUp={moveTierUp}
                            moveDown={moveTierDown}
                            updateLabel={updateTierLabel}
                            addItem={addTierItem}
                            removeItem={removeTierItem}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}

