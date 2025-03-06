import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
const start = d6();
function initial(x: number): number {
    let iroll = d6();
    while (iroll === x) {
        iroll = d6();
    }
    if (iroll === x) {
        return d6();
    }
    return iroll;
}

const end = initial(start);
export function TwoDice(): React.JSX.Element {
    const [right, setDie2] = useState<number>(end);
    const [left, setDie] = useState<number>(start);
    // No parameters or return value, because it's a closure
    function Roll(): void {
        // If it's multiple choice make it short and vice versa
        setDie(d6());
    }

    function Roll2(): void {
        // If it's multiple choice make it short and vice versa
        setDie2(d6());
    }

    return (
        <div>
            <p data-testid="left-die">{left}</p>
            <p data-testid="right-die">{right}</p>
            <Button onClick={Roll}>Roll Left</Button>
            <Button onClick={Roll2}>Roll Right</Button>
            <div>
                {left === right ? (
                    left === 1 ? (
                        <span>Lose</span>
                    ) : (
                        <span>Win</span>
                    )
                ) : null}
            </div>
        </div>
    );
}
