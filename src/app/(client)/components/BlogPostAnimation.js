"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const BlogPostAnimation = () => {
    useGSAP(() => {
        gsap.from(".blog-post", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",

            scrollTrigger: {
                trigger: ".blog-section",
                scroller: "body",
                end: "bottom 50%",
                scrub: 1.2,
            },
        });
    })
    return null;
}
