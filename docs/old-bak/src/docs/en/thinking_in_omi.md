## Thinking in Omi

Omi is based on object-oriented programming, with plugin system and store system, support partial dom diff and update.

Plus, the component is also more single duty, more loosely coupled.

For functional programming, imperative programming and object-oriented programming, we can sum up the following list:

- Imperative programming is well understood, we use loop and if-else condition to control processes, it emphasize the process of execution
- Imperative programming is hardware friendly, easy to run, but hard to design complex program
- Functional programming is all about input and output, not the process of execution
- Functional programming advocates multiple simple execution units into complex operations
- Object-oriented programming uses objects as the basic unit of the program, with more reusability, flexibility, and extensibility

What kind of language is JavaScript? We have `class` in ES6+, so is JavaScript object-oriented language?

JavaScript can pass a function as a argumant, so is JavaScript a functional language?

There are no right answer, it depands on how you use JavaScript.

It's free to chooce, you can use functional programming framework like React, or object-oriented framework like Omi.  

### Functional Programming VS Object-Oriented Programming

In the UI component framework scope, functional programming is represented by React, while Omi belongs to object-oriented programming.

So what are their strengths and weaknesses? The following is a comparison (in fact, functional programming and object-oriented programming comparison):

|    | React        | Omi  |
| ------------- |:-------------:|:-----:|
| Component communication  | ★★★★☆| ★★★★★ |
| Stability    | ★★★★★    |   ★★★★☆ |
| Flexibility  | ★★★★☆| ★★★★★ |
| Scalability | ★★★★☆     |   ★★★★★ |
| Testability | ★★★★★     |   ★★★★☆ |
| File size | ★★★☆☆    |   ★★★★★ |
| Features | ★★★☆☆    |   ★★★★☆ |
| DOM performance | ★★★★★    |   ★★★★☆ |
| Animation performance | ★★★★☆    |   ★★★★★ |
| Abstract complexity | ★★★★☆    |   ★★★★★ |
| Asynchronous programming | ★★★★★    |   ★★★★☆ |

In summary, it is more recommended to use the object-oriented programming to build UI component framework.

<hr/>

### The end. Thanks for reading. [Let's start the Omi journey](https://github.com/AlloyTeam/omi)!
