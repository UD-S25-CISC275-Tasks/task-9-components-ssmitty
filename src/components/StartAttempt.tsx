import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    // No parameters or return value, because it's a closure
    function Start(): void {
        setProgress(
            // If it's multiple choice make it short and vice versa
            true
        );
        setAttempt(attempts - 1);
    }
    function Stop(): void {
        setProgress(
            // If it's multiple choice make it short and vice versa
            !progress
        );
    }
    function Mully(): void {
        setAttempt(attempts + 1);
    }

    return (
        <div>
            <p>{attempts}</p>
            <Button onClick={Start} disabled={attempts === 0 || progress}>
                Start Quiz
            </Button>
            <Button onClick={Stop} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={Mully} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
