import * as THREE from 'three';
import Experience from "../Experience.js";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ASScroll from "@ashthornton/asscroll";

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.ressources = this.experience.ressources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        this.room.children.forEach(child => {
            if (child.type === "RectAreaLight") {
                this.rectLight = child;
            }
        })

        this.circleFirst = this.experience.world.floor.circleFirst;
        this.circleSecond = this.experience.world.floor.circleSecond;
        this.circleThird = this.experience.world.floor.circleThird;

        gsap.registerPlugin(ScrollTrigger);

        document.querySelector(".page").style.overflow = "visible";

        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            this.setSmoothScroll();
        }
        this.setScrollTrigger();
    }

    setupASScroll() {
        // https://github.com/ashthornton/asscroll
        const asscroll = new ASScroll({
            ease: 0.1,
            disableRaf: true,
        });

        gsap.ticker.add(asscroll.update);

        ScrollTrigger.defaults({
            scroller: asscroll.containerElement,
        });

        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
            scrollTop(value) {
                if (arguments.length) {
                    asscroll.currentPos = value;
                    return;
                }
                return asscroll.currentPos;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            fixedMarkers: true,
        });

        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);

        requestAnimationFrame(() => {
            asscroll.enable({
                newScrollElements: document.querySelectorAll(
                    ".gsap-marker-start, .gsap-marker-end, [asscroll]"
                ),
            });
        });
        return asscroll;
    }

    setSmoothScroll() {
        this.asscroll = this.setupASScroll();
    }

    setScrollTrigger() {
        ScrollTrigger.matchMedia({
            // desktop
            "(min-width: 969px)": () => {
                // console.log("fired desktop");
                this.room.position.set(0, 0, 0)
                this.room.scale.set(0.08, 0.08, 0.08);
                this.room.children[18], {
                    width: this.room.children[18].width = 1.1,
                    height: this.room.children[18].height = 0.1,
                }
                this.room.children[19], {
                    width: this.room.children[19].width = 0.4,
                    height: this.room.children[19].height = 0.1,
                }
                this.room.children[20], {
                    width: this.room.children[20].width = 0.4,
                    height: this.room.children[20].height = 0.1,
                }
                this.room.children[21], {
                    width: this.room.children[21].width = 0.1,
                    height: this.room.children[21].height = 0.1,
                }
                this.room.children[22], {
                    width: this.room.children[22].width = 0.4,
                    height: this.room.children[22].height = 0.1,
                }
                this.room.children[23], {
                    width: this.room.children[23].width = 0.2,
                    height: this.room.children[23].height = 0.1,
                }
                this.room.children[24], {
                    width: this.room.children[24].width = 0.2,
                    height: this.room.children[24].height = 0.1,
                }
                /* first-section --------- */
                this.firstMoveTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                });
                this.firstMoveTimeline.fromTo(
                    this.room.position,
                    { x: 0, y: 0, z: 0 },
                    {
                        x: () => {
                            return this.sizes.width * 0.0014;
                        },
                    }
                );

                /* second-section --------- */
                this.secondMoveTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                }).to(
                    this.room.position,
                    {
                        x: () => {
                            return 1;
                        },
                        z: () => {
                            return this.sizes.height * 0.0032;
                        },
                    },
                    "same"
                ).to(this.room.scale, {
                    x: 0.285,
                    y: 0.285,
                    z: 0.285,
                }, "same"
                ).to(this.room.children[18], {
                    width: this.room.children[18].width * 4,
                    height: this.room.children[18].height * 4,
                }, "same"
                ).to(this.room.children[19], {
                    width: this.room.children[19].width * 4,
                    height: this.room.children[19].height * 4,
                }, "same"
                ).to(this.room.children[20], {
                    width: this.room.children[20].width * 4,
                    height: this.room.children[20].height * 4,
                }, "same"
                ).to(this.room.children[21], {
                    width: this.room.children[21].width * 4,
                    height: this.room.children[21].height * 4,
                }, "same"
                ).to(this.room.children[22], {
                    width: this.room.children[22].width * 4,
                    height: this.room.children[22].height * 4,
                }, "same"
                ).to(this.room.children[23], {
                    width: this.room.children[23].width * 4,
                    height: this.room.children[23].height * 4,
                }, "same"
                ).to(this.room.children[24], {
                    width: this.room.children[24].width * 4,
                    height: this.room.children[24].height * 4,
                }, "same"
                );
                /* third-section --------- */
                this.thirdMoveTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.camera.OrthographicCamera.position, {
                    y: -2,
                    x: -4.1,
                }, "same").to(this.room.scale, {
                    x: 0.2,
                    y: 0.2,
                    z: 0.2,
                }, "same");
            },


            // Mobile
            "((max-width: 968px)": () => {
                // console.log("fired mobile");
                // Resets
                this.room.scale.set(0.04, 0.04, 0.04);
                this.room.position.set(0, 0, 0);
                this.room.children[18], {
                    width: this.room.children[18].width = 0.55,
                    height: this.room.children[18].height = 0.05,
                }
                this.room.children[19], {
                    width: this.room.children[19].width = 0.2,
                    height: this.room.children[19].height = 0.05,
                }
                this.room.children[20], {
                    width: this.room.children[20].width = 0.2,
                    height: this.room.children[20].height = 0.05,
                }
                this.room.children[21], {
                    width: this.room.children[21].width = 0.1,
                    height: this.room.children[21].height = 0.05,
                }
                this.room.children[22], {
                    width: this.room.children[22].width = 0.2,
                    height: this.room.children[22].height = 0.05,
                }
                this.room.children[23], {
                    width: this.room.children[23].width = 0.1,
                    height: this.room.children[23].height = 0.05,
                }
                this.room.children[24], {
                    width: this.room.children[24].width = 0.1,
                    height: this.room.children[24].height = 0.05,
                }

                /* first-section --------- */
                this.firstMoveTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                }).to(this.room.scale, {
                    x: 0.07,
                    y: 0.07,
                    z: 0.07,
                }, "same").to(this.room.children[18], {
                    width: this.room.children[18].width * 1.5,
                    height: this.room.children[18].height * 1.5,
                }, "same"
                ).to(this.room.children[19], {
                    width: this.room.children[19].width * 1.5,
                    height: this.room.children[19].height * 1.5,
                }, "same"
                ).to(this.room.children[20], {
                    width: this.room.children[20].width * 1.5,
                    height: this.room.children[20].height * 1.5,
                }, "same"
                ).to(this.room.children[21], {
                    width: this.room.children[21].width * 1.5,
                    height: this.room.children[21].height * 1.5,
                }, "same"
                ).to(this.room.children[22], {
                    width: this.room.children[22].width * 1.5,
                    height: this.room.children[22].height * 1.5,
                }, "same"
                ).to(this.room.children[23], {
                    width: this.room.children[23].width * 1.5,
                    height: this.room.children[23].height * 1.5,
                }, "same"
                ).to(this.room.children[24], {
                    width: this.room.children[24].width * 1.5,
                    height: this.room.children[24].height * 1.5,
                }, "same"
                );



                /* second-section --------- */
                this.secondMoveTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                }).to(this.room.scale, {
                    x: 0.15,
                    y: 0.15,
                    z: 0.15,
                }, "same").to(this.room.position, {
                    x: 2,
                }, "same").to(this.room.children[18], {
                    width: this.room.children[18].width * 4,
                    height: this.room.children[18].height * 4,
                }, "same"
                ).to(this.room.children[19], {
                    width: this.room.children[19].width * 4,
                    height: this.room.children[19].height * 4,
                }, "same"
                ).to(this.room.children[20], {
                    width: this.room.children[20].width * 4,
                    height: this.room.children[20].height * 4,
                }, "same"
                ).to(this.room.children[21], {
                    width: this.room.children[21].width * 4,
                    height: this.room.children[21].height * 4,
                }, "same"
                ).to(this.room.children[22], {
                    width: this.room.children[22].width * 4,
                    height: this.room.children[22].height * 4,
                }, "same"
                ).to(this.room.children[23], {
                    width: this.room.children[23].width * 4,
                    height: this.room.children[23].height * 4,
                }, "same"
                ).to(this.room.children[24], {
                    width: this.room.children[24].width * 4,
                    height: this.room.children[24].height * 4,
                }, "same"
                );
                /* third-section --------- */
                this.thirdMoveTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.camera.OrthographicCamera.position, {
                    y: 0,
                    x: 0,
                }, "same").to(this.room.scale, {
                    x: 0.13,
                    y: 0.13,
                    z: 0.13,
                }, "same");
            },

            // all
            all: () => {
                // progress-bar animations
                this.sections = document.querySelectorAll(".section");
                this.sections.forEach((section) => {
                    this.progressWrapper =
                        section.querySelector(".progress-wrapper");
                    this.progressBar = section.querySelector(".progress-bar");

                    if (section.classList.contains("right")) {
                        gsap.to(section, {
                            borderTopLeftRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            },
                        });
                        gsap.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            },
                        });
                    } else {
                        gsap.to(section, {
                            borderTopRightRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            },
                        });
                        gsap.to(section, {
                            borderBottomRightRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            },
                        });
                    }
                    gsap.from(this.progressBar, {
                        scaleY: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.4,
                            pin: this.progressWrapper,
                            pinSpacing: false,
                        },
                    });
                });

                //floor animation
                this.firstCircle = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                }).to(this.circleFirst.scale, {
                    x: 3,
                    y: 3,
                    z: 3,
                });

                // Second section -----------------------------------------
                this.secondCircle = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                })
                    .to(
                        this.circleSecond.scale,
                        {
                            x: 3,
                            y: 3,
                            z: 3,
                        },
                        "same"
                    )
                    .to(
                        this.room.position,
                        {
                            y: 0.7,
                        },
                        "same"
                    );

                // Third section -----------------------------------------
                this.thirdCircle = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                }).to(this.circleThird.scale, {
                    x: 3,
                    y: 3,
                    z: 3,
                });

                // Mini Platform Animations
                this.secondPartTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "center center",
                    },
                });

                this.room.children.forEach(child => {
                    if (child.name === "outsidefloor") {
                        this.first = gsap.to(child.position, {
                            x: -15.0522,
                            z: 20.1923,
                            duration: 0.3,
                        })
                    }
                });

                this.room.children.forEach(child => {
                    if (child.name === "mailbox") {
                        this.second = gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        })
                    }
                });

                this.room.children.forEach(child => {
                    if (child.name === "lamp") {
                        this.third =gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        })
                    }
                });

                this.room.children.forEach(child => {
                    if (child.name === "outsidefloor_first") {
                        this.fourth = gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        })
                    }
                });

                this.room.children.forEach(child => {
                    if (child.name === "outsidefloor_second") {
                        this.fifth = gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        })
                    }
                });

                this.room.children.forEach(child => {
                    if (child.name === "outsidefloor_third") {
                        this.sixth = gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        })
                    }
                });

                this.room.children.forEach(child => {
                    if (child.name === "dirt") {
                        this.seventh = gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        })
                    }
                });

                this.room.children.forEach(child => {
                    if (child.name === "flowers") {
                        this.eighth = gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        })
                    }
                });
                this.secondPartTimeline.add(this.first);
                this.secondPartTimeline.add(this.second,);
                this.secondPartTimeline.add(this.third,);
                this.secondPartTimeline.add(this.fourth, "-=0.2");
                this.secondPartTimeline.add(this.fifth, "-=0.2");
                this.secondPartTimeline.add(this.sixth, "-=0.2");
                this.secondPartTimeline.add(this.seventh, "-=0.2");
                this.secondPartTimeline.add(this.eighth,"-=0.1");
            },
        });
    }

    resize() {
    }

    update() {
    }

}