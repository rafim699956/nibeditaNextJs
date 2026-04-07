"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const OurConcernAnimation = () => {
    useGSAP(() => {
        gsap.utils.toArray(".our-concern-item").forEach((item) => {
            gsap.fromTo(
                item,
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        scrub: 2,
                    },
                }
            );
        });
    })
    return null;
};

export default OurConcernAnimation;
