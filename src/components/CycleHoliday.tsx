import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "FourthofJuly"
    | "StPatricksDay"
    | "Halloween"
    | "Birthday";

// Maps the Old state -> New State
const Alph_TRANSITIONS: Record<Holiday, Holiday> = {
    Birthday: "Christmas",
    Christmas: "FourthofJuly",
    FourthofJuly: "Halloween",
    Halloween: "StPatricksDay",
    StPatricksDay: "Birthday"
};
const Emojis: Record<Holiday, string> = {
    Birthday: "🎉",
    Christmas: "🎄",
    FourthofJuly: "🎆",
    Halloween: "🎃",
    StPatricksDay: "🍀"
};
const Date_TRANSITIONS: Record<Holiday, Holiday> = {
    StPatricksDay: "FourthofJuly",
    FourthofJuly: "Birthday",
    Birthday: "Halloween",
    Halloween: "Christmas",
    Christmas: "StPatricksDay"
};
export function CycleHoliday(): JSX.Element {
    // We have two parts to our State
    const [Holidays, setHolidays] = useState<Holiday>("Birthday");
    //const [DHolidays, setDHolidays] = useState<Holiday>("StPatricksDay");
    //const [driving, setDriving] = useState<boolean>(false);

    // No parameters or return value, because it's a closure
    function AlphchangeHoliday(): void {
        const newColor = Alph_TRANSITIONS[Holidays];
        setHolidays(newColor);
    }
    function DatechangeHoliday(): void {
        const Date = Date_TRANSITIONS[Holidays];
        setHolidays(Date);
    }

    return (
        <div>
            <div>
                <span>
                    Holiday: {Holidays} {Emojis[Holidays]}
                </span>
                <Button onClick={AlphchangeHoliday}>Alphabet</Button>
            </div>
            <div>
                <Button onClick={DatechangeHoliday}>Year</Button>
            </div>
        </div>
    );
}
