import React from 'react';
import { Link } from "react-router-dom";
import "./experience.css";

export default function Entry({jobtitle, where, date, desc, skills}) {
    console.log(jobtitle, where, date, desc);
    return (
        <div className='entryContainer'>
            <div className='date'>
                <p>{date}</p>
            </div>
            <div className='details'>
                <h6>{jobtitle}</h6>
                <p className='company'>{where}</p>
                <p>{desc}</p>
                <div className='pills'>
                    {skills.map((skill) => (
                        <span>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
    }
