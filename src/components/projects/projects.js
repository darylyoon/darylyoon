import React from 'react';
import { Link } from "react-router-dom";
import "./projects.css";
import { dataportfolio } from "../../content_option";
import Project from "./project";

export default function Projects() {

    return (
        <div className='proContainer' id='pro'>
            {dataportfolio.map((each) => (
                <Project 
                    title={each.title}
                    img={each.img}
                    desc={each.desc}
                    link={each.link}
                    skills={each.skills}
                />
            ))}
        </div>
    );
    }
