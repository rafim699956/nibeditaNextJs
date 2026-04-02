"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const OurConcernAnimation = () => {
    useGSAP(() => {
        gsap.utils.toArray(".our-concern-item").forEach((item) => {
            gsap.from(item, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 70%",
                    scrub: 1.2
                },
            });
        });
    })
    return null;
};

export default OurConcernAnimation;
