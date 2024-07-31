import React, { useState } from 'react'
import './PartTwo.css'
import img from '../../admin.jpg'


const TogglePartTwo = () => {

    const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
    const [openQuestions, setOpenQuestions] = useState([]);

    const toggleAboutUs = () => {
        setIsAboutUsOpen(!isAboutUsOpen);
    };

    const toggleQuestion = (index) => {
        if (openQuestions.includes(index)) {
            setOpenQuestions(openQuestions.filter(q => q !== index));
        } else {
            setOpenQuestions([...openQuestions, index]);
        }
    };

    const questions = [
        {
            title: "How does Parkname separate itself from other domain name parking companies?",
            content: "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio."
        },
        {
            title: "Is Parkname Parking actually free?",
            content: "Yes, Parkname offers a free tier for domain parking with limited features. You can upgrade to a premium plan for additional benefits."
        },
        {
            title: "What do you do?",
            content: "We provide domain name parking and monetization services to help you generate revenue from your unused domains."
        },
        {
            title: "When was Parkname first founded?",
            content: "Parkname was founded in 2010 to provide innovative solutions for domain name monetization."
        }
    ];

    return (
        <div className='toggle-two'>
            <div onClick={toggleAboutUs} className="toggle-header">
                <div className="header-content">
                    <img src={img} alt="About Us" className="icon" />
                    <div>
                        <div>About Us</div>
                        <div>4 articles in this Topic</div>
                    </div>
                </div>
                <span>{isAboutUsOpen ? '▲' : '▼'}</span>
            </div>
            {isAboutUsOpen && (
                <div className="questions-container">
                    {questions.map((question, index) => (
                        <div key={index}>
                            <div onClick={() => toggleQuestion(index)} className="question-header">
                                {question.title} <span>{openQuestions.includes(index) ? '▲' : '▼'}</span>
                            </div>
                            {openQuestions.includes(index) && (
                                <div className="question-content">
                                    {question.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TogglePartTwo