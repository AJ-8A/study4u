const lessons = [
  {
    title: "HTML Page Structure",
    subject: "HTML",
    level: "Beginner",
    icon: "🌐",
    color: "blue",
    description: "Understand what HTML is and how a webpage is structured.",
    content: {
      learn: `HTML means HyperText Markup Language. It is the language used to create the structure of a webpage.

HTML is not a programming language. It uses elements called tags to tell the browser what each part of the page means.

A basic HTML document contains:
• <!DOCTYPE html> — tells the browser to use modern HTML.
• <html> — the root element of the page.
• <head> — contains page information that is not shown directly.
• <title> — sets the browser tab title.
• <body> — contains everything visible on the webpage.`,
      example: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to StudyHub</h1>
    <p>I am learning HTML.</p>
  </body>
</html>`,
      practice: "Create an HTML file with a title, one heading, and one paragraph.",
      quiz: "Which HTML tag contains the visible content of a webpage?",
      answer: "<body>"
    }
  },
  {
    title: "HTML Text Tags",
    subject: "HTML",
    level: "Beginner",
    icon: "📝",
    color: "blue",
    description: "Learn the most useful tags for headings, paragraphs, and text.",
    content: {
      learn: `HTML has several tags for displaying text:

• <h1> — the most important and largest heading. Use only one main <h1> on a page.
• <h2> — a second-level heading.
• <h3> — a heading inside an <h2> section.
• <h4>, <h5>, and <h6> — smaller heading levels.
• <p> — creates a paragraph.
• <strong> — shows important text, usually bold.
• <em> — gives text emphasis, usually italic.
• <br> — moves text to a new line.
• <hr> — creates a thematic horizontal line.

Headings should be used in order to make the page easy to understand.`,
      example: `<h1>Learn HTML</h1>
<h2>Text Elements</h2>
<p>HTML gives meaning to webpage content.</p>
<p><strong>Important:</strong> Practice every day.</p>
<p><em>Small steps create progress.</em></p>
<hr>
<p>First line<br>Second line</p>`,
      practice: "Create a page with one h1, two h2 headings, three paragraphs, strong text, and emphasized text.",
      quiz: "Which tag creates a paragraph?",
      answer: "<p>"
    }
  },
  {
    title: "HTML Links and Images",
    subject: "HTML",
    level: "Beginner",
    icon: "🔗",
    color: "blue",
    description: "Add links and images to make pages useful and visual.",
    content: {
      learn: `Use these tags for links and images:

• <a> — creates a link. The href attribute contains the destination.
• target="_blank" — opens a link in a new tab.
• <img> — displays an image.
• src — tells the browser where the image is located.
• alt — describes the image for accessibility and when it cannot load.
• width and height — control the displayed image size.

The <img> tag does not need a closing tag.`,
      example: `<a href="https://example.com">Visit the website</a>

<img
  src="study-image.jpg"
  alt="A student studying at a desk"
  width="300"
>`,
      practice: "Add one link and one image. Give the image useful alternative text.",
      quiz: "Which attribute describes an image for screen readers?",
      answer: "alt"
    }
  },
  {
    title: "HTML Lists and Containers",
    subject: "HTML",
    level: "Beginner",
    icon: "📋",
    color: "blue",
    description: "Organize information with lists and meaningful containers.",
    content: {
      learn: `HTML list and container tags include:

• <ul> — creates an unordered list with bullet points.
• <ol> — creates an ordered list with numbers.
• <li> — creates one item inside a list.
• <div> — a general block container.
• <span> — a small inline container for part of a line.
• <section> — groups related content.
• <article> — represents independent content.
• <header> — introductory content for a page or section.
• <footer> — ending information for a page or section.

Meaningful tags make your page easier for browsers, search engines, and users to understand.`,
      example: `<section>
  <h2>Things to Learn</h2>
  <ul>
    <li>HTML tags</li>
    <li>CSS styles</li>
    <li>JavaScript logic</li>
  </ul>
</section>

<article>
  <h2>Study Tip</h2>
  <p>Practice one small topic at a time.</p>
</article>`,
      practice: "Create a section containing an ordered list of your three learning goals.",
      quiz: "Which tag creates a numbered list?",
      answer: "<ol>"
    }
  },
  {
    title: "HTML Forms and Buttons",
    subject: "HTML",
    level: "Beginner",
    icon: "🧾",
    color: "blue",
    description: "Collect information with labels, inputs, forms, and buttons.",
    content: {
      learn: `Forms allow users to enter information:

• <form> — wraps controls that collect user data.
• <label> — names an input and improves accessibility.
• <input> — creates a field for user input.
• type="text" — accepts normal text.
• type="email" — accepts an email address.
• type="password" — hides typed characters.
• type="checkbox" — creates a tick box.
• <textarea> — creates a larger text area.
• <select> and <option> — create a dropdown list.
• <button> — creates a clickable button.
• required — makes a field mandatory.`,
      example: `<form>
  <label for="name">Your name</label>
  <input id="name" type="text" required>

  <label for="message">Message</label>
  <textarea id="message"></textarea>

  <button type="submit">Send</button>
</form>`,
      practice: "Build a feedback form with a name field, email field, message area, and submit button.",
      quiz: "Which attribute connects a label to an input?",
      answer: "The label's for attribute matches the input's id."
    }
  },
  {
    title: "CSS Foundations",
    subject: "CSS",
    level: "Novice",
    icon: "🎨",
    color: "purple",
    description: "Style HTML with selectors, properties, colors, and spacing.",
    content: {
      learn: "CSS controls the appearance of HTML. A selector chooses an element, a property names the style, and a value defines the result. Common properties include color, background, font-size, margin, padding, and border.",
      example: `body {
  font-family: Arial, sans-serif;
  background: #f4f7fb;
}

h1 {
  color: #5964e8;
  margin-bottom: 16px;
}`,
      practice: "Style a card with a background color, padding, rounded corners, and a shadow.",
      quiz: "Which CSS property changes the text color?",
      answer: "color"
    }
  },
  {
    title: "CSS Layout",
    subject: "CSS",
    level: "Intermediate",
    icon: "📐",
    color: "purple",
    description: "Arrange content using Flexbox, Grid, and responsive rules.",
    content: {
      learn: "Flexbox arranges items in a row or column. CSS Grid creates rows and columns. Media queries change styles for different screen sizes.",
      example: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`,
      practice: "Create three cards that become one column on a mobile screen.",
      quiz: "Which CSS feature changes styles based on screen size?",
      answer: "A media query"
    }
  },
  {
    title: "JavaScript Fundamentals",
    subject: "JavaScript",
    level: "Advanced",
    icon: "⚡",
    color: "orange",
    description: "Use variables, functions, conditions, and events.",
    content: {
      learn: "JavaScript adds behavior to webpages. Variables store data, functions hold reusable actions, conditions make decisions, and events respond to user actions.",
      example: `const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("You clicked the button!");
});`,
      practice: "Create a button that changes a paragraph when the user clicks it.",
      quiz: "Which method listens for a click event?",
      answer: "addEventListener"
    }
  },
  {
    title: "DOM and Web Storage",
    subject: "JavaScript",
    level: "Expert",
    icon: "💾",
    color: "orange",
    description: "Change webpage elements and save data in the browser.",
    content: {
      learn: "The DOM is the browser's object representation of an HTML page. JavaScript can select elements, change their text, change classes, and respond to events. localStorage saves small amounts of data between visits.",
      example: `const heading = document.querySelector("h1");
heading.textContent = "Progress saved!";

localStorage.setItem("completed", "true");`,
      practice: "Save a user's preferred theme and restore it when the page loads.",
      quiz: "Which browser feature stores data between visits?",
      answer: "localStorage"
    }
  },
  {
    title: "Accessible Web Design",
    subject: "Design",
    level: "Master",
    icon: "♿",
    color: "pink",
    description: "Build websites that are clear and usable for everyone.",
    content: {
      learn: "Accessible websites use semantic HTML, useful alt text, clear labels, keyboard-friendly controls, readable contrast, visible focus states, and logical heading order.",
      example: `<label for="email">Email address</label>
<input id="email" type="email" aria-describedby="emailHelp">
<small id="emailHelp">We will never share your email.</small>`,
      practice: "Review a form and improve its labels, keyboard use, contrast, and error messages.",
      quiz: "Why is alt text important?",
      answer: "It explains an image to users who cannot see it."
    }
  },
  {
    title: "Project Architecture",
    subject: "Programming",
    level: "Master",
    icon: "💻",
    color: "dark",
    description: "Organize a larger project into clear, reusable parts.",
    content: {
      learn: "A maintainable project separates data, interface rendering, user actions, and storage. Small focused functions are easier to test and fix than one very large function.",
      example: `data.js  → lesson data
ui.js    → display cards and popups
app.js   → clicks and user actions
store.js → save and load progress`,
      practice: "Plan a small app using separate sections for data, UI, events, and storage.",
      quiz: "What is one benefit of separating code into modules?",
      answer: "The code becomes easier to understand, test, and maintain."
    }
  },
  {
    title: "Complete Web Project.",
    subject: "Programming",
    level: "Grandmaster",
    icon: "🏆",
    color: "green",
    description: "Combine HTML, CSS, JavaScript, design, and testing.",
    content: {
      learn: "A professional web project combines semantic HTML, responsive CSS, JavaScript behavior, accessible design, saved data, validation, and testing. The development cycle is plan, build, test, improve, and publish.",
      example: `Plan → Build → Test → Improve

HTML       = structure
CSS        = appearance
JavaScript = behavior
Storage    = saved progress
Testing    = fewer bugs`,
      practice: "Design and build a small learning app with lessons, progress tracking, and a final quiz.",
      quiz: "What should you do before publishing a web project?",
      answer: "Test it on different screens, fix errors, and check accessibility."
    }
  },

  {
    title: "Python Fundamentals",
    subject: "Python",
    level: "Beginner",
    icon: "🐍",
    color: "green",
    description: "Learn variables, types, input, output, and basic Python syntax.",
    content: {
      learn: "Python is a beginner-friendly programming language. Variables store values, strings hold text, numbers represent quantities, and input() reads user input. Use print() to display results.",
      example: 'name = input("Your name: ")\nprint("Hello,", name)',
      practice: "Ask the user for their name and age, then print a friendly introduction.",
      quiz: "Which Python function displays text?",
      answer: "print()"
    }
  },
  {
    title: "Python Conditions",
    subject: "Python",
    level: "Novice",
    icon: "🔀",
    color: "green",
    description: "Make decisions with if, elif, and else.",
    content: {
      learn: "Conditional statements let a program choose what to do. if checks a condition, elif checks another possibility, and else handles everything that remains.",
      example: 'score = 72\nif score >= 90:\n    print("Excellent")\nelif score >= 60:\n    print("Passed")\nelse:\n    print("Keep practicing")',
      practice: "Write a program that checks whether a number is positive, negative, or zero.",
      quiz: "Which keyword handles the fallback branch?",
      answer: "else"
    }
  },
  {
    title: "Python Loops",
    subject: "Python",
    level: "Intermediate",
    icon: "🔁",
    color: "green",
    description: "Repeat work efficiently with for and while loops.",
    content: {
      learn: "Loops repeat instructions. A for loop is useful when iterating through a sequence or a known range. A while loop repeats while a condition remains true. Avoid accidental infinite loops.",
      example: 'for number in range(1, 6):\n    print(number)',
      practice: "Print the numbers from 1 to 20 and calculate their total.",
      quiz: "Which loop is commonly used with range()?",
      answer: "for"
    }
  },
  {
    title: "Python Functions",
    subject: "Python",
    level: "Advanced",
    icon: "🧩",
    color: "green",
    description: "Build reusable logic with parameters and return values.",
    content: {
      learn: "Functions package reusable behavior. Parameters receive input and return sends a result back to the caller. Good functions usually have one clear responsibility.",
      example: 'def add(a, b):\n    return a + b\n\nresult = add(4, 7)',
      practice: "Create a function that receives a list of numbers and returns the largest value.",
      quiz: "Which keyword creates a function in Python?",
      answer: "def"
    }
  },
  {
    title: "Git and GitHub Basics",
    subject: "Tools",
    level: "Beginner",
    icon: "🌿",
    color: "dark",
    description: "Track code changes and collaborate with repositories.",
    content: {
      learn: "Git is a version-control system. A repository stores project history. Common commands include git status, git add, git commit, git pull, and git push. GitHub hosts repositories and supports collaboration.",
      example: 'git status\ngit add .\ngit commit -m "Update lesson"\ngit push',
      practice: "Create a small repository, make a change, commit it with a clear message, and push it.",
      quiz: "Which command records staged changes in Git history?",
      answer: "git commit"
    }
  },
  {
    title: "SQL Foundations",
    subject: "Databases",
    level: "Novice",
    icon: "🗄️",
    color: "purple",
    description: "Read and change structured data with SQL.",
    content: {
      learn: "SQL is used to work with relational databases. SELECT reads data, INSERT adds rows, UPDATE changes rows, and DELETE removes rows. WHERE limits which rows are affected.",
      example: 'SELECT name, score\nFROM students\nWHERE score >= 80\nORDER BY score DESC;',
      practice: "Create a students table and write a query that returns students with scores above 75.",
      quiz: "Which SQL keyword filters rows?",
      answer: "WHERE"
    }
  },
  {
    title: "APIs and JSON",
    subject: "Web",
    level: "Intermediate",
    icon: "🔌",
    color: "blue",
    description: "Understand how websites exchange data with APIs.",
    content: {
      learn: "An API provides a defined way for software to communicate. Web APIs commonly use HTTP requests and JSON data. GET usually reads information while POST commonly sends new data.",
      example: 'fetch("/api/stats")\n  .then(response => response.json())\n  .then(data => console.log(data));',
      practice: "Call a public JSON API and display one field on a webpage.",
      quiz: "What format is commonly used to exchange structured web data?",
      answer: "JSON"
    }
  },
  {
    title: "Web Security Essentials",
    subject: "Security",
    level: "Advanced",
    icon: "🛡️",
    color: "orange",
    description: "Learn practical habits for safer websites and accounts.",
    content: {
      learn: "Use HTTPS, validate input, escape untrusted content, protect secrets on the server, and avoid placing API keys or passwords in frontend JavaScript. Authentication and authorization should be designed deliberately.",
      example: 'const safe = escapeHtml(userInput);\n// Keep private secrets on the server, not in browser code.',
      practice: "Review a small form and list three places where untrusted input could enter the application.",
      quiz: "Where should a private API secret normally be kept?",
      answer: "On a trusted server or secret-management system, not in frontend code."
    }
  },
  {
    title: "Debugging Like a Developer",
    subject: "Programming",
    level: "Expert",
    icon: "🔎",
    color: "orange",
    description: "Find bugs systematically using logs, tests, and small experiments.",
    content: {
      learn: "Good debugging starts by reproducing the problem, reading the exact error, isolating the smallest failing part, testing a hypothesis, and verifying the fix. Browser DevTools and console logs are useful tools.",
      example: 'console.log("value:", value);\n// Reproduce → isolate → inspect → fix → retest',
      practice: "Take a small broken program and write down the reproduction steps, suspected cause, fix, and verification.",
      quiz: "What should you do first when a bug is unclear?",
      answer: "Reproduce it reliably and observe the exact failure."
    }
  },
  {
    title: "Responsive UI Engineering",
    subject: "Design",
    level: "Master",
    icon: "📱",
    color: "pink",
    description: "Create interfaces that work beautifully from phone to desktop.",
    content: {
      learn: "Responsive design combines flexible layouts, relative sizing, readable typography, touch-friendly controls, and media queries. Design for the smallest useful screen, then enhance for larger displays.",
      example: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 700px) {\n  .grid { grid-template-columns: 1fr; }\n}',
      practice: "Make a three-card layout comfortable on a 360px-wide phone without horizontal scrolling.",
      quiz: "What CSS tool is commonly used for breakpoint-specific rules?",
      answer: "@media"
    }
  },
  {
    title: "Capstone: Build a Study App",
    subject: "Project",
    level: "Grandmaster",
    icon: "🚀",
    color: "green",
    description: "Build a complete learning app with lessons, progress, search, and persistence.",
    content: {
      learn: "A capstone project combines planning, semantic HTML, responsive CSS, JavaScript state, local persistence, accessibility, testing, and deployment. Break the work into small milestones and ship a usable version before polishing it.",
      example: 'Plan → Data → UI → Events → Storage → Test → Deploy\n\nStart small. Measure progress. Improve.',
      practice: "Build your own mini StudyHub with five lessons, a progress bar, a search box, and a completion system.",
      quiz: "What is a useful first step before writing a large project?",
      answer: "Define the goal, requirements, and small milestones."
    }
  }
,

  {
    title: "Python Lists & Dictionaries", subject: "Python", level: "Intermediate", icon: "🧠", color: "green",
    description: "Store collections of data with lists, tuples, sets, and dictionaries.",
    content: {
      learn: "Lists keep ordered collections and can be changed. Tuples are ordered but immutable. Sets store unique values. Dictionaries store key-value pairs. Choosing the right structure makes programs clearer.",
      example: 'student = {"name": "AJ", "score": 92}\nprint(student["name"])\n\nscores = [80, 91, 76]\nprint(max(scores))',
      practice: "Create a dictionary for a student and a list containing five subject scores.",
      quiz: "Which Python structure stores key-value pairs?", answer: "A dictionary."
    }
  },
  {
    title: "Python File Handling", subject: "Python", level: "Advanced", icon: "📁", color: "green",
    description: "Read and write text files safely using Python.",
    content: {
      learn: "Python can read and write files with open(). The with statement automatically closes a file. Common modes include r for reading, w for writing, and a for appending.",
      example: 'with open("notes.txt", "w") as file:\n    file.write("Keep learning!")',
      practice: "Create a notes program that saves three lines and reads them back.",
      quiz: "Why is with useful when opening files?", answer: "It manages the file context and closes the file automatically."
    }
  },
  {
    title: "JavaScript Arrays & Objects", subject: "JavaScript", level: "Intermediate", icon: "🧱", color: "orange",
    description: "Organize application data with arrays and objects.",
    content: {
      learn: "Arrays store ordered values. Objects store named properties. Modern JavaScript provides map, filter, find, and other methods for transforming and searching data.",
      example: 'const lessons = [{title:"HTML", done:true}, {title:"CSS", done:false}];\nconst done = lessons.filter(item => item.done);',
      practice: "Create an array of five lessons and filter it to show only completed lessons.",
      quiz: "Which method creates a new array containing matching items?", answer: "filter()"
    }
  },
  {
    title: "JavaScript Async & Fetch", subject: "JavaScript", level: "Expert", icon: "🌐", color: "orange",
    description: "Load remote data with promises, async/await, and fetch.",
    content: {
      learn: "Network requests take time, so JavaScript handles them asynchronously. fetch() returns a Promise. async/await makes asynchronous code easier to read. Always check response status and handle failures.",
      example: 'async function loadData() {\n  const response = await fetch("/api/data");\n  if (!response.ok) throw new Error("Request failed");\n  return response.json();\n}',
      practice: "Fetch JSON from an API and display a loading state, result, and error state.",
      quiz: "What does await do inside an async function?", answer: "It waits for a Promise to settle before continuing that function."
    }
  },
  {
    title: "CSS Animations", subject: "CSS", level: "Advanced", icon: "✨", color: "purple",
    description: "Create polished motion with transitions and keyframes.",
    content: {
      learn: "Transitions animate changes between states. @keyframes defines multi-step animations. Keep motion subtle and respect prefers-reduced-motion for users who request less animation.",
      example: '.card { transition: transform .3s ease; }\n.card:hover { transform: translateY(-4px); }',
      practice: "Animate a card lift and button hover without making the interface distracting.",
      quiz: "Which CSS feature defines named animation steps?", answer: "@keyframes"
    }
  },
  {
    title: "CSS Variables & Themes", subject: "CSS", level: "Expert", icon: "🎛️", color: "purple",
    description: "Build maintainable color systems and theme switches.",
    content: {
      learn: "CSS custom properties store reusable values. Define them on :root and override them on another class such as .bright-mode. This keeps themes consistent and easier to maintain.",
      example: ':root { --gold: #d8b86a; }\n.bright-mode { --gold: #f0cf7b; }\n.button { color: var(--gold); }',
      practice: "Create a light and dark theme using at least five shared CSS variables.",
      quiz: "Which syntax reads a CSS custom property?", answer: "var(--property-name)"
    }
  },
  {
    title: "SQL Joins", subject: "Databases", level: "Advanced", icon: "🔗", color: "purple",
    description: "Combine related information from multiple database tables.",
    content: {
      learn: "A JOIN combines rows from related tables. INNER JOIN returns matching rows. LEFT JOIN keeps every row from the left table and adds matching data when available. Good table design makes relationships explicit.",
      example: 'SELECT students.name, courses.title\nFROM students\nJOIN enrollments ON enrollments.student_id = students.id\nJOIN courses ON courses.id = enrollments.course_id;',
      practice: "Design students and courses tables, then query the courses taken by each student.",
      quiz: "What does an INNER JOIN return?", answer: "Rows with matching records in both joined tables."
    }
  },
  {
    title: "Git Branches & Pull Requests", subject: "Tools", level: "Intermediate", icon: "🌿", color: "dark",
    description: "Work safely on features with branches and code review.",
    content: {
      learn: "Branches let you work on changes without disturbing the main branch. A pull request proposes changes for review. Small commits and clear descriptions make collaboration easier.",
      example: 'git switch -c feature/search\ngit add .\ngit commit -m "Add lesson search"\ngit push -u origin feature/search',
      practice: "Create a feature branch, make one focused change, and describe it in a pull request.",
      quiz: "Why use a feature branch?", answer: "To isolate work until it is ready to integrate."
    }
  },
  {
    title: "Testing Web Apps", subject: "Programming", level: "Master", icon: "🧪", color: "pink",
    description: "Check behavior systematically before releasing software.",
    content: {
      learn: "Testing verifies that software behaves as expected. Test normal cases, edge cases, invalid input, responsive layouts, and important user journeys. Automated tests can repeat checks quickly, while manual testing catches visual and usability problems.",
      example: 'Input: empty username\nExpected: validation message\nInput: valid username\nExpected: account created',
      practice: "Write ten test cases for a login form, including invalid and boundary inputs.",
      quiz: "What is an edge case?", answer: "An unusual or boundary input that can reveal hidden bugs."
    }
  },
  {
    title: "Deployment & Performance", subject: "Web", level: "Master", icon: "🚀", color: "blue",
    description: "Prepare a website for real users with speed and reliability in mind.",
    content: {
      learn: "Deployment makes your application available to users. Performance improves through optimized images, efficient CSS and JavaScript, caching, and minimizing unnecessary network work. Always test the deployed version, not only local files.",
      example: 'Build → Test → Deploy → Monitor → Improve',
      practice: "Audit a page and identify three opportunities to reduce load time without hurting usability.",
      quiz: "Why test the deployed site separately?", answer: "Production hosting, paths, caching, APIs, and configuration can behave differently from local development."
    }
  },
  {
    title: "Study Skills: Active Recall", subject: "Study Skills", level: "Beginner", icon: "🧠", color: "pink",
    description: "Remember more by retrieving knowledge instead of only rereading.",
    content: {
      learn: "Active recall means trying to retrieve information from memory. Close your notes and answer questions, explain a concept aloud, or write what you remember before checking the answer. Short repeated sessions are useful for long-term learning.",
      example: "Read → Close notes → Recall → Check → Correct → Repeat",
      practice: "After today's lesson, write five questions and answer them without looking at your notes.",
      quiz: "What is active recall?", answer: "Practicing retrieval of information from memory."
    }
  },
  {
    title: "Study Skills: Spaced Practice", subject: "Study Skills", level: "Novice", icon: "📅", color: "pink",
    description: "Plan review sessions over time instead of cramming.",
    content: {
      learn: "Spaced practice distributes review across multiple sessions. A simple plan can review new material today, again tomorrow, several days later, and again the following week. Combine spacing with active recall.",
      example: "Day 1 → Learn\nDay 2 → Recall\nDay 4 → Practice\nDay 7 → Review",
      practice: "Choose one topic and schedule four short review sessions over the next week.",
      quiz: "What does spaced practice change?", answer: "It distributes learning and review over time."
    }
  }

];
const usersKey = "studyhub_users";
const currentUserKey = "studyhub_current_user";
const xpPerLesson = 100;

function readStorage(key, fallback) {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { showMessage("Progress could not be saved in this browser.", true); }
}
function escapeHtml(value) {
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

let users = readStorage(usersKey, {});
let currentUser = localStorage.getItem(currentUserKey);
let loginMode = false;
let activeFilter = "All";
let searchTerm = "";

const materialGrid = document.getElementById("materialGrid");
const accountForm = document.getElementById("accountForm");
const accountMessage = document.getElementById("accountMessage");
const switchAccountMode = document.getElementById("switchAccountMode");
const logoutButton = document.getElementById("logoutButton");

document.title = "StudyHub";
const logo = document.querySelector(".logo");
if (logo) logo.innerHTML = "Study<span>Hub</span>";

function saveUsers(){ writeStorage(usersKey, users); }
function getCurrentUserData(){
  if (!currentUser || !users[currentUser]) return null;
  const u = users[currentUser];
  if (!Array.isArray(u.completed)) u.completed = [];
  if (!u.stats) u.stats = { lastStudyDate:null, streak:0, dailyXp:0, dailyDate:null };
  if (!Array.isArray(u.achievements)) u.achievements = [];
  return u;
}
function getCompletedLessons(){ return getCurrentUserData()?.completed || []; }
function getXP(){ return getCompletedLessons().length * xpPerLesson; }
function getLevel(){
  const xp = getXP();
  if (xp >= 2500) return "Grandmaster";
  if (xp >= 1800) return "Master";
  if (xp >= 1200) return "Expert";
  if (xp >= 700) return "Advanced";
  if (xp >= 300) return "Intermediate";
  if (xp >= 100) return "Novice";
  return "Beginner";
}
function isUnlocked(index, completed){ return index === 0 || completed.includes(index - 1); }
function todayKey(){ const d=new Date(); const y=d.getFullYear(); const m=String(d.getMonth()+1).padStart(2,"0"); const day=String(d.getDate()).padStart(2,"0"); return `${y}-${m}-${day}`; }
function updateStreak(){
  const u=getCurrentUserData(); if(!u) return;
  const today=todayKey(), last=u.stats.lastStudyDate;
  if(last===today) return;
  if(!last){ u.stats.streak=1; }
  else { const a=new Date(last+"T00:00:00"), b=new Date(today+"T00:00:00"); const diff=Math.round((b-a)/86400000); u.stats.streak=diff===1?(u.stats.streak||0)+1:1; }
  u.stats.lastStudyDate=today; u.stats.bestStreak=Math.max(u.stats.bestStreak||0,u.stats.streak||0); saveUsers();
}
function updateAchievements(){
  const u = getCurrentUserData(); if (!u) return;
  const completed = u.completed.length;
  const candidates = [
    ["first","First Step","Complete your first lesson.","🌱",completed>=1],
    ["five","Five Strong","Complete 5 lessons.","🔥",completed>=5],
    ["ten","Ten Deep","Complete 10 lessons.","⚡",completed>=10],
    ["streak3","On a Roll","Study for 3 days in a row.","📅",(u.stats.streak||0)>=3],
    ["half","Halfway","Complete half of the curriculum.","🏅",completed>=Math.ceil(lessons.length/2)],
    ["master","Master Path","Reach Master level.","👑",getLevel()==="Master"||getLevel()==="Grandmaster"],
    ["all","Grand Finish","Complete every lesson.","🏆",completed===lessons.length]
  ];
  for (const [id] of candidates) if (id && candidates.find(x=>x[0]===id)[4] && !u.achievements.includes(id)) u.achievements.push(id);
  saveUsers();
}
function updateStreakUI(){
  const u=getCurrentUserData();
  const streak=u?.stats?.streak||0, best=u?.stats?.bestStreak||streak;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set("streakBig",streak); set("bestStreak",best); set("todayStatus",u?.stats?.lastStudyDate===todayKey()?"Done ✓":"Start");
  const weeklyStart=(()=>{const d=new Date(); const day=d.getDay(); const diff=day===0?-6:1-day; d.setDate(d.getDate()+diff); d.setHours(0,0,0,0); return d;})();
  const completed=u?.completed||[];
  let count=0;
  completed.forEach(i=>{ const stamp=u?.completionDates?.[i]; if(stamp && new Date(stamp)>=weeklyStart) count++; });
  set("weeklyCount",Math.min(count,3)+"/3");
  set("weeklyText",count>=3?"Weekly mission complete. Keep the rhythm going!":"Complete "+(3-count)+" more lesson"+(3-count===1?"":"s")+" this week.");
}
function renderDashboard(){
  const u = getCurrentUserData(), completed = getCompletedLessons(), xp = getXP();
  const pct = lessons.length ? Math.round(completed.length/lessons.length*100) : 0;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set("dashLevel", getLevel());
  set("dashXp", xp + " XP");
  set("dashProgress", pct + "%");
  set("dashStreak", (u?.stats.streak||0) + " days");
  set("dashLessons", completed.length + "/" + lessons.length);
  const fill=document.getElementById("dashProgressBar"); if(fill) fill.style.width=pct+"%";
  const nextIndex=lessons.findIndex((_,i)=>!completed.includes(i));
  const next=nextIndex>=0?lessons[nextIndex]:null;
  const cont=document.getElementById("continueTitle");
  const contMeta=document.getElementById("continueMeta");
  const contBtn=document.getElementById("continueButton");
  if(cont) cont.textContent=next ? next.title : "Curriculum complete";
  if(contMeta) contMeta.textContent=next ? next.level+" · "+next.subject+" · +"+xpPerLesson+" XP" : "You finished every lesson. Amazing work.";
  if(contBtn){ contBtn.disabled=!next; contBtn.dataset.index=nextIndex; contBtn.textContent=next?"Continue learning →":"All complete ✓"; }
  const ach=document.getElementById("achievementGrid");
  if(ach){
    const defs=[
      ["first","🌱","First Step"],["five","🔥","Five Strong"],["ten","⚡","Ten Deep"],
      ["streak3","📅","On a Roll"],["half","🏅","Halfway"],["master","👑","Master Path"],["all","🏆","Grand Finish"]
    ];
    ach.innerHTML=defs.map(([id,icon,name])=>'<div class="achievement '+((u?.achievements||[]).includes(id)?"earned":"")+'"><span>'+icon+'</span><b>'+name+'</b><small>'+((u?.achievements||[]).includes(id)?"Unlocked":"Locked")+'</small></div>').join("");
  }
}
function dailyChallenge(){
  const idx = new Date().getDate() % lessons.length;
  const l=lessons[idx];
  const title=document.getElementById("challengeTitle"); const text=document.getElementById("challengeText");
  if(title) title.textContent=l.title;
  if(text) text.textContent=l.content.practice+" · Reward: +50 XP";
  const btn=document.getElementById("challengeButton");
  if(btn){btn.dataset.index=idx; btn.onclick=()=>showLesson(idx);}
}

function showLesson(index){
  const lesson=lessons[index], completed=getCompletedLessons();
  if(!lesson || !isUnlocked(index,completed)) return;
  document.getElementById("lessonModal")?.remove();
  const modal=document.createElement("div");
  modal.id="lessonModal"; modal.className="lesson-modal"; modal.setAttribute("role","dialog"); modal.setAttribute("aria-modal","true");
  modal.innerHTML='<div class="lesson-window"><button class="lesson-close" type="button" aria-label="Close lesson">×</button><span class="level">'+escapeHtml(lesson.level)+' · '+escapeHtml(lesson.subject)+'</span><h2>'+escapeHtml(lesson.icon)+' '+escapeHtml(lesson.title)+'</h2><div class="lesson-content"><h3>📖 Learn</h3><p class="lesson-text">'+escapeHtml(lesson.content.learn)+'</p><h3>💡 Example</h3><pre><code>'+escapeHtml(lesson.content.example)+'</code></pre><h3>✍️ Practice</h3><p>'+escapeHtml(lesson.content.practice)+'</p><h3>❓ Quiz</h3><p>'+escapeHtml(lesson.content.quiz)+'</p><details><summary>Show answer</summary><p>'+escapeHtml(lesson.content.answer)+'</p></details></div><button class="button modal-complete" type="button" data-index="'+index+'">'+(completed.includes(index)?"✓ Already completed":"Mark as read")+'</button></div>';
  document.body.appendChild(modal);
  const close=()=>modal.remove();
  modal.querySelector(".lesson-close").addEventListener("click",close);
  modal.addEventListener("click",e=>{if(e.target===modal)close();});
  modal.querySelector(".modal-complete").addEventListener("click",()=>{completeLesson(index);close();});
}

function renderLessons(){
  const completed=getCompletedLessons(), term=searchTerm.toLowerCase();
  if(!materialGrid)return;
  materialGrid.innerHTML=lessons.map((lesson,index)=>{
    const unlocked=isUnlocked(index,completed);
    const visible=(activeFilter==="All"||activeFilter===lesson.level) &&
      (!term || [lesson.title,lesson.subject,lesson.level,lesson.description].join(" ").toLowerCase().includes(term));
    if(!visible)return "";
    return '<article class="material-card '+(unlocked?"":"locked")+'"><div class="material-icon '+lesson.color+'">'+lesson.icon+'</div><span class="level">'+escapeHtml(lesson.level)+' · '+escapeHtml(lesson.subject)+'</span><h3>'+escapeHtml(lesson.title)+'</h3><p>'+escapeHtml(lesson.description)+'</p><button class="complete-button lesson-open" data-index="'+index+'" '+(unlocked?"":"disabled")+'>'+ (unlocked?"Open lesson":"🔒 Complete the previous topic") +'</button></article>';
  }).join("");
  document.querySelectorAll(".lesson-open").forEach(b=>b.addEventListener("click",()=>showLesson(Number(b.dataset.index))));
  const empty=document.getElementById("searchEmpty"); if(empty) empty.hidden=materialGrid.children.length!==0;
  updateProgress(); renderDashboard(); updateAchievements();
}
function completeLesson(index){
  const user=getCurrentUserData();
  if(!user){showMessage("Please log in before marking a lesson as read.",true);document.getElementById("account")?.scrollIntoView({behavior:"smooth"});return;}
  if(!lessons[index]||!isUnlocked(index,user.completed)||user.completed.includes(index))return;
  user.completed.push(index); user.completed.sort((a,b)=>a-b); user.stats.dailyXp=(user.stats.dailyDate===todayKey()?user.stats.dailyXp:0)+xpPerLesson; user.stats.dailyDate=todayKey();
  if(!user.completionDates) user.completionDates={}; user.completionDates[index]=new Date().toISOString();
  updateStreak(); saveUsers(); renderLessons(); updateAccountView(); updateStreakUI();
  showMessage(index===lessons.length-1?"Congratulations! You completed StudyHub with "+getXP()+" XP 🎉":"Lesson completed! You earned "+xpPerLesson+" XP.",false);
}
function updateProgress(){
  const completed=getCompletedLessons().length, percentage=lessons.length?(completed/lessons.length)*100:0;
  const bar=document.getElementById("heroProgressBar");if(bar)bar.style.width=percentage+"%";
  const pt=document.getElementById("progressText");if(pt)pt.textContent=completed+" of "+lessons.length+" topics completed · "+getXP()+" XP";
  const st=document.getElementById("statusText");if(st)st.textContent=!currentUser?"Not signed in":completed===lessons.length?"Grandmaster · "+getXP()+" XP 🎉":getLevel()+" · "+getXP()+" XP";
}
function updateAccountView(){
  const title=document.getElementById("accountTitle"),desc=document.getElementById("accountDescription"),eyebrow=document.getElementById("accountEyebrow"),welcome=document.getElementById("welcomeText");
  if(currentUser&&users[currentUser]){
    if(eyebrow)eyebrow.textContent="Welcome back"; if(title)title.textContent=currentUser;
    if(desc)desc.textContent="Your progress is saved automatically. XP: "+getXP()+" · "+getLevel();
    if(welcome)welcome.textContent="Keep going, "+currentUser+"!"; if(logoutButton)logoutButton.classList.remove("hidden");
    if(accountForm)accountForm.classList.add("hidden"); if(switchAccountMode)switchAccountMode.classList.add("hidden");
  }else{
    currentUser=null;if(eyebrow)eyebrow.textContent="Your account";if(title)title.textContent=loginMode?"Log in":"Create an account";if(desc)desc.textContent="Save your learning progress across visits.";if(welcome)welcome.textContent="Create an account to save your progress.";if(logoutButton)logoutButton.classList.add("hidden");if(accountForm)accountForm.classList.remove("hidden");if(switchAccountMode)switchAccountMode.classList.remove("hidden");
    const submit=document.getElementById("accountSubmit");if(submit)submit.textContent=loginMode?"Log in":"Create account";
    if(switchAccountMode)switchAccountMode.textContent=loginMode?"Need an account? Create one":"Already have an account? Log in";
  }
}
function showMessage(message,error=false){if(accountMessage){accountMessage.textContent=message;accountMessage.style.color=error?"#d64545":"#2f9e62";}}

if(accountForm)accountForm.addEventListener("submit",event=>{
  event.preventDefault(); const username=document.getElementById("username").value.trim(),password=document.getElementById("password").value;
  if(username.length<3||password.length<4){showMessage("Use at least 3 characters for the username and 4 for the password.",true);return;}
  if(loginMode){if(!users[username]||users[username].password!==password){showMessage("Incorrect username or password.",true);return;}}
  else{if(users[username]){showMessage("That username already exists. Please log in.",true);return;}users[username]={password,completed:[],stats:{lastStudyDate:null,streak:0,dailyXp:0,dailyDate:null},achievements:[]};saveUsers();}
  currentUser=username;localStorage.setItem(currentUserKey,currentUser);accountForm.reset();showMessage(loginMode?"Logged in successfully.":"Account created successfully.");renderLessons();updateAccountView();
});
if(switchAccountMode)switchAccountMode.addEventListener("click",()=>{loginMode=!loginMode;if(accountMessage)accountMessage.textContent="";updateAccountView();});
if(logoutButton)logoutButton.addEventListener("click",()=>{currentUser=null;localStorage.removeItem(currentUserKey);loginMode=true;showMessage("You have been logged out.");renderLessons();updateAccountView();});
document.querySelectorAll(".filter-button").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll(".filter-button").forEach(item=>item.classList.remove("active"));button.classList.add("active");activeFilter=button.dataset.filter;renderLessons();}));
document.querySelectorAll(".subject-card").forEach(button=>button.addEventListener("click",()=>{searchTerm=button.dataset.subject;const input=document.getElementById("lessonSearch");if(input)input.value=searchTerm;document.getElementById("lessons")?.scrollIntoView({behavior:"smooth"});renderLessons();}));
const searchInput=document.getElementById("lessonSearch");
if(searchInput)searchInput.addEventListener("input",()=>{searchTerm=searchInput.value.trim();renderLessons();});
const continueButton=document.getElementById("continueButton");
if(continueButton)continueButton.addEventListener("click",()=>{const i=Number(continueButton.dataset.index);if(!Number.isNaN(i))showLesson(i);});
const themeButton=document.getElementById("themeButton");
if(themeButton)themeButton.addEventListener("click",()=>{document.body.classList.toggle("bright-mode");localStorage.setItem("studyhub_bright",document.body.classList.contains("bright-mode"));});
function restoreTheme(){if(localStorage.getItem("studyhub_bright")==="true")document.body.classList.add("bright-mode");}

const WORKER_URL="https://study4u-api.study4u-aj.workers.dev",STARRED_KEY="studyhub_starred";
function setStats(views,stars){const v=document.getElementById("viewsCount"),s=document.getElementById("starsCount");if(v&&views!==undefined)v.textContent=views;if(s&&stars!==undefined)s.textContent=stars;}
function setStatsStatus(m){const e=document.getElementById("statsStatus");if(e)e.textContent=m;}
function restoreStarState(){const b=document.getElementById("starButton");if(!b)return;const starred=localStorage.getItem(STARRED_KEY)==="true";if(starred){b.classList.add("starred");b.setAttribute("aria-pressed","true");b.title="You already starred StudyHub";}}
async function loadAndIncrementStats(){
  try{setStatsStatus("Updating…");const response=await fetch(WORKER_URL+"/api/view",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:currentUser||"Guest"}),cache:"no-store"});if(!response.ok)throw new Error("View request failed: "+response.status);const data=await response.json();setStats(data.views,data.stars);setStatsStatus("Live");}
  catch(error){console.error(error);try{const response=await fetch(WORKER_URL+"/api/stats",{cache:"no-store"});const data=await response.json();setStats(data.views,data.stars);setStatsStatus("Live");}catch{setStatsStatus("Offline");}}
}
async function addStar(){
  const b=document.getElementById("starButton"),s=document.getElementById("starsCount");if(!b||localStorage.getItem(STARRED_KEY)==="true")return;
  try{b.disabled=true;const r=await fetch(WORKER_URL+"/api/star",{method:"POST",cache:"no-store"});if(!r.ok)throw new Error("Star request failed");const d=await r.json();if(s)s.textContent=d.stars;localStorage.setItem(STARRED_KEY,"true");b.classList.add("starred");b.setAttribute("aria-pressed","true");b.title="Thanks for starring StudyHub ⭐";}
  catch{b.disabled=false;b.title="Click to try again";}
}
document.addEventListener("DOMContentLoaded",()=>{restoreTheme();renderLessons();updateAccountView();updateStreakUI();dailyChallenge();loadAndIncrementStats();restoreStarState();});
