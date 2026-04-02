"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamMemberAnimation = () => {
    useGSAP(() => {
        gsap.from(".team-member-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".team-member-wrapper",
                start: "top 80%",
                scrub: 1.2,
            },
        });
    })
    return null;
};

export default TeamMemberAnimation;
