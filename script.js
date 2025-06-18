const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Madrid", "París", "Londres", "Roma"],
        answer: "París"
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Pablo Neruda", "Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar"],
        answer: "Gabriel García Márquez"
    },
    {
        question: "¿Qué planeta es conocido como el planeta rojo?",
        options: ["Venus", "Marte", "Júpiter", "Mercurio"],
        answer: "Marte"
    },
    {
        question: "¿Cuál es la raíz cuadrada de 144?",
        options: ["10", "12", "14", "16"],
        answer: "12"
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Miguel Ángel", "Donatello", "Leonardo da Vinci", "Rafael"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "¿Cuál es el enunciado correcto del Principio de Incertidumbre de Heisenberg?",
        options: ["No se puede conocer la energía y la masa de una partícula al mismo tiempo.","No se puede conocer con precisión la posición y el momento de una partícula simultáneamente.",
         "La energía de un electrón depende de su velocidad.","Las partículas siempre se comportan como ondas."],
        answer: "No se puede conocer con precisión la posición y el momento de una partícula simultáneamente."
    },
    {
        question: "¿Qué filósofo escribió 'Crítica de la razón pura'?",
        options: ["Hegel", "Kant", "Nietzsche", "Descartes"],
        answer: "Kant"
    },
    {
        question: "¿Cuál es la constante de Planck (h) aproximadamente?",
        options: ["6.626 x 10^-34 Js", "9.81 m/s²","3.00 x 10^8 m/s","1.602 x 10^-19 C"],
        answer: "6.626 x 10^-34 Js"
    },
    {
        question: "¿Qué elemento tiene el mayor número atómico?",
        options: ["Uranio", "Plutonio", "Oganesón", "Lawrencio"],
        answer: "Oganesón"
    },
    {
        question: "¿Cuál es el número primo más grande descubierto hasta 2023?",
        options: ["2^82,589,933 − 1","2^31 − 1","1,073,741,823","9,223,372,036,854,775,807"],
        answer: "2^82,589,933 − 1"
    },
    {
        question: "¿Qué autor escribió 'El hombre unidimensional'?",
        options: ["Herbert Marcuse", "Theodor Adorno", "Max Horkheimer", "Karl Marx"],
        answer: "Herbert Marcuse"
    },
    {
        question: "¿Qué proteína es responsable de transportar oxígeno en la sangre?",
        options: ["Insulina", "Hemoglobina", "Queratina", "Actina"],
        answer: "Hemoglobina"
    },
    {
        question: "¿Quién desarrolló la teoría del electromagnetismo unificado?",
        options: ["Maxwell", "Faraday", "Tesla", "Ampère"],
        answer: "Maxwell"
    },
    {
        question: "¿Cuál es la capital de Bután?",
        options: ["Thimphu", "Katmandú", "Daca", "Ulan Bator"],
        answer: "Thimphu"
    },
    {
        question: "¿Qué planeta del Sistema Solar tiene la rotación más lenta?",
        options: ["Venus", "Mercurio", "Neptuno", "Urano"],
        answer: "Venus"
    },
    {
        question: "¿Quién propuso la Hipótesis Gaia?",
        options: ["James Lovelock", "Richard Dawkins", "Lynn Margulis", "Stephen Jay Gould"],
        answer: "James Lovelock"
    },
    {
        question: "¿Qué filósofo dijo 'Dios ha muerto'?",
        options: ["Nietzsche", "Hume", "Kierkegaard", "Heidegger"],
        answer: "Nietzsche"
    },
    {
        question: "¿Cuál es el idioma más hablado en Nigeria?",
        options: ["Igbo", "Yoruba", "Hausa", "Swahili"],
        answer: "Hausa"
    },
    {
        question: "¿Qué científico ganó dos premios Nobel en dos categorías diferentes?",
        options: ["Marie Curie", "Linus Pauling", "Albert Einstein", "Niels Bohr"],
        answer: "Marie Curie"
    },
    {
        question: "¿Qué órgano produce la insulina?",
        options: ["Hígado", "Páncreas", "Riñón", "Bazo"],
        answer: "Páncreas"
    },
    {
        question: "¿Cuál es la estructura más profunda conocida en el océano?",
        options: ["Fosa de Puerto Rico","Fosa de Kermadec","Fosa de Tonga","Fosa de las Marianas"],
        answer: "Fosa de las Marianas"
    },
    {
        question: "¿Qué país tiene más islas en su territorio?",
        options: ["Canadá", "Noruega", "Suecia", "Indonesia"],
        answer: "Suecia"
    },
    {
        question: "¿Qué partícula subatómica tiene carga negativa?",
        options: ["Protón", "Neutrón", "Electrón", "Fotón"],
        answer: "Electrón"
    },
    {
        question: "¿Qué autor escribió 'Ser y Tiempo'?",
        options: ["Heidegger", "Sartre", "Camus", "Kierkegaard"],
        answer: "Heidegger"
    },
    {
        question: "¿Qué especie de árbol vive más años?",
        options: ["Secuoya", "Pino Bristlecone", "Baobab", "Olivo"],
        answer: "Pino Bristlecone"
    }
];

let playerName = "";
let currentQuestion = 0;
let score = 0;
let startTime;

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => location.reload());

function startGame() {
    playerName = document.getElementById("player-name").value.trim();
    if (!playerName) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    shuffleQuestions();
    startTime = Date.now();
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-text").textContent = q.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    document.querySelectorAll("#options button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const endTime = Date.now();
    const totalTime = Math.round((endTime - startTime) / 1000);

    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("score-text").textContent = `¡${playerName}, obtuviste ${score} puntos!`;
    document.getElementById("time-text").textContent = `Tiempo total: ${totalTime} segundos`;
}
