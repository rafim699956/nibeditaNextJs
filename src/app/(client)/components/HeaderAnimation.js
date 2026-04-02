"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeaderAnimation = () => {
    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from(".logo ,.header-menu ul li, .header-btn", {
            y: -30,
            opacity: 0,
            stagger: 0.15,
            direction: 1    
        });
    })
    return null;
};

export default HeaderAnimation;
