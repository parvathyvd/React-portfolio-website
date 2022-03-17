import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineDribbbleSquare} from 'react-icons/ai';

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/" target='_blank'><BsGithub/></a>
            <a href="https://dribble.com/" target='_blank'><AiOutlineDribbbleSquare/></a>
        </div>
    );
};

export default HeaderSocial;