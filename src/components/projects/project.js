import React from 'react';
import { Link } from "react-router-dom";
import "./projects.css";

export default function Project({title, img, desc, link, skills}) {
    return (
        <div className='eachProContainer'>
            <div className='proLeft'>
                <img src={require('../../assets/images/' + img + '.png')} className='projectImg' alt='Project' />
            </div>
            <div className='proRight'>
                <h6>{title}</h6>
                <p>{desc}</p>
                {/* <p>{link}</p> */}
                <div className='pills'>
                    {skills.map((skill) => (
                        <span>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
    }
