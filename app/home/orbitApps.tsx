"use client";

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { OrbitingCircles } from './orbiting-circles';

function radiiForWidth(width: number) {
    return {
        inner: width < 640 ? 90 : width < 1024 ? 120 : 150,
        outer: width < 640 ? 140 : width < 1024 ? 180 : 230,
    };
}

const OrbitApps = () => {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        const update = () => setWidth(window.innerWidth);
        update();
        window.addEventListener("resize", update, { passive: true });
        return () => window.removeEventListener("resize", update);
    }, []);

    const { inner, outer } = useMemo(
        () => radiiForWidth(width ?? 1024),
        [width]
    );

    return (
        <div className="relative flex h-[320px] sm:h-[420px] lg:h-[500px] w-full items-center justify-center overflow-hidden">
            {/* Grid background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 opacity-30 sm:opacity-40"
                style={{
                    backgroundImage: `
              linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)
            `,
                    backgroundSize: "28px 28px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                }}
            />

            {/* Center text */}
            <span className="pointer-events-none z-10 whitespace-pre-wrap  bg-[#7B73FF] bg-clip-text text-center text-3xl sm:text-4xl lg:text-5xl font-semibold leading-none text-transparent">
                Opsell
            </span>

            {/* Inner orbit */}
            <OrbitingCircles
                radius={inner}
                duration={20}
                delay={10}
            >
                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                <Image
                        src="/assets/amazon.png"
                        alt="Flipkart"
                        width={84}
                        height={84}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-20 lg:w-20 object-contain"
                    />
                </div>

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/flipkart.png"
                        alt="Flipkart"
                        width={84}
                        height={84}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-20 lg:w-20 object-contain"
                    />
                </div>

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/shopify.png"
                        alt="Flipkart"
                        width={84}
                        height={84}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-20 lg:w-20 object-contain"
                    />
                </div>
            </OrbitingCircles>

            {/* Outer orbit */}
            <OrbitingCircles
                radius={outer}
                duration={20}
                delay={10}
                reverse
            >
                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/ajio.png"
                        alt="Ajio"
                        width={84}
                        height={84}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-20 lg:w-20 object-contain"
                    />
                </div>

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/zepto.png"
                        alt="Zepto"
                        width={100}
                        height={100}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-24 lg:w-24 object-contain"
                    />
                </div>

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/blinkit.png"
                        alt="Blinkit"
                        width={100}
                        height={100}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-24 lg:w-24 object-contain"
                    />
                </div>

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/meesho1.png"
                        alt="Meesho"
                        width={88}
                        height={88}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-20 lg:w-20 object-contain"
                    />
                </div>

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/myntra.png"
                        alt="Myntra"
                        width={88}
                        height={88}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-20 lg:w-20 object-contain"
                    />
                </div>

                <div className="flex h-14 w-14 sm:h-20 sm:w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl">
                    <Image
                        src="/assets/jiomart.png"
                        alt="Myntra"
                        width={88}
                        height={88}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-20 lg:w-20 object-contain"
                    />
                </div>
            </OrbitingCircles>
        </div>
    );
};


export default OrbitApps;
