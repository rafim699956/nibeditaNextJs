"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);

const FaqAnimation = () => {
    useGSAP(() => {
        gsap.utils.toArray(".faq-item").forEach((faqIetm) => {
            gsap.from(faqIetm, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ".faq-section",
                    start: "top 60%",
                    scrub: 1.2
                },

            })
        })
    })
    return null;
}

export default FaqAnimation