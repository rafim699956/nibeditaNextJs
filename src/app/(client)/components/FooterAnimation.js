"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterAnimation = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".footer-left, .our-service, .quick-link, .company", {
            y: -40,
            opacity: 0,
            direction: 2,
            stagger: 1,
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 50%",
            },
        });
    })
    return null;
};

export default FooterAnimation;
