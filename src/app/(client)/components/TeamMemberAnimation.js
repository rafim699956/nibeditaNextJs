"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamMemberAnimation = () => {
    useGSAP(() => {
        gsap.from(".team-member-item", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,

            scrollTrigger: {
                trigger: ".team-member-item",
                start: "top 80%",
                scrub: 0.2,
            },
        });
    })
    return null;
};

export default TeamMemberAnimation;
