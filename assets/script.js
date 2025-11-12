        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-back',
        });

        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        const setInitialTheme = () => {
            const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
            document.body.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                 themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        };

        const toggleTheme = () => {
            const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // New smooth fade/move animation
            themeIcon.style.opacity = '0';
            themeIcon.style.transform = 'translate(-50%, -50%) translateY(-10px)';
            
            setTimeout(() => {
                if (newTheme === 'dark') {
                    themeIcon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    themeIcon.classList.replace('fa-sun', 'fa-moon');
                }
                // Prepare for fade in (move from bottom)
                themeIcon.style.transform = 'translate(-50%, -50%) translateY(10px)';
                // Force browser reflow
                void themeIcon.offsetWidth; 
                // Fade back in
                themeIcon.style.opacity = '1';
                themeIcon.style.transform = 'translate(-50%, -50%) translateY(0)';
            }, 300); // Must match transition duration
        };
        
        setInitialTheme();
        themeToggle.addEventListener('click', toggleTheme);
        
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const menuIcon = mobileMenuButton.querySelector('i');
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                menuIcon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuButton.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
                }
            });
        });

        const scrollTopButton = document.querySelector('.scroll-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) { 
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('load', () => {
            const loader = document.querySelector('.loader');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        });
        
document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.querySelector('.typed-text');

    // 1. Define the array of strings first
    const allStrings = [
        "beautiful interfaces.",
        "simple web apps.",
        "networking masterpieces.",
        "modern digital solutions.",
        "bug-free illusions.",
        "pixels that vibe.",
        "code that dreams.",
        "interfaces with attitude.",
        "404s worth finding.",
        "packets of joy.",
        "scripts that behave (mostly).",
        "buttons you *want* to press.",
        "APIs with soul.",
        "CSS sorcery.",
        "bugs that bite back.",
        "aesthetic command lines.",
        "frontend therapy sessions.",
        "glitches with purpose.",
        "deployments that actually work.",
        "servers that never sleep.",
        "lines of pure chaos.",
        "pixels that smile back.",
        "spaghetti code with style.",
        "animations smoother than butter.",
        "UI that flirts back.",
        "syntax that sings.",
        "aesthetic lag moments.",
        "clouds that don’t rain.",
        "the future, one div at a time.", // <-- Added missing comma here
        "solutions that work on my machine.",
        "perfectly centered divs (eventually).",
        "comments that actually explain the code.",
        "bugs that will later be called features.",
        "TODOs we'll never get to.",
        "legacy code with extra seasoning.",
        "regex strings that haunt dreams.",
        "infinite loops with happy endings.",
        "merge conflicts with philosophical depth.",
        "elegant hacks.",
        "functions longer than a fantasy novel.",
        "variables named 'temp_final_v3_real'.",
        "software patches held together with duct tape.",
        "user stories that make sense.",
        "documentation (tomorrow, probably).",
        "existential crises in JavaScript.",
        "latency that feels intentional.",
        "firewalls that secretly like you.",
        "pings that echo back compliments.",
        "servers with mild stage fright.",
        "DNS lookups with happy results.",
        "TCP handshakes with extra friendliness.",
        "packets that arrive in style.",
        "downtime you can blame on solar flares.",
        "cloud infrastructure on a shoestring budget.",
        "AI that *doesn't* want to end us.",
        "datasets cleaner than my apartment.",
        "models that only hallucinate art.",
        "prompts that understand my feelings.",
        "spreadsheets with emotional baggage.",
        "algorithms with a sense of humor.",
        "robots that pass the butter.",
        "buttons that beg to be clicked.",
        "user journeys with snack breaks.",
        "color palettes stolen from sunsets.",
        "fonts with strong opinions.",
        "drop shadows with real depth.",
        "pop-ups you won't immediately hate.",
        "responsive designs that respond politely.",
        "whitespace that breathes deeply.",
        "gradients with emotional arcs.",
        "micro-interactions that give hugs.",
        "plot twists in Python.",
        "cinematic user experiences.",
        "code sonnets in 14 lines.",
        "bugs with compelling backstories.",
        "database schemas with narrative structure.",
        "jump scares in the console.",
        "APIs with dramatic monologues.",
        "error messages written by sad poets.",
        "CSS that tells a gripping story.",
        "loading spinners with character development.",
        "digital sandwiches.",
        "cyber-ninjas for your data.",
        "electrons with better attitudes.",
        "digital ghosts for the machine.",
        "coffee-fueled keystrokes.",
        "anxiety, but in code form.",
        "the void (but making it pretty).",
        "sophisticated nonsense.",
        "websites that know karate.",
        "artisanal JSON.",
        "gluten-free algorithms.",
        "the sound of one hand coding.",
        "digital zen.",
        "backend logic that defies gravity.",
        "UIs that whisper sweet nothings.",
        "queries that run faster than gossip.",
        "digital masterpieces from pure chaos.",
        "code reviews that feel like therapy.",
        "CI/CD pipelines fueled by hope.",
        "1s and 0s with emotional depth.",
        "chatbots that are *actually* helpful.",
        "VR spaces better than reality.",
        "security patches for your soul.",
        "Docker containers that hold their breath.",
        "Kubernetes clusters with good vibes.",
        "microservices that gossip.",
        "REST APIs that need some rest.",
        "GraphQL queries with existential questions.",
        "loading animations worth the wait.",
        "error messages that apologize profusely.",
        "cookies you don't need to accept.",
        "a metaverse that isn't empty.",
        "5G signals with personality.",
        "JavaScript frameworks that last (maybe).",
        "elegant solutions to problems that don't exist.",
        "commits at 3 AM.",
        "feature creep... but make it art.",
        "unit tests that pass on the first try.",
        "responsive tables that actually work.",
        "'z-index: 9999;' with confidence.",
        "dark modes for bright ideas.",
        "light modes that don't burn retinas.",
        "the perfect 'readme.md'.",
        "spaghetti code with marinara.",
        "logic bombs with glitter."
    ];

    // 2. Shuffle the array in-place (Fisher-Yates algorithm)
    let currentIndex = allStrings.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [allStrings[currentIndex], allStrings[randomIndex]] = [
            allStrings[randomIndex], allStrings[currentIndex]
        ];
    }

    // 3. Now initialize Typed.js with the *shuffled* array
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: allStrings, // Pass the shuffled array here
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
            showCursor: false
        });
    } else if (!typedElement) {
        console.error("Typed.js: '.typed-text' element not found.");
    } else {
        console.error("Typed.js library not loaded.");
    }
});