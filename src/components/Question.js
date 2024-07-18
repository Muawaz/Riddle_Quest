import React, {useState} from "react";
import './Question.css';

const Question = ({ questionData, onSelectOption, onNextRiddle }) => {
    const {title, question, answer} = questionData;
    const [showAnswer, setShowAnswer] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState(getRandomGradient());

    function getRandomGradient() {
        // Generate random gradient colors
        const gradients = [
            "linear-gradient(to right, #a18cd1, #fbc2eb)",
            "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
            "linear-gradient(to right, #fa709a, #fee140)",
            "linear-gradient(to right, #fccb90, #d57eeb)",
            "linear-gradient(to right, #f2709c, #ff9472)"
        ];
        const randomIndex = Math.floor(Math.random() * gradients.length);
        return gradients[randomIndex];
    }

    if(!questionData) {
        return <div>Loading...</div>;
    }

    const handleShowAnswer = () => {
        setShowAnswer(true);
    };

    const handleNextRiddle = () => {
        setShowAnswer(false);
        setBackgroundStyle(getRandomGradient());
        onNextRiddle();
    }

    return (
        <div className="question-container" style={{ background: backgroundStyle }}>
            <h2 className="center-text">{title}</h2>
            <p className="center-text">{question}</p>

            {!showAnswer ? (
                <button className="show-answer-button" onClick={handleShowAnswer}>Show Answer</button>
            ) : (
                <p className="center-text">Answer: {answer}</p>
            )}
            <button className="next-button" onClick={handleNextRiddle}> Cool, Next ? </button>
        </div>
        
    );
};

export default Question;