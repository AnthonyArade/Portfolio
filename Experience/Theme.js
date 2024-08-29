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
                firstsectiontextwrapper[0].textContent = "Salut ! 👋 Je m'appelle Anthony, un développeur web Full-Stack originaire de la Martinique, une île des Caraïbes françaises.";
                firstsectiontextwrapper[1].textContent = "Depuis que je suis jeune, j'ai toujours été passionné par la technologie. Cela a commencé pendant mon enfance en regardant mon père utiliser un ordinateur sur ses genoux et à reproduire ses actions durant son absence. Cela s'est poursuivi à l'adolescence en jouant à des jeux qui m'ont orienté vers les sciences informatiques. Et maintenant, nous y sommes, sur l'une de mes premières réalisations dont je suis fier en tant que développeur web ✌️. Bienvenue dans mon portfolio !";
                secondsectiontextwrappertitle[0].textContent = "2022-2023 : DÉVELOPPEUR INFORMATIQUE chez ENVOL-INNOVATIONS";
                secondsectiontextwrapper[0].textContent = "Développement d’applications web répondant aux besoins des entreprises.";
                secondsectiontextwrapper[1].textContent = "Gestion et structuration de bases de données.";
                secondsectiontextwrapper[2].textContent = "Création et planification de divers algorithmes, dont le transfert de données de fichiers Excel dans une base de données.";
                secondsectiontextwrapper[3].textContent = "Modification et ajustement du design des sites web.";
                secondsectiontextwrapper[4].textContent = "Création de scripts et dynamisation des applications.";
                projectPrincipalTitle[1].textContent = "Projet auquel j'ai collaboré - Site web WordPress & PHP";
                projectPrincipalTitle[2].textContent = "Projects Fini / Incomplet";
                projectPrincipalTitle[3].textContent = "OTCNM - Rally de l'heritage - un project symfony";
                projectPrincipalTitle[4].textContent = "OTCNM - Espace de travail securisée - un project symfony";
                projectPrincipalTitle[5].textContent = "NBGTuning - site web de vente en ligne - un project symfony";
                projectPrincipalTitle[6].textContent = "Copy de Airbnb - un project react/node ( en developpement )";
                sectionTextStart[0].textContent = "La conception de ce site web avait pour but d'apporter de la visibilité et de l'accessibilité à un événement se déroulant dans la partie nord de l'île.";
                sectionTextStart[1].textContent = "Cet espace de travail a été conçu pour faciliter le partage de données au sein de l’équipe. Pour des raisons de sécurité et de confidentialité, une démonstration détaillée de ce projet n’est pas possible.";
                sectionTextStart[2].textContent = "Le site web NBGTuning était une demande de la part d'un proche qui souhaitait développer une surface de vente pour ses produits sur Internet. Malheureusement, ce projet a été interrompu.";
                sectionTextStart[3].textContent = "La réalisation de ce projet avait pour but de renforcer mon apprentissage de React et Node.js en reproduisant un site web connu et complexe.";
                sectionText[8].textContent = "L'utilisateur était capable de retrouver les règles de l'événement, les restaurants, les Airbnb et les hôtels. Il avait aussi la possibilité de s'enregistrer pour l'événement ; ces inscriptions étaient visibles dans l'espace sécurisé sur une autre partie du domaine.";
                sectionText[10].textContent = "En se connectant, l’équipe avait accès à ses données de travail et la possibilité d’effectuer une demande de fourniture ou de jours de congés."
                sectionText[12].innerHTML = 'Pour experiencer pleinement le site web telecharger & lisé la documentation <a href="public/documentation/nbgtuning_en.txt" download>Ici</a>';
                sectionText[14].innerHTML = 'Pour experiencer pleinement le site web telecharger & lisé la documentation <a href="public/documentation/nbgtuning_en.txt" download>Ici</a>';
            } else if (this.language == "EN") {
                //English
                FirstTitle.textContent = "About Me";
                SecondTitle.textContent = "My Work";
                ThirdTitle.textContent = "Contact Me";
                firstsectiontextwrapper[0].textContent = "Hi there 👋! I'm a Full-Stack web developer from Martinique, a French Caribbean Island.";
                firstsectiontextwrapper[1].textContent = "Since I was young, I’ve always been passionate about technology. It started during my childhood when I watched my dad use a computer on his lap all the time. Later, as a teenager, I was drawn to computer sciences by playing games. And now, here we are, looking at one of my first projects that I’m proud of as a web developer. ✌️ Welcome to my portfolio!";
                secondsectiontextwrappertitle[0].textContent = "2022-2023: IT Developer for ENVOL-INNOVATIONS";
                secondsectiontextwrapper[0].textContent = "Developing web applications based on business requirements.";
                secondsectiontextwrapper[1].textContent = "Managing and constructing front-end and back-end components.";
                secondsectiontextwrapper[2].textContent = "Creating algorithms to facilitate the transfer of data files into databases.";
                secondsectiontextwrapper[3].textContent = "Modifying and adjusting website designs.";
                secondsectiontextwrapper[4].textContent = "Scripting and enhancing application dynamics.";
                projectPrincipalTitle[1].textContent = "Project I have worked on – WordPress & PHP website"
                projectPrincipalTitle[2].textContent = "Finished / Unfinished Projects"
                projectPrincipalTitle[3].textContent = "OTCNM - heritage rally - a symfony project"
                projectPrincipalTitle[4].textContent = "OTCNM - Secure workspace - a symfony project"
                projectPrincipalTitle[5].textContent = "NBGTuning - Ecommerce website - a symfony project"
                projectPrincipalTitle[6].textContent = "Copy of Airbnb - a react/node project ( in developpment )"
                sectionTextStart[0].textContent = "The website was created to provide visibility and accessibility for an event about the culture of the northern part of the island."
                sectionTextStart[1].textContent = "This workspace was created to facilitate the sharing of data within the team. For privacy and security reasons, I cannot show this part of the project in detail."
                sectionTextStart[2].textContent = "The website for NBGTuning was a request from a friend to develop his online business. Unfortunately, it was not completed due to some issues."
                sectionTextStart[3].textContent = "This project was designed to deepen my knowledge of React and Node.js by reproducing a well-known and complex website."
                sectionText[8].textContent = "Users were able to retrieve the rules, restaurants, Airbnb, and hotels. They could also register for the event, and those registrations were visible in the secured workspace on another part of the domain."
                sectionText[10].textContent = "But the team needed to log in to access the workspace. Once logged in, they were able to access various data and request work supplies and days off."
                sectionText[12].innerHTML = 'To fully experience the website please download & read the documentation <a href="public/documentation/nbgtuning_en.txt" download>here</a>';
                sectionText[14].innerHTML = 'To fully experience the website please download & read the documentation <a href="public/documentation/nbgtuning_en.txt" download>here</a>';
            }
            console.log();
        });
    }

}

