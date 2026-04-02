"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactSectionAnimation = () => {
    useGSAP(() => {
        gsap.from(".contact-form", {
            x: -20,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-us-section",
                start: "top 60%",
                end: "bottom 100%",
                scrub: 1.2,
            }
        })
        gsap.from(".contact-info", {
            x: 20,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-us-section",
                start: "top 60%",
                end: "bottom 20%",
                scrub: 1.2,
            }
        })
        gsap.from(".map", {
            y: 20,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-us-section",
                start: "top 60%",
                end: "bottom 100%",
                scrub: 1.2,
            }
        })
    })
    return null;
}

export default ContactSectionAnimation