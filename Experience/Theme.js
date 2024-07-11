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
            var projectPrincipalTitle = document.getElementsByClassName("section-heading");
            var sectionTextStart = document.getElementsByClassName("start");
            var sectionText = document.getElementsByClassName("section-text");
            console.log(sectionText);
            this.language = this.language === "EN" ? "FR" : "EN";
            if (this.language == "FR") {
                //French
                FirstTitle.textContent = "à propos de moi";
                SecondTitle.textContent = "Mon Travail";
                ThirdTitle.textContent = "Me Contacté";
                firstsectiontextwrapper[0].textContent = "Salut ! 👋 Je m'apelle anthony un développeur web Full-Stack originaire de la Martinique, une île des Caraïbes françaises.";
                firstsectiontextwrapper[1].textContent = "Depuis que je suis jeune, j'ai toujours été passionné par la technologie. Cela a commencé pendant mon enfance en regardant mon père utiliser un ordinateur sur ses genoux et a reproduire ses actions durant son absence, qui c'est poursuivit à l'adolescence en jouant à des jeux qui m'ont orienté vers les sciences informatiques. Et maintenant, nous y sommes, sur l'une de mes premières réalisations dont je suis fier en tant que développeur web ✌️. Bienvenue dans mon portfolio !";
                secondsectiontextwrappertitle[0].textContent = "2022-2023 DEVELOPPEUR INFORMATIQUE chez ENVOL-INNOVATIONS";
                secondsectiontextwrapper[0].textContent = "Développement d’applications web aux besoins des entreprises.";
                secondsectiontextwrapper[1].textContent = "Management et structuration de base de données.";
                secondsectiontextwrapper[2].textContent = "Création et planification de diverse algorithmes d'ont le transfere de données de fichier excel dans une base de données.";
                secondsectiontextwrapper[3].textContent = "Modification et ajustement du design des sites webs.";
                secondsectiontextwrapper[4].textContent = "Création de scripts & Dynamisme des applications.";
                projectPrincipalTitle[1].textContent = "Projet au qu'elle que j'ai collaborée - Wordpress & php site web";
                projectPrincipalTitle[2].textContent = "Projets Fini / Incomplet";
                projectPrincipalTitle[3].textContent = "OTCNM - Rally de l'heritage - un projet symfony";
                projectPrincipalTitle[4].textContent = "OTCNM - Espace de travail securisée - un projet symfony";
                projectPrincipalTitle[5].textContent = "NBGTuning - site web de vente en ligne - un projet symfony";
                projectPrincipalTitle[6].textContent = "Copy de Airbnb - un projet react/node ( en developpement )";
                sectionTextStart[0].textContent = "La conception de ce site web avait pour but d'apporte de la visibilité et accesibilité pour un évenement se deroulant dans la partie nord de l'île";
                sectionTextStart[1].textContent = "Cette espace de travaille a éte conçu pour facilitier le partage de données a travers l'equipe pour des raison de securité et privé la demonstration de ce projet en detail n'est pas possible";
                sectionTextStart[2].textContent = "Le site web NBGTuning etait une requete de la part d'un proche qui souhaitait developper une surface de vente de ces produit sur internet , malheuresement se projet a éte interrompu";
                sectionTextStart[3].textContent = "La réalisation de ce projet avait pour but de renforcée mon apprentisage de react et node js par la reproduction d'un site web connu et compliqué";
                sectionText[8].textContent = "L'utilisateur etait capable de retrouve les regles de l'évenement, les restaurant , les airbnb & hotels il avait aussi la possibilité de s'enregistrer pour l'évenement , c'est inscriptions etait visible sur l'espace securisée sur l'autre partie du domaine";
                sectionText[10].textContent = "En se connectant l'equipe avait accées a leur données de travail , la posibilité d'effectuer une demande de fourniture ou de jours de congées"
                sectionText[12].innerHTML = 'Pour expérimenter pleinement le site web telecharger & lisé la documentation <a href="public/documentation/nbgtuning_en.txt" download>Ici</a>';
                sectionText[14].innerHTML = 'Pour expérimenter pleinement le site web telecharger & lisé la documentation <a href="public/documentation/nbgtuning_en.txt" download>Ici</a>';
            } else if (this.language == "EN") {
                //English
                FirstTitle.textContent = "About Me";
                SecondTitle.textContent = "My Work";
                ThirdTitle.textContent = "Contact Me";
                firstsectiontextwrapper[0].textContent = "Hi there 👋! I'm a Full-Stack web developer from Martinique, a French Caribbean Island.";
                firstsectiontextwrapper[1].textContent = "Since I was young, I’ve always been passionate by technology. It started during my childhood watching my dad using a computer on his lap all the time; then later, as a teenager, by playing games that made me oriented towards computer sciences.And now there we are, on one of my first productions that I’m proud of as a web developer ✌️. Welcome to my portfolio!";
                secondsectiontextwrappertitle[0].textContent = "2022-2023 IT Developer for ENVOL-INNOVATIONS";
                secondsectiontextwrapper[0].textContent = "Developing web applications based on business requirements.";
                secondsectiontextwrapper[1].textContent = "Managing and constructing the front-end and back-end components.";
                secondsectiontextwrapper[2].textContent = "Creating algorithms to facilitate the transfer of data files into databases.";
                secondsectiontextwrapper[3].textContent = "Modification & adjustment of website designs";
                secondsectiontextwrapper[4].textContent = "Scripting & Application Dynamism.";
                projectPrincipalTitle[1].textContent = "Project i have been able to work on - Wordpress & php website"
                projectPrincipalTitle[2].textContent = "Finished / Unfinished Projects"
                projectPrincipalTitle[3].textContent = "OTCNM - heritage rally - a symfony project"
                projectPrincipalTitle[4].textContent = "OTCNM - Secure workspace - a symfony project"
                projectPrincipalTitle[5].textContent = "NBGTuning - Ecommerce website - a symfony project"
                projectPrincipalTitle[6].textContent = "Copy of Airbnb - a react/node project ( in developpment )"
                sectionTextStart[0].textContent = "The website was made to give visibility and accesibility for a evenment about the culture the north part of the island."
                sectionTextStart[1].textContent = "This workspace was made to facilitate the share of data through the team for privacy & security purpose i cannot show this part of the project in detail."
                sectionTextStart[2].textContent = "The website of nbgtuning was a request from a friend to developp his commerce on internet he was sadly inacheved by some issues."
                sectionTextStart[3].textContent = "This project was made to deepen my learning of react & node js by reproducing a famous & complicated website."
                sectionText[8].textContent = "User was able te retrieve the rules, restaurant , airbnb and hotelsand they could also register to the event , those registration was visable on the securised workspace on a other part of the domain."
                sectionText[10].textContent = "But the team needed to be log in to access of the workspace and through it they was able to access multiple data and request work furniture & days off"
                sectionText[12].innerHTML = 'To fully experience the website please download & read the documentation <a href="public/documentation/nbgtuning_en.txt" download>here</a>';
                sectionText[14].innerHTML = 'To fully experience the website please download & read the documentation <a href="public/documentation/nbgtuning_en.txt" download>here</a>';
            }
            console.log();
        });
    }

}

