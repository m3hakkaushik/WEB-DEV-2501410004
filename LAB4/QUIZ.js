// Quiz Game - Mehak's JavaScript Assignment
// Simple console-based quiz with prompts and alerts

const quizQuestions = [
    {
        question: "What does www stand for?",
        answer: "world wide web"
    },
    {
        question: "Which is the largest river in the world?",
        answer: "nile"
    },
    {
        question: "What color is the sky?",
        answer: "blue"
    },
    {
        question: "Which animal is known as the 'king of the jungle'? ",
        answer: "lion"
    },
    {
        question: "How many days are in a week?",
        answer: "seven"
    },
    {
        question: "What do bees make?",
        answer: "honey"
    }
];

function runQuiz() {
    let score = 0;
    const totalQuestions = quizQuestions.length;
    
    console.log("🎉 Welcome to Mehak's JavaScript Quiz! 🎉");
    console.log("Answer all questions. Good luck!\n");
    
    // Loop through each question
    for (let i = 0; i < totalQuestions; i++) {
        const currentQuestion = quizQuestions[i];
        
        // Get user input with prompt
        const userAnswer = prompt(`Question ${i + 1}: ${currentQuestion.question}`);
        
        // Normalize input (lowercase + trim spaces)
        const cleanAnswer = userAnswer ? userAnswer.toLowerCase().trim() : "";
        const correctAnswer = currentQuestion.answer.toLowerCase().trim();
        
        // Check answer
        if (cleanAnswer === correctAnswer) {
            score++;
            alert("✅ Correct! Great job!");
        } else {
            alert(`❌ Wrong! The correct answer was: "${currentAnswer}"`);
        }
    }
    
    // Final score display
    const finalScore = Math.round((score / totalQuestions) * 100);
    alert(`🏆 Quiz Complete!\nYour score: ${score}/${totalQuestions} (${finalScore}%)\n\n${finalScore >= 70 ? "🎉 Excellent!" : finalScore >= 50 ? "👍 Good job!" : "📚 Keep practicing!"}`);
    
    console.log(`Final Score: ${score}/${totalQuestions} (${finalScore}%)`);
}

// Start the quiz!
runQuiz();
