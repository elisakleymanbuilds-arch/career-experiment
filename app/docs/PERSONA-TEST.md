# Pathly Persona Test

## Persona

A Mexican university student around the middle of their degree. They have several interests and some previous experience with internships, projects or part-time work, but they are still unsure about what direction to take after university. They have access to AI and online career information, but they do not have many professional connections.

## Task

The persona was asked to use Pathly to:

1. Start a real work experiment.
2. Complete the experiment.
3. Submit what they did and the result.
4. Review the simulated AI feedback.
5. Reflect on the experience.
6. Choose another experiment to try.

## Test observations

### Home
The purpose of Pathly was clear. The main action was easy to find.

### Choosing an experiment
The three options were easy to understand. The user could see that the goal was to explore different types of work instead of choosing a career immediately.

### Completing an experiment
The instructions were simple and did not require previous technical knowledge.

### AI feedback
The feedback clearly said it was simulated. It also explained that one experience cannot prove a general ability or predict the future.

### Reflection
The questions helped connect the experience with what the student enjoyed, what was difficult and what they could try next.

### Next experiments
The system gave different options instead of giving one career recommendation. This matched the main idea of Pathly.

## Confusion or friction found

The main issue found during testing was input validation. The experience form originally allowed very long answers without a character limit. This was fixed by adding a 1,000-character limit to the text fields.

After the fix, the same test was repeated in production. The field stopped accepting additional text after the limit.

## Result

The main task could be completed from start to finish. The biggest improvement from the test was adding input limits to make the form more controlled and aligned with the security requirements.

