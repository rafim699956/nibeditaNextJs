"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const AnimateSectionTitle = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray(".fade-up");
        elements.forEach((el) => {
            gsap.from(el, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    scrub: 1.2,
                    start: "top 80%",
                },
            });
        });
    })
    return null;
};

export default AnimateSectionTitle;
