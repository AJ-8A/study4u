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
  }
];

const usersKey = "studyhub_users";
const currentUserKey = "studyhub_current_user";
const xpPerLesson = 100;

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showMessage("Progress could not be saved in this browser.", true);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let users = readStorage(usersKey, {});
let currentUser = localStorage.getItem(currentUserKey);
let loginMode = false;
let activeFilter = "All";

const materialGrid = document.getElementById("materialGrid");
const accountForm = document.getElementById("accountForm");
const accountMessage = document.getElementById("accountMessage");
const switchAccountMode = document.getElementById("switchAccountMode");
const logoutButton = document.getElementById("logoutButton");

document.title = "StudyHub";
const logo = document.querySelector(".logo");
if (logo) logo.innerHTML = "Study<span>Hub</span>";

function saveUsers() {
  writeStorage(usersKey, users);
}

function getCurrentUserData() {
  if (!currentUser || !users[currentUser]) return null;

  if (!Array.isArray(users[currentUser].completed)) {
    users[currentUser].completed = [];
    saveUsers();
  }

  return users[currentUser];
}

function getCompletedLessons() {
  return getCurrentUserData()?.completed || [];
}

function getXP() {
  return getCompletedLessons().length * xpPerLesson;
}

function isUnlocked(index, completed) {
  return index === 0 || completed.includes(index - 1);
}

function showLesson(index) {
  const lesson = lessons[index];
  const completed = getCompletedLessons();

  if (!lesson || !isUnlocked(index, completed)) return;

  document.getElementById("lessonModal")?.remove();

  const modal = document.createElement("div");
  modal.id = "lessonModal";
  modal.className = "lesson-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  modal.innerHTML = `
    <div class="lesson-window">
      <button class="lesson-close" type="button" aria-label="Close lesson">×</button>
      <span class="level">${escapeHtml(lesson.level)} · ${escapeHtml(lesson.subject)}</span>
      <h2>${escapeHtml(lesson.icon)} ${escapeHtml(lesson.title)}</h2>

      <div class="lesson-content">
        <h3>📖 Learn</h3>
        <p class="lesson-text">${escapeHtml(lesson.content.learn)}</p>

        <h3>💡 Example</h3>
        <pre><code>${escapeHtml(lesson.content.example)}</code></pre>

        <h3>✍️ Practice</h3>
        <p>${escapeHtml(lesson.content.practice)}</p>

        <h3>❓ Quiz</h3>
        <p>${escapeHtml(lesson.content.quiz)}</p>

        <details>
          <summary>Show answer</summary>
          <p>${escapeHtml(lesson.content.answer)}</p>
        </details>
      </div>

      <button class="button modal-complete" type="button" data-index="${index}">
        ${completed.includes(index) ? "✓ Already completed" : "Mark as read"}
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  const close = () => modal.remove();
  modal.querySelector(".lesson-close").addEventListener("click", close);

  modal.addEventListener("click", event => {
    if (event.target === modal) close();
  });

  modal.querySelector(".modal-complete").addEventListener("click", () => {
    completeLesson(index);
    close();
  });
}

function renderLessons() {
  const completed = getCompletedLessons();

  materialGrid.innerHTML = lessons.map((lesson, index) => {
    const unlocked = isUnlocked(index, completed);
    const visible = activeFilter === "All" || activeFilter === lesson.level;

    if (!visible) return "";

    return `
      <article class="material-card ${unlocked ? "" : "locked"}">
        <div class="material-icon ${lesson.color}">${lesson.icon}</div>
        <span class="level">${escapeHtml(lesson.level)} · ${escapeHtml(lesson.subject)}</span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.description)}</p>

        <button class="complete-button lesson-open" data-index="${index}" ${unlocked ? "" : "disabled"}>
          ${unlocked ? "Open lesson" : "🔒 Complete the previous topic"}
        </button>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".lesson-open").forEach(button => {
    button.addEventListener("click", () => showLesson(Number(button.dataset.index)));
  });

  updateProgress();
}

function completeLesson(index) {
  const user = getCurrentUserData();

  if (!user) {
    showMessage("Please log in before marking a lesson as read.", true);
    document.getElementById("account").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!lessons[index] || !isUnlocked(index, user.completed)) return;
  if (user.completed.includes(index)) return;

  user.completed.push(index);
  user.completed.sort((a, b) => a - b);
  saveUsers();

  renderLessons();
  updateAccountView();

  showMessage(
    index === lessons.length - 1
      ? `Congratulations! You completed StudyHub with ${getXP()} XP 🎉`
      : `Lesson completed! You earned ${xpPerLesson} XP.`,
    false
  );
}

function updateProgress() {
  const completed = getCompletedLessons().length;
  const percentage = lessons.length ? (completed / lessons.length) * 100 : 0;

  document.getElementById("heroProgressBar").style.width = `${percentage}%`;
  document.getElementById("progressText").textContent =
    `${completed} of ${lessons.length} topics completed · ${getXP()} XP`;

  document.getElementById("statusText").textContent = !currentUser
    ? "Not signed in"
    : completed === lessons.length
      ? `Grandmaster · ${getXP()} XP 🎉`
      : `${getXP()} XP · Learning`;
}

function updateAccountView() {
  const title = document.getElementById("accountTitle");
  const description = document.getElementById("accountDescription");
  const eyebrow = document.getElementById("accountEyebrow");
  const welcome = document.getElementById("welcomeText");

  if (currentUser && users[currentUser]) {
    eyebrow.textContent = "Welcome back";
    title.textContent = currentUser;
    description.textContent = `Your progress is saved automatically. XP: ${getXP()}`;
    welcome.textContent = `Keep going, ${currentUser}!`;
    logoutButton.classList.remove("hidden");
    accountForm.classList.add("hidden");
    switchAccountMode.classList.add("hidden");
  } else {
    currentUser = null;
    eyebrow.textContent = "Your account";
    title.textContent = loginMode ? "Log in" : "Create an account";
    description.textContent = "Save your learning progress across visits.";
    welcome.textContent = "Create an account to save your progress.";
    logoutButton.classList.add("hidden");
    accountForm.classList.remove("hidden");
    switchAccountMode.classList.remove("hidden");
    document.getElementById("accountSubmit").textContent =
      loginMode ? "Log in" : "Create account";
    switchAccountMode.textContent =
      loginMode ? "Need an account? Create one" : "Already have an account? Log in";
  }
}

function showMessage(message, error = false) {
  accountMessage.textContent = message;
  accountMessage.style.color = error ? "#d64545" : "#2f9e62";
}

accountForm.addEventListener("submit", event => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username.length < 3 || password.length < 4) {
    showMessage("Use at least 3 characters for the username and 4 for the password.", true);
    return;
  }

  if (loginMode) {
    if (!users[username] || users[username].password !== password) {
      showMessage("Incorrect username or password.", true);
      return;
    }
  } else {
    if (users[username]) {
      showMessage("That username already exists. Please log in.", true);
      return;
    }

    users[username] = { password, completed: [] };
    saveUsers();
  }

  currentUser = username;
  localStorage.setItem(currentUserKey, currentUser);
  accountForm.reset();
  showMessage(loginMode ? "Logged in successfully." : "Account created successfully.");
  renderLessons();
  updateAccountView();
});

switchAccountMode.addEventListener("click", () => {
  loginMode = !loginMode;
  accountMessage.textContent = "";
  updateAccountView();
});

logoutButton.addEventListener("click", () => {
  currentUser = null;
  localStorage.removeItem(currentUserKey);
  loginMode = true;
  showMessage("You have been logged out.");
  renderLessons();
  updateAccountView();
});

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderLessons();
  });
});

renderLessons();
updateAccountView();
