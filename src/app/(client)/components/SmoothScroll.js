"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useGSAP } from "@gsap/react";

const SmoothScroll = ({ children }) => {
    useGSAP(() => {
        const lenis = new Lenis({
            duration: 3.4,
            smooth: true,
            smoothWheel: true,
            smoothTouch: false,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    })
    return children;
};

export default SmoothScroll;
