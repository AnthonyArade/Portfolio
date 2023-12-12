import * as THREE from 'three';

import Experience from "../Experience.js";

import gsap from 'gsap';

import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.ressources = this.experience.ressources;
        this.room = this.ressources.items.room;
        this.actualRoom = this.room.scene;
        this.roomChildren = {};

        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        };

        this.setModel();
        this.onMouseMove();
    }

    setModel() {
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                }))
            }

            // console.log(child);

            if (child.name === "Computer") {
                child.children[4].material = new THREE.MeshBasicMaterial({
                    map: this.ressources.items.screen,
                })
            }

            if (child.name === "Computer") {
                child.children[6].material = new THREE.MeshBasicMaterial({
                    map: this.ressources.items.screen2,
                })
            }

            if (child.name === "Computer") {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: this.ressources.items.screen3,
                })
            }

            if (child.name === "outsidefloor") {
                child.position.x = -8.43066;
                child.position.z = 14.1353;
            }
            // if (child.name === "mailbox" || child.name === "flowers" || child.name === "dirt" || child.name === "lamp" ||
            // child.name === "outsidefloor_first" || child.name === "outsidefloor_second" || child.name === "outsidefloor_third") {
            // child.scale.set(0,0,0);
            // }
            child.scale.set(0,0,0);
            console.log(child.name == "Body")
            if (child.name === "Cube") {
                // child.scale.set(1, 1, 1);
                child.position.set(0, -1, 0);
                child.rotation.y = Math.PI / 4;
            }
            this.roomChildren[child.name.toLowerCase()] = child;
        });

        /* Lights Cloud bottom to right to left */
        this.width = 1.1;
        this.height = 0.1;
        this.intensity = 5;
        this.rectLight1 = new THREE.RectAreaLight(0x30FF11, this.intensity, this.width, this.height);
        this.rectLight1.position.set(15.9, 9.5, -3.3);
        this.rectLight1.rotation.set(0, -44.8, 0);
        this.actualRoom.add(this.rectLight1);

        this.width = 0.4;
        this.height = 0.1;
        this.intensity = 5;
        this.rectLight2 = new THREE.RectAreaLight(0x30FF11, this.intensity, this.width, this.height);
        this.rectLight2.position.set(20, 12.9, 1.3);
        this.rectLight2.rotation.set(0, -44.8, -45);
        this.actualRoom.add(this.rectLight2);

        this.width = 0.4;
        this.height = 0.1;
        this.intensity = 5;
        this.rectLight3 = new THREE.RectAreaLight(0x30FF11, this.intensity, this.width, this.height);
        this.rectLight3.position.set(18, 14.5, -1);
        this.rectLight3.rotation.set(0, -44.8, 0);
        this.actualRoom.add(this.rectLight3);

        this.width = 0.1;
        this.height = 0.1;
        this.intensity = 5;
        this.rectLight4 = new THREE.RectAreaLight(0x30FF11, this.intensity, this.width, this.height);
        this.rectLight4.position.set(17.8, 12.8, -1);
        this.rectLight4.rotation.set(0, -44.8, 0);
        this.actualRoom.add(this.rectLight4);

        this.width = 0.4;
        this.height = 0.1;
        this.intensity = 5;
        this.rectLight5 = new THREE.RectAreaLight(0x30FF11, this.intensity, this.width, this.height);
        this.rectLight5.position.set(15.2, 15.9, -4);
        this.rectLight5.rotation.set(0, -44.8, 0);
        this.actualRoom.add(this.rectLight5);

        this.width = 0.2;
        this.height = 0.1;
        this.intensity = 5;
        this.rectLight6 = new THREE.RectAreaLight(0x30FF11, this.intensity, this.width, this.height);
        this.rectLight6.position.set(13.3, 13.8, -6.5);
        this.rectLight6.rotation.set(0, -44.8, 45);
        this.actualRoom.add(this.rectLight6);

        this.width = 0.2;
        this.height = 0.1;
        this.intensity = 5;
        this.rectLight7 = new THREE.RectAreaLight(0x30FF11, this.intensity, this.width, this.height);
        this.rectLight7.position.set(11.5, 12.5, -8);
        this.rectLight7.rotation.set(0, -44.8, 45);
        this.actualRoom.add(this.rectLight7);
        /* end lights clouds */

        this.roomChildren["rectLight1"] = this.rectLight1;
        this.roomChildren["rectLight2"] = this.rectLight2;
        this.roomChildren["rectLight3"] = this.rectLight3;
        this.roomChildren["rectLight4"] = this.rectLight4;
        this.roomChildren["rectLight5"] = this.rectLight5;
        this.roomChildren["rectLight6"] = this.rectLight6;
        this.roomChildren["rectLight7"] = this.rectLight7;

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.08, 0.08, 0.08);
    }

    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.1;
        });
    }


    resize() {

    }

    update() {
        this.lerp.current = gsap.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.actualRoom.rotation.y = this.lerp.current;

    }

}