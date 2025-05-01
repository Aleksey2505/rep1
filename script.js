document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const projectSearch = document.getElementById("project-search");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const modals = document.querySelectorAll(".modal");
    const closeBtns = document.querySelectorAll(".close-btn");
    const scrollTop = document.getElementById("scroll-top");
    const navBtn = document.getElementById("nav-btn");
    const navMenu = document.getElementById("nav-menu");
    const form = document.getElementById("contact-form");
    const totalProjects = document.getElementById("total-projects");
    const visibleProjects = document.getElementById("visible-projects");
    const copyEmailBtn = document.querySelector(".copy-email");
    const projectGrid = document.getElementById("project-grid");
    const timelineGrid = document.getElementById("timeline-grid");
    const customCursor = document.getElementById("custom-cursor");
    const themeToggle = document.getElementById("theme-toggle");
    const langToggle = document.getElementById("lang-toggle");

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Centralized Name
    const userName = "Алексей";
    document.getElementById("header-name").textContent = "Сделанные проекты и реализуемые";
    document.getElementById("hero-name").textContent = userName;
    document.getElementById("terminal-name").textContent = `${userName} - Разработчик`;

    // Language Support
    const translations = {
        ru: {
            "nav-home": "Главная",
            "nav-projects": "Проекты",
            "nav-about": "Обо мне",
            "nav-contact": "Контакты",
            "hero-name": userName,
            "hero-desc": "Привет, я Алексей! Увлекаюсь созданием ИИ, захватывающих игр и полезного программного обеспечения. От нейронных сетей до интерактивных развлечений — я стремлюсь создавать вдохновляющие и запоминающиеся проекты. Буду рад воплотить ваши идеи в реальность!",
            "projects-heading": "Проекты",
            "project-count": "Всего: <span id='total-projects'>20</span> | Показано: <span id='visible-projects'>20</span>",
            "search-placeholder": "Поиск проектов...",
            "filter-all": "Все 🧬",
            "filter-ai": "ИИ 🧠",
            "filter-games": "Игры 🎮",
            "filter-software": "ПО ⚙️",
            "filter-vision": "Зрение 👁️",
            "about-heading": "Обо мне",
            "terminal-identify": "ИДЕНТИФИКАЦИЯ",
            "terminal-name": `${userName} - Разработчик`,
            "terminal-skills": "НАВЫКИ",
            "terminal-creations": "СОЗДАНИЯ",
            "terminal-projects": "20+ проектов",
            "timeline-heading": "Линия жизни",
            "timeline-desc": "Каждый заполненный квадрат — это прожитая неделя с 10 мая 2004 года",
            "contact-heading": "Контакты",
            "contact-resume": "Скачать резюме",
            "contact-copy-email": "Скопировать Email",
            "form-name": "Ваше имя",
            "form-email": "Ваш Email",
            "form-message": "Ваше сообщение",
            "form-submit": "Отправить",
            "error-name": "Имя обязательно",
            "error-email": "Введите корректный email",
            "error-message": "Сообщение обязательно",
            "modal1-title": "Бот для криптовалютного рынка",
            "modal1-desc": "Бот с ИИ для торговли криптовалютой в реальном времени.",
            "modal2-title": "Калькулятор расстояния до визуальных объектов",
            "modal2-desc": "Калькулятор расстояния на основе компьютерного зрения.",
            "modal3-title": "Распознавание жестов",
            "modal3-desc": "Система ИИ для управления с помощью жестов.",
            "modal4-title": "Виджет для перерывов глаз",
            "modal4-desc": "Инструмент для напоминания о перерывах от экрана.",
            "modal5-title": "Клон OSU!",
            "modal5-desc": "Клон ритм-игры, созданный с помощью Pygame.",
            "modal6-title": "Три наперстка",
            "modal6-desc": "Цифровая версия классической игры на удачу.",
            "modal7-title": "Шахматный ИИ",
            "modal7-desc": "ИИ для игры в шахматы с адаптивной сложностью.",
            "modal8-title": "Клон Geometry Dash",
            "modal8-desc": "Динамичная игра-платформер.",
            "modal9-title": "Нейронная сеть NERPA",
            "modal9-desc": "Модель глубокого обучения для обработки текста.",
            "modal10-title": "Калькулятор крыльев",
            "modal10-desc": "Инструмент для аэродинамического анализа крыльев.",
            "modal11-title": "Система управления складом",
            "modal11-desc": "Система управления складскими запасами.",
            "modal12-title": "3D Блокнот",
            "modal12-desc": "Интерактивное приложение для заметок в 3D.",
            "modal13-title": "Бот для регистарции и розыгрыша",
            "modal13-desc": "Бот позволяющий просто зарегестрировать людей на мероприятия.",
            "modal14-title": "Космический шутер",
            "modal14-desc": "Ретро-игра в жанре космического шутера.",
            "modal15-title": "Приложение позволяющее собирать всю доступную информацию с чужого компьютера",
            "modal15-desc": "Информация отправляется через телеграмм бота.",
            "modal16-title": "Мини копия Qgis",
            "modal16-desc": "Эффективное ПО редактирования слоев карт и импорта/экспорта (kml + GeoJson",
            "modal17-title": "Майнер",
            "modal17-desc": "Приложение которое точно выведет из строя ваше устройство",
            "modal18-title": "Копия сони вегас с базовым функционалом",
            "modal18-desc": "также кроме него есть куча других копий приложений как UI, так и по функционалу",
            "modal19-title": "Виртуальная прогулка по городу",
            "modal19-desc": "С использованием управления и панорам Яндекс карт.",
            "modal20-title": "Матричный калькулятор",
            "modal20-desc": "Простой матричный калькулятор",
            "scroll-top": "↑",
            "footer-text": `© <span id="current-year"></span> ${userName}`
        },
        en: {
            "nav-home": "Home",
            "nav-projects": "Projects",
            "nav-about": "About",
            "nav-contact": "Contact",
            "hero-name": "Alexey Kuznetsov",
            "hero-desc": "Hi, I’m Alexey Kuznetsov! A coder crafting AI, games, and software. From neural networks to engaging games, I build experiences that inspire. Let’s create something amazing!",
            "projects-heading": "Projects",
            "project-count": "Total: <span id='total-projects'>20</span> | Visible: <span id='visible-projects'>20</span>",
            "search-placeholder": "Search projects...",
            "filter-all": "All 🧬",
            "filter-ai": "AI 🧠",
            "filter-games": "Games 🎮",
            "filter-software": "Software ⚙️",
            "filter-vision": "Vision 👁️",
            "about-heading": "About",
            "terminal-identify": "IDENTIFY",
            "terminal-name": "Alexey Kuznetsov - Developer",
            "terminal-skills": "SKILLS",
            "terminal-creations": "CREATIONS",
            "terminal-projects": "20+ projects",
            "timeline-heading": "Life Timeline",
            "timeline-desc": "Each filled square represents a week lived since May 10, 2004",
            "contact-heading": "Contact",
            "contact-resume": "Download Resume",
            "contact-copy-email": "Copy Email",
            "form-name": "Your Name",
            "form-email": "Your Email",
            "form-message": "Your Message",
            "form-submit": "Send",
            "error-name": "Name is required",
            "error-email": "Please enter a valid email",
            "error-message": "Message is required",
            "modal1-title": "Crypto Market Bot",
            "modal1-desc": "AI-powered bot for real-time cryptocurrency trading.",
            "modal2-title": "Lens Distance Calculator",
            "modal2-desc": "Distance calculator based on computer vision.",
            "modal3-title": "Gesture Recognition",
            "modal3-desc": "AI system for gesture-based control.",
            "modal4-title": "Eye Break Widget",
            "modal4-desc": "Tool to remind you to take screen breaks.",
            "modal5-title": "OSU! Clone",
            "modal5-desc": "Rhythm game clone built with Pygame.",
            "modal6-title": "Three Cups Game",
            "modal6-desc": "Digital version of the classic guessing game.",
            "modal7-title": "Chess AI",
            "modal7-desc": "AI for playing chess with adaptive difficulty.",
            "modal8-title": "Geometry Dash Clone",
            "modal8-desc": "Dynamic platformer game.",
            "modal9-title": "NERPA Neural Network",
            "modal9-desc": "Deep learning model for text processing.",
            "modal10-title": "Wing Calculator",
            "modal10-desc": "Tool for aerodynamic wing analysis.",
            "modal11-title": "Warehouse Management System",
            "modal11-desc": "System for managing warehouse inventory.",
            "modal12-title": "3D Notepad",
            "modal12-desc": "Interactive 3D note-taking app.",
            "modal13-title": "AI Music Composer",
            "modal13-desc": "AI for generating musical compositions.",
            "modal14-title": "Space Shooter",
            "modal14-desc": "Retro-style space shooter game.",
            "modal15-title": "Face Recognition App",
            "modal15-desc": "Real-time face recognition application.",
            "modal16-title": "Task Planner",
            "modal16-desc": "Efficient task planning software.",
            "modal17-title": "AI Chatbot",
            "modal17-desc": "AI for customer support.",
            "modal18-title": "Puzzle Game",
            "modal18-desc": "Logical puzzle game for all ages.",
            "modal19-title": "Object Detector",
            "modal19-desc": "Real-time object detection system.",
            "modal20-title": "Budget Tracker",
            "modal20-desc": "Software for managing personal finances.",
            "scroll-top": "↑",
            "footer-text": `© <span id="current-year"></span> Alexey Kuznetsov`
        }
    };

    let currentLang = "ru";

    const updateLanguage = () => {
        document.querySelectorAll("[data-lang-key]").forEach(element => {
            const key = element.getAttribute("data-lang-key");
            if (key === "footer-text" || key === "project-count") {
                const total = totalProjects ? totalProjects.textContent : "20";
                const visible = visibleProjects ? visibleProjects.textContent : "20";
                element.innerHTML = translations[currentLang][key];
                if (key === "project-count") {
                    document.getElementById("total-projects").textContent = total;
                    document.getElementById("visible-projects").textContent = visible;
                }
            } else {
                element.textContent = translations[currentLang][key];
            }
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translations[currentLang][key];
            }
        });
        document.documentElement.lang = currentLang;
        langToggle.textContent = currentLang === "ru" ? "EN" : "RU";
        // Update aria-labels for modal triggers
        const modalTriggers = document.querySelectorAll("[data-modal]");
        modalTriggers.forEach(trigger => {
            const modalId = trigger.getAttribute("data-modal");
            const titleKey = `${modalId}-title`;
            const translatedTitle = translations[currentLang][titleKey] || "Project";
            trigger.setAttribute("aria-label", `Open ${translatedTitle} details`);
        });
    };

    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "ru" ? "en" : "ru";
        updateLanguage();
    });

    // Preloader Animation
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 1000);

    // Custom Cursor
    document.addEventListener("mousemove", e => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    const textElements = document.querySelectorAll("p, h1, h2, h3, a, button, span");
    textElements.forEach(el => {
        el.addEventListener("mouseenter", () => customCursor.classList.add("text-hover"));
        el.addEventListener("mouseleave", () => customCursor.classList.remove("text-hover"));
    });

    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("retro-theme");
        themeToggle.textContent = document.body.classList.contains("retro-theme") ? "📺" : "🌙";
    });

    // Navigation Menu
    navBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.toggle("visible");
            }, index * 100);
        });
    });

    // Close Navigation Menu on Link Click
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navLinks.forEach((navLink, index) => {
                setTimeout(() => {
                    navLink.classList.remove("visible");
                }, index * 100);
            });
        });
    });

    // Scroll to Top
    window.addEventListener("scroll", () => {
        scrollTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Life Timeline
    const initLifeTimeline = () => {
        const birthDate = new Date("2004-05-10");
        const today = new Date();
        const weeksLived = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 7));
        const totalWeeks = 90 * 52;

        timelineGrid.innerHTML = ""; // Clear existing cells
        for (let i = 0; i < totalWeeks; i++) {
            const cell = document.createElement("div");
            cell.classList.add("timeline-cell");
            if (i < weeksLived) {
                cell.classList.add("filled");
            }
            const year = Math.floor(i / 52) + 1;
            const week = (i % 52) + 1;
            cell.setAttribute("data-tooltip", `Year ${year}, Week ${week}`);
            timelineGrid.appendChild(cell);
        }
    };

    // Projects Data
    const projects = [
        { id: 1, category: "ai", img: "images/1.png", modal: "modal1" },
        { id: 2, category: "vision", img: "images/2.png", modal: "modal2" },
        { id: 3, category: "ai", img: "images/3.png", modal: "modal3" },
        { id: 4, category: "software", img: "images/4.png", modal: "modal4" },
        { id: 5, category: "game", img: "images/5.png", modal: "modal5" },
        { id: 6, category: "game", img: "images/6.png", modal: "modal6" },
        { id: 7, category: "ai", img: "images/7.png", modal: "modal7" },
        { id: 8, category: "game", img: "images/8.png", modal: "modal8" },
        { id: 9, category: "ai", img: "images/9.png", modal: "modal9" },
        { id: 10, category: "software", img: "images/10.png", modal: "modal10" },
        { id: 11, category: "software", img: "images/11.png", modal: "modal11" },
        { id: 12, category: "software", img: "images/12.png", modal: "modal12" },
        { id: 13, category: "ai", img: "images/13.png", modal: "modal13" },
        { id: 14, category: "game", img: "images/14.png", modal: "modal14" },
        { id: 15, category: "vision", img: "images/15.png", modal: "modal15" },
        { id: 16, category: "software", img: "images/16.png", modal: "modal16" },
        { id: 17, category: "ai", img: "images/17.png", modal: "modal17" },
        { id: 18, category: "game", img: "images/18.png", modal: "modal18" },
        { id: 19, category: "vision", img: "images/19.png", modal: "modal19" },
        { id: 20, category: "software", img: "images/20.png", modal: "modal20" }
    ];

    const categoryIcons = {
        ai: "🧠",
        game: "🎮",
        software: "⚙️",
        vision: "👁️"
    };

    const initProjects = () => {
        // Only initialize if projectGrid is empty to prevent duplicate rendering
        if (projectGrid.children.length > 0) return;

        projects.forEach(project => {
            const titleKey = `${project.modal}-title`;
            const descKey = `${project.modal}-desc`;
            const title = translations[currentLang][titleKey] || "Project";
            const desc = translations[currentLang][descKey] || "Description";
            const card = document.createElement("div");
            card.classList.add("project-card");
            card.setAttribute("data-category", project.category);
            card.innerHTML = `
                <span class="category-icon">${categoryIcons[project.category]}</span>
                <div class="image-wrapper">
                    <img src="${project.img}" alt="${title}" loading="lazy">
                </div>
                <h3>${title}</h3>
                <p>${desc}</p>
                <button class="btn" data-modal="${project.modal}" aria-label="Open ${title} details">Details</button>
            `;
            projectGrid.appendChild(card);
        });

        // Attach modal trigger listeners only once
        const modalTriggers = document.querySelectorAll("[data-modal]");
        modalTriggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                const modalId = trigger.getAttribute("data-modal");
                const modal = document.getElementById(modalId);
                modal.style.display = "flex";
                setTimeout(() => {
                    modal.querySelector(".modal-content").classList.add("active");
                    modal.querySelector("img").classList.add("visible");
                }, 10);
            }, { once: true }); // Prevent duplicate listeners
        });
    };

    const updateProjectCount = () => {
        const visibleCards = document.querySelectorAll(".project-card:not([style*='display: none'])");
        visibleProjects.textContent = visibleCards.length;
        totalProjects.textContent = projects.length;
    };

    projectSearch.addEventListener("input", e => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? "block" : "none";
        });
        updateProjectCount();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            const cards = document.querySelectorAll(".project-card");
            cards.forEach(card => {
                const category = card.getAttribute("data-category");
                card.style.display = filter === "all" || category === filter ? "block" : "none";
            });
            updateProjectCount();
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            modal.querySelector(".modal-content").classList.remove("active");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener("click", e => {
            if (e.target === modal) {
                modal.querySelector(".modal-content").classList.remove("active");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }
        });
    });

    // Contact Form Validation
    form.addEventListener("submit", e => {
        e.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll("input, textarea");

        inputs.forEach(input => {
            input.setAttribute("aria-invalid", "false");
            input.removeAttribute("data-error");

            if (!input.value.trim()) {
                input.setAttribute("aria-invalid", "true");
                input.setAttribute("data-error", translations[currentLang][`error-${input.name}`]);
                isValid = false;
            } else if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                input.setAttribute("aria-invalid", "true");
                input.setAttribute("data-error", translations[currentLang]["error-email"]);
                isValid = false;
            }
        });

        if (isValid) {
            alert(currentLang === "ru" ? "Сообщение отправлено!" : "Message sent successfully!");
            form.reset();
        }
    });

    // Copy Email with Error Handling
    copyEmailBtn.addEventListener("click", () => {
        const email = copyEmailBtn.getAttribute("data-email");
        navigator.clipboard.writeText(email).then(() => {
            copyEmailBtn.textContent = currentLang === "ru" ? "Скопировано!" : "Copied!";
            setTimeout(() => {
                copyEmailBtn.textContent = translations[currentLang]["contact-copy-email"];
            }, 2000);
        }).catch(() => {
            copyEmailBtn.textContent = currentLang === "ru" ? "Ошибка!" : "Error!";
            setTimeout(() => {
                copyEmailBtn.textContent = translations[currentLang]["contact-copy-email"];
            }, 2000);
        });
    });

    // Current Year in Footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Initialize Features
    initLifeTimeline();
    initProjects();
    updateProjectCount();
    updateLanguage();

    // GSAP Scroll Animations for Sections with Reduced Motion Check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
        gsap.from("#projects", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            scrollTrigger: {
                trigger: "#projects",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        gsap.from("#about", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        gsap.from("#contact", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            scrollTrigger: {
                trigger: "#contact",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        // Scroll Trigger for Project Cards
        const projectCards = document.querySelectorAll(".project-card");
        projectCards.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 30,
                duration: 0.5,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });
    }
});