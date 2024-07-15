import React, { useEffect, useState } from 'react';
import Question from './Question';
import axios from 'axios';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';

const Quiz = () => {
    const [riddles, setriddles] = useState([]);
    const [currentRiddleIndex, setcurrentRiddleIndex] = useState(0);

    //Fetch riddles from API
    const fetchRiddle = async () => {

        try {
            const response = await axios.get('https://api.api-ninjas.com/v1/riddles?limit=20', {
                headers: {
                    'x-Api-Key': 'aATvWgZITykjeg+vHx7fnQ==Z6PtrL3LWSnX1TzF'
                }
            });
            console.log('Response from API: ', response);
            if (response.data && Array.isArray(response.data)) {
                console.log("setridle function executed!!", response.data);
                setriddles(response.data);
            }
            else {
                console.log('Invalid data format:', response.data);
            }
            
        }
        catch (error) {
            console.error('Error fetching riddles', error);
            console.log('Error details:', error.response); 
        }
    };

    useEffect(() => {
        fetchRiddle();
    }, []);

    const handleNextRiddle = () => {
        if (currentRiddleIndex < riddles.length - 1) {
            setcurrentRiddleIndex(currentRiddleIndex + 1);
        }
        else {
            alert('No more riddles available ! ');

            
        }
    };

    return (
        <div style={{background: "#0454a4", padding: "40px 20px"}}>

            {riddles.length > 0 ? (
                <Question
                    questionData={riddles[currentRiddleIndex]}
                    onSelectOption={() => {}}
                    onNextRiddle={handleNextRiddle}
                />
            ) : (
                <div>Loading riddles...</div>
            )}
        </div>
    );
}

export default Quiz;
