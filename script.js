
// Select navigation buttons
const buttons = document.querySelectorAll(".sidebar button");

// Select the dynamic content area
const content = document.getElementById("content");

// Store the content for each section
const sections = {

    home: `
        <div class="profile">
            <img src="assets/images/profile.jpg"
                 alt="Profile Photo"
                 class="profile-photo">
            <h2 class="welcome-message">
            Hi, my name is Nithin. Welcome to my portfolio !!!
           </h2>
        </div>
    `,

    
about: `
    <div class="section-content about-section">

        <h2>About Me</h2>

        <p>
            Hi, my name is Nithin. I am a Data Science graduate
            passionate about transforming data into meaningful
            insights and solving real-world business problems
            using technology.
        </p>

        <h3>Educational Background</h3>

        <div class="about-card">
            <h4>Master of Science in Data Science</h4>
            <p>Pace University, New York</p>
            <p>Graduated: May 2026</p>
            <p>GPA: 3.52 / 4.00</p>
        </div>

        <h3>Professional Background</h3>

        <p>
            I have professional experience in data analysis,
            global trade compliance, and university operations,
            having worked with Amazon, Pace University,
            and Limber Sports Inc.
        </p>

        <h3>Technical Skills</h3>

        <div class="skills-container">
            <span class="skill">Python</span>
            <span class="skill">SQL</span>
            <span class="skill">R</span>
            <span class="skill">Machine Learning</span>
            <span class="skill">Artificial Intelligence</span>
            <span class="skill">Data Engineering</span>
            <span class="skill">Power BI</span>
            <span class="skill">Tableau</span>
            <span class="skill">Statistics</span>
            <span class="skill">Data Visualization</span>
        </div>

        <h3>Career Objective</h3>

        <p>
            My goal is to apply my analytical and technical
            skills to develop data-driven solutions, support
            business decisions, and contribute to innovative
            technologies that create meaningful impact.
        </p>

    </div>
    `,

    
experience: `
    <div class="section-content experience-section">

        <h2>Professional Experience</h2>

        <!-- Limber Sports Inc. -->

        <div class="experience-card">

            <div class="experience-header">

                <img src="assets/logos/limber.png"
                     alt="Limber Sports Logo"
                     class="company-logo">

                <div>
                    <h3>Limber Sports Inc.</h3>
                    <h4>Data Analyst Intern</h4>
                </div>

            </div>

            <ul class="responsibilities">
                <li>Analyze social media performance
                    across multiple platforms.</li>

                <li>Develop weekly performance reports
                    and track key performance indicators.</li>

                <li>Conduct competitor analysis to
                    identify trends and opportunities.</li>

                <li>Support data-driven marketing
                    and business decisions.</li>
            </ul>

            <div class="skills-container">
                <span class="skill">Data Analysis</span>
                <span class="skill">Reporting</span>
                <span class="skill">Social Media Analytics</span>
                <span class="skill">Data Visualization</span>
            </div>

        </div>


        <!-- Pace University -->

        <div class="experience-card">

            <div class="experience-header">

                <img src="assets/logos/pace.png"
                     alt="Pace University Logo"
                     class="company-logo">

                <div>
                    <h3>Pace University</h3>
                    <h4>International Programs Student Assistant</h4>
                </div>

            </div>

            <ul class="responsibilities">

                <li>Assisted students with in-person
                    and telephone inquiries.</li>

                <li>Supported university staff with
                    documentation and administrative operations.</li>

                <li>Maintained student records while
                    ensuring accuracy and confidentiality.</li>

                <li>Provided technical assistance
                    to university staff.</li>

            </ul>

            <div class="skills-container">
                <span class="skill">Communication</span>
                <span class="skill">Data Management</span>
                <span class="skill">Documentation</span>
                <span class="skill">Technical Support</span>
            </div>

        </div>


        <!-- Amazon -->

        <div class="experience-card">

            <div class="experience-header">

                <img src="assets/logos/amazon.png"
                     alt="Amazon Logo"
                     class="company-logo">

                <div>
                    <h3>Amazon</h3>
                    <h4>Senior Data Associate</h4>
                    <p class="department">Global Trade Services</p>
                </div>

            </div>

            <ul class="responsibilities">

                <li>Performed data analysis and quality
                    audits for global trade compliance.</li>

                <li>Reviewed machine learning-generated
                    Harmonized Tariff Schedule classifications.</li>

                <li>Identified data inconsistencies and
                    supported process improvements.</li>

                <li>Collaborated with cross-functional
                    teams to maintain operational accuracy.</li>

                <li>Supported training and mentoring
                    of new team members.</li>

            </ul>

            <div class="skills-container">
                <span class="skill">Data Analysis</span>
                <span class="skill">Quality Assurance</span>
                <span class="skill">Trade Compliance</span>
                <span class="skill">Data Auditing</span>
                <span class="skill">Process Improvement</span>
            </div>

        </div>

    </div>
`,

    

    projects: `
        <div class="section-content">
            <h2>Projects</h2>
            <p>Explore my Data Science projects.</p>
        </div>
    `,

    
interests: `
    <div class="section-content interests-section">

        <h2>My Interests</h2>

        <p class="interests-intro">
            Beyond my professional experience, these are
            the things that inspire and motivate me.
        </p>

        <div class="interests-grid">

            <!-- Customer Service -->

            <div class="interest-card">

                <div class="interest-icon">🤝</div>

                <h3>Customer Service & Satisfaction</h3>

                <p>
                    Helping customers, understanding their
                    needs, and creating positive experiences
                    that build trust and satisfaction.
                </p>

            </div>


            <!-- Problem Solving -->

            <div class="interest-card">

                <div class="interest-icon">💡</div>

                <h3>Problem Solving</h3>

                <p>
                    Finding practical solutions to challenging
                    problems through logical thinking,
                    creativity, and analytical skills.
                </p>

            </div>


            <!-- Continuous Learning -->

            <div class="interest-card">

                <div class="interest-icon">📚</div>

                <h3>Continuous Learning</h3>

                <p>
                    Exploring new technologies, developing
                    new skills, and continuously expanding
                    my knowledge.
                </p>

            </div>


            <!-- Teamwork -->

            <div class="interest-card">

                <div class="interest-icon">👥</div>

                <h3>Teamwork & Collaboration</h3>

                <p>
                    Working with people from diverse
                    backgrounds, sharing knowledge, and
                    contributing to shared goals.
                </p>

            </div>


            <!-- Technology -->

            <div class="interest-card">

                <div class="interest-icon">💻</div>

                <h3>Technology & Innovation</h3>

                <p>
                    Exploring how technology and data can
                    improve businesses and make a positive
                    difference in people's everyday lives.
                </p>

            </div>


            <!-- Hobbies -->

            <div class="interest-card">

                <div class="interest-icon">🎮</div>

                <h3>Hobbies & Personal Interests</h3>

                <p>
                    Gaming, travelling, exploring aviation,
                    and learning about different cultures
                    and the world around me.
                </p>

            </div>

        </div>

    </div>
`

};

// Add click events to navigation buttons
buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Identify the selected section
        const section = button.dataset.section;

        // Update the right-side content
        
content.innerHTML = sections[section];

// Restart the section transition animation
content.classList.remove("section-transition");

void content.offsetWidth;

content.classList.add("section-transition");


        // Remove active styling from all buttons
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Highlight the selected button
        button.classList.add("active");

    });

});

// Highlight Home when the website first loads
document.querySelector('[data-section="home"]')
        .classList.add("active");
