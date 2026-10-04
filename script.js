// ==========================================
// 1. MENU MOBILE
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            menu.classList.remove("active");

        });

    });

}

// ==========================================
// 2. ANIMATION DES CARTES DE SERVICES
// ==========================================

const cards = document.querySelectorAll(".service-card");

cards.forEach(function(card, index) {

    setTimeout(function() {

        card.classList.add("show");

    }, index * 200);

});


// ==========================================
// 3. FORMULAIRE DE CONTACT
// ==========================================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

const messageInput = document.getElementById("message");
const messageCounter = document.getElementById("message-counter");


// COMPTEUR DE CARACTÈRES

if (messageInput && messageCounter) {

    messageInput.addEventListener("input", function() {

        const length = messageInput.value.length;

        messageCounter.textContent = length + " / 500";

        messageCounter.className = "";

        if (length >= 500) {

            messageCounter.classList.add("danger");

        } else if (length >= 400) {

            messageCounter.classList.add("warning");

        }

    });

}


// VALIDATION DU FORMULAIRE
if (contactForm && formMessage) {

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // CHAMPS VIDES
        if (name === "" || email === "" || message === "") {

            formMessage.className = "error";

            formMessage.textContent =
                "⚠️ Veuillez remplir tous les champs.";

            return;
        }


        // EMAIL INCORRECT
        if (!email.includes("@") || !email.includes(".")) {

            formMessage.className = "error";

            formMessage.textContent =
                "⚠️ Veuillez entrer une adresse e-mail valide.";

            return;
        }


        // MESSAGE TROP COURT
        if (message.length < 10) {

            formMessage.className = "error";

            formMessage.textContent =
                "⚠️ Le message doit contenir au moins 10 caractères.";

            return;
        }

        // DÉSACTIVER LE BOUTON PENDANT L'ENVOI
const submitButton =
    contactForm.querySelector('button[type="submit"]');

submitButton.disabled = true;
submitButton.textContent = "Envoi...";


try {

    const response = await fetch(contactForm.action, {

        method: "POST",

        body: new FormData(contactForm),

        headers: {
            "Accept": "application/json"
        }

    });


    if (response.ok) {

        formMessage.className = "success";

        formMessage.textContent =
            "✅ Message envoyé avec succès !";

        contactForm.reset();

        if (messageCounter) {
            messageCounter.textContent = "0 / 500";
            messageCounter.className = "";
        }

    } else {

        formMessage.className = "error";

        formMessage.textContent =
            "❌ Une erreur est survenue. Réessayez.";

    }

} catch (error) {

    formMessage.className = "error";

    formMessage.textContent =
        "❌ Impossible d'envoyer le message.";

}


// RÉACTIVER LE BOUTON
submitButton.disabled = false;
submitButton.textContent = "Envoyer";


// FAIRE DISPARAÎTRE LE MESSAGE APRÈS 4 SECONDES
setTimeout(function() {

    formMessage.className = "";
    formMessage.textContent = "";

}, 4000);


        // SUCCÈS
        formMessage.className = "success";

        formMessage.textContent =
            "✅ Message envoyé avec succès !";


        // VIDER LE FORMULAIRE APRÈS L'ENVOI
        contactForm.reset();


        // REMETTRE LE COMPTEUR À 0
        if (messageCounter) {
            messageCounter.textContent = "0 / 500";
        }


        // FAIRE DISPARAÎTRE LE MESSAGE APRÈS 4 SECONDES
        setTimeout(function() {

            formMessage.className = "";
            formMessage.textContent = "";

        }, 4000);

    });

}


// ==========================================
// 4. ANIMATION DES STATISTIQUES AU SCROLL
// ==========================================

const stats = document.querySelector(".stats");
const statNumbers = document.querySelectorAll(".stat-number");

if (stats && statNumbers.length > 0) {

    const observer = new IntersectionObserver(function(entries) {

        if (entries[0].isIntersecting) {

            statNumbers.forEach(function(stat) {

                const target = Number(stat.dataset.target);
                let current = 0;

                const duration = 1500;
                const step = target / (duration / 30);

                const counter = setInterval(function() {

                    current += step;

                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }

                    if (target === 100) {
                        stat.textContent =
                            Math.floor(current) + "%";
                    } else {
                        stat.textContent =
                            Math.floor(current) + "+";
                    }

                }, 30);

            });

            observer.disconnect();
        }

    }, {
        threshold: 0.5
    });

    observer.observe(stats);

}



// ==========================================
// 5. ANIMATION DES TÉMOIGNAGES AU SCROLL
// ==========================================

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

if (testimonialCards.length > 0) {

    const testimonialObserver =
        new IntersectionObserver(function(entries) {

            if (entries[0].isIntersecting) {

                testimonialCards.forEach(function(card, index) {

                    setTimeout(function() {

                        card.classList.add("show");

                    }, index * 200);

                });

                testimonialObserver.disconnect();
            }

        }, {
            threshold: 0.2
        });

    testimonialObserver.observe(
        document.querySelector(".testimonials")
    );
}



// ==========================================
// 6. HEADER AU DÉFILEMENT
// ==========================================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}



// ==========================================
// 7. BOUTON RETOUR EN HAUT
// ==========================================

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}




// ==========================================
// 8. ANIMATION SECTION À PROPOS
// ==========================================

const aboutSection = document.querySelector(".about");

if (aboutSection) {

    const aboutObserver = new IntersectionObserver(function(entries) {

        if (entries[0].isIntersecting) {

            aboutSection.classList.add("show");

            aboutObserver.disconnect();
        }

    }, {
        threshold: 0.2
    });

    aboutObserver.observe(aboutSection);

}