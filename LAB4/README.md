# Mehak's JavaScript Quiz Game

## Project Title & Theme
Mehak's JavaScript Quiz Game – a simple console-based quiz that asks general knowledge questions using JavaScript prompts and alerts.

## THE FINAL OUTPUT:

<img width="1467" height="876" alt="Screenshot 2025-11-29 at 12 45 39 AM" src="https://github.com/user-attachments/assets/10dccd5c-f2ce-421c-893e-d0d161db11db" />
<img width="772" height="401" alt="Screenshot 2025-11-29 at 12 46 08 AM" src="https://github.com/user-attachments/assets/01931ff9-66a8-4fc5-99d1-8f67de903f89" />
<img width="438" height="202" alt="Screenshot 2025-11-29 at 12 46 39 AM" src="https://github.com/user-attachments/assets/c4cf7fa3-9797-43b9-a358-9fffb93f714d" />



## Sections Implemented
- Question bank stored in an array of objects, each with a `question` and `answer` property.
- `runQuiz()` function that:
  - Greets the user in the console and explains the quiz.
  - Loops through each question, shows it with `prompt()`, and normalizes the user’s input.
  - Compares the user’s answer with the correct one, updates the score, and shows correct/wrong alerts.
- Final score calculation that converts the score into a percentage and shows a summary message with performance feedback using emojis.
- Console log at the end to print the final score in the developer console for reference.

## Breakpoints Used & Main Layout / Logic Techniques
This is a JavaScript-only console/alert-based quiz, so there are no visual CSS breakpoints.
Main implementation techniques:
- Use of an array of question objects to keep questions and answers organized.
- For loop to iterate through all questions.
- String normalization with `toLowerCase()` and `trim()` to handle different user input formats.
- Basic input validation that detects when the user cancels a prompt and skips that question.
- Percentage score calculation using `Math.round()` and conditional (ternary) operators to show different feedback messages based on the final score.

## How to Open and Run Locally
1. Create a folder on your computer (for example, `mehak-quiz`).
2. Inside the folder, create a file named `quiz.js` and paste the quiz code into it.
3. Create a basic HTML file (for example, `index.html`) and include the script:
