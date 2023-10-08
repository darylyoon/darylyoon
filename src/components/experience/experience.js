import React from 'react';
import { Link } from "react-router-dom";
import "./experience.css";
import { worktimeline } from "../../content_option";
import Entry from "./entry";

export default function Exp() {

    return (
        <div className='expContainer' id='exp'>
            {worktimeline.map((entry) => (
                <Entry 
                    jobtitle={entry.jobtitle}
                    where={entry.where}
                    date={entry.date}
                    desc={entry.desc}
                    skills={entry.skills}
                />
            ))}
            <div className='download-full'>
            <a href={require('../../assets/documents/resume.pdf')} target='_blank' rel='noopener noreferrer'>
                <p className='download-button'><span className='try'>View Full Resume</span> &#8677;</p>
            </a>
            </div>
        </div>
    );
    }
