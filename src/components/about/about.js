import React from 'react';
import { Link } from "react-router-dom";
import "./about.css";
import { introdata } from "../../content_option";

export default function About() {

    // process the data so <br> tags are rendered
    const processed = introdata.description.split('<br>').map((item, i) => {
        //    split item by - and odd indexes are bolded
        const split = item.split('-');
        const bolded = split.map((item, i) => {
            if (i % 2 === 0) {
                return <span>{item}</span>;
            } else {
                return <span className='bolded'>{item}</span>;
            }
        });
        return <p>{bolded}</p>;
    });
    
    
    
    return (
        <div className='aboutContainer' id='about'>
            {processed}
        </div>
    );
    }
