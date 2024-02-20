import { EventEmitter } from "events";

export default class Theme extends EventEmitter {
    constructor() {
        super();

        this.theme = "light";

        this.toggleButton = document.querySelector(".toggle-button");
        this.toggleCircle = document.querySelector(".toggle-circle");

        this.toggleButton2 = document.querySelector(".toggle-button-2");
        this.toggleCircle2 = document.querySelector(".toggle-circle-2");

        this.setEventListeners();
    }

    setEventListeners() {
        this.toggleButton.addEventListener("click", () => {
            this.toggleCircle.classList.toggle("slide");
            this.theme = this.theme === "light" ? "dark" : "light";
            document.body.classList.toggle("dark-theme");
            document.body.classList.toggle("light-theme");
            // console.log(this.theme);
            this.emit("switch", this.theme);
        });
        this.toggleButton2.addEventListener("click", () => {

            this.toggleCircle2.classList.toggle("slide");
            var Title = document.getElementsByClassName("section-title-text");
            var FirstTitle = Title[0];
            var SecondTitle = Title[1];
            var ThirdTitle = Title[2];
            var sectiondetailwrapper = document.getElementsByClassName("section-detail-wrapper");
            var firstsectiontextwrapper = sectiondetailwrapper[0].getElementsByClassName("section-text");
            var secondsectiontextwrapper = sectiondetailwrapper[1].getElementsByClassName("section-text");
            var secondsectiontextwrappertitle = sectiondetailwrapper[1].getElementsByClassName("section-heading");
            this.language = this.language === "FR" ? "EN" : "FR";
            if (this.language == "FR") {
                //French
                FirstTitle.textContent = "à propos de moi";
                SecondTitle.textContent = "Mon Travail";
                ThirdTitle.textContent = "Me Contacté";
                firstsectiontextwrapper[0].textContent = "Salut ! 👋 Je m'apelle anthony un développeur web Full-Stack originaire de la Martinique, une île des Caraïbes françaises.";
                firstsectiontextwrapper[1].textContent = "Depuis que je suis jeune, j'ai toujours été passionné par la technologie. Cela a commencé pendant mon enfance en regardant mon père utiliser un ordinateur sur ses genoux et a reproduire ses actions durant son absence, qui c'est poursuivit à l'adolescence en jouant à des jeux qui m'ont orienté vers les sciences informatiques. Et maintenant, nous y sommes, sur l'une de mes premières réalisations dont je suis fier en tant que développeur web ✌️. Bienvenue dans mon portfolio !";
                secondsectiontextwrappertitle[0].textContent = "2022-2023 IT Developer for ENVOL-INNOVATIONS";
                secondsectiontextwrapper[0].textContent = "Développent d’applications web aux besoins des entreprises.";
                secondsectiontextwrapper[1].textContent = "Management et structuration de base de données.";
                secondsectiontextwrapper[2].textContent = "Création et planification de diverse algorithmes d'ont le transfere de données de fichier excel dans une base de données.";
                secondsectiontextwrapper[3].textContent = "Modification et ajustement du design des sites webs.";
                secondsectiontextwrapper[4].textContent = "Création de scripts & Dynamisme des applications.";
            } else if (this.language == "EN") {
                //English
                FirstTitle.textContent = "About Me";
                SecondTitle.textContent = "My Work";
                ThirdTitle.textContent = "Contact Me";
                firstsectiontextwrapper[0].textContent = "Hi there 👋! I'm a Full-Stack web developer from Martinique, a French Caribbean Island.";
                firstsectiontextwrapper[1].textContent = "Since I was young, I’ve always been passionate by technology. It started during my childhood watching my dad using a computer on his lap all the time; then later, as a teenager, by playing games that made me oriented towards computer sciences.And now there we are, on one of my first productions that I’m proud of as a web developer ✌️. Welcome to my portfolio!";
                secondsectiontextwrappertitle[0].textContent = "2022-2023 DEVELOPPEUR INFORMATIQUE chez ENVOL-INNOVATIONS";
                secondsectiontextwrapper[0].textContent = "Developing web applications based on business requirements.";
                secondsectiontextwrapper[1].textContent = "Managing and constructing the front-end and back-end components.";
                secondsectiontextwrapper[2].textContent = "Creating algorithms to facilitate the transfer of data files into databases.";
                secondsectiontextwrapper[3].textContent = "modification & adjustment of website designs";
                secondsectiontextwrapper[4].textContent = "Scripting & Application Dynamism.";
            }
            console.log();
        });
    }

}

