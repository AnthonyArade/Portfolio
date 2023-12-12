import * as THREE from 'three';

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Ressources from "./Utils/Ressources.js";
import assets from "./Utils/assets.js";

import Camera from "./Camera.js";
import Theme from "./Theme.js";
import Renderer from "./Renderer.js";
import Preloader from "./Preloader.js";

import World from "./World/World.js";
import Controls from "./World/Controls.js";

export default class Experience {
    static instance;
    constructor(canvas) {
        if(Experience.instance){
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.ressources = new Ressources(assets);
        this.theme = new Theme();
        this.world = new World();
        this.preloader = new Preloader();

        this.time.on("update", () => {
            this.update();
        })

        this.sizes.on("resize", () => {
            this.resize();
        })

        this.preloader.on("enablecontrols", () => {
            this.controls = new Controls();
        })

    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
        this.world.resize();
    }

    update() {
        this.preloader.update();
        this.camera.update();
        this.world.update();
        this.renderer.update();
        if (this.controls) {
            this.controls.update();
        }
    }
}