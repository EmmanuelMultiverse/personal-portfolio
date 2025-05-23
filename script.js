let window_container = document.querySelector("#window-container");

console.log(window_container);

let welcome_text = document.querySelector(".welcome-text");

let get_about_me = () => {
    let about_me = document.createElement("div")
    about_me.classList.add("about-me")
    about_me.innerHTML += `
            <div class="about-me">
            <img id="headshot" src="assets/images/headshot.png"/>
            <div class="about-me-text">
                <p>Hello! My name is Emmanuel Luis and I am a software engineer who recently graduated from the University of Texas at Dallas! </p>
                <p>Currently I am doing an apprenticeship with Verizon & Multiverse! I am currently attending a bootcamp and will be learning front-end and back-end engineering!</p>
            </div>
        </div>
        `
    
    return about_me
};

let get_experience = () => {
    let experience = document.createElement("div");
    experience.id = "experience";
    experience.innerHTML += `
        <div class="experience-container">
                            <h1 class="work-site">
                                University of Texas at Dallas, Computer Science Degree
                            </h1>
                            <div class="experience-summary">
                                <div class="work-done">
                                    I graduated from the University of Texas at Dallas where I took courses related to software engineering such as Data Structures, Operating Systems, Database, Software Engineering, and Systems Prgramming.
                                </div>
                                <div class="technologies">
                                    Education
                                </div>
                            </div>
                        </div>
                        <div class="experience-container">
                            <h1 class="work-site">
                                Amazon, Intern
                            </h1>
                            <div class="experience-summary">
                                <div class="work-done">
                                    I created a bot to automated the triage process on different types of tickets coming in. This solution worked without need of supervision and implement different safety guards to not pollut ticket correspondence. It reduced the ticket log increase rate to an acceptable number and also reduced the overall ticket log by 55%! 
                                </div>
                                <div class="technologies">
                                    Pytohn, AWS SDK, AWS CDK
                                </div>
                            </div>
                        </div>
                        <div class="experience-container">
                            <h1 class="work-site">
                                Myngly, Primary Developer
                            </h1>
                            <div class="experience-summary">
                                <div class="work-done">
                                    I worked on a website that allowed customers to monitor and purchase ADs inside the Myngly App! This was in collaboration with my University and granted me a lot of hands on experience with group projects and new technologies such as React!
                                </div>
                                <div class="technologies">
                                    React
                                </div>
                            </div>
                        </div>
                        <div class="experience-container">
                            <h1 class="work-site">
                                Lorem, Primary Developer
                            </h1>
                            <div class="experience-summary">
                                <div class="work-done">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam impedit consequuntur rerum corrupti. Necessitatibus assumenda dignissimos eaque ad error expedita, eos repellat eveniet delectus consectetur iure quia, nulla tempora quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam impedit consequuntur rerum corrupti. Necessitatibus assumenda dignissimos eaque ad error expedita, eos repellat eveniet delectus consectetur iure quia, nulla tempora quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam impedit consequuntur rerum corrupti. Necessitatibus assumenda dignissimos eaque ad error expedita, eos repellat eveniet delectus consectetur iure quia, nulla tempora quos!
                                </div>
                                <div class="technologies">
                                    React, TailWindCSS, Express
                                </div>
                            </div>
                        </div>
                        <div class="experience-container">
                            <h1 class="work-site">
                                Lorem, Primary Developer
                            </h1>
                            <div class="experience-summary">
                                <div class="work-done">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam impedit consequuntur rerum corrupti. Necessitatibus assumenda dignissimos eaque ad error expedita, eos repellat eveniet delectus consectetur iure quia, nulla tempora quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam impedit consequuntur rerum corrupti. Necessitatibus assumenda dignissimos eaque ad error expedita, eos repellat eveniet delectus consectetur iure quia, nulla tempora quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam impedit consequuntur rerum corrupti. Necessitatibus assumenda dignissimos eaque ad error expedita, eos repellat eveniet delectus consectetur iure quia, nulla tempora quos!
                                </div>
                                <div class="technologies">
                                    React, TailWindCSS, Express
                                </div>
                            </div>
                        </div>
    `
    console.log(experience);
    return experience
};

let get_portfolio = () => {
    let protfolio = document.createElement("div");
    protfolio.id = "portfolio";
    protfolio.innerHTML += `
        <div class="two-container">
                            <div class="project-container">
                                <img class="project-img" src="assets/images/budget-app.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        I created a landing page for a budget app website using React and typescript. I managed to fine tune some settings to make it extremly smooth! 
                                    </div>
                                    <div class="project-technologies">
                                        React, Typescript
                                    </div>
                                </div>
                            </div>
                            <div class="project-container">
                                <img class="project-img" src="assets/images/myngly-mv.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        For my senior project we were tasked with creating a web app for a company to be able to host ads on their mobile app. I was the team lead and one of the primary developers.  
                                    </div>
                                    <div class="project-technologies">
                                        React, Agile, Node
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="two-container">
                            <div class="project-container">
                                <img class="project-img" src="assets/images/intern-mv.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        AWS Oncall Bot
                                    </div>
                                    <div class="project-summary">
                                        During my internship at AWS I created an oncall bot meant to help the engineering team during their on-call rotations to have an easier time handling incoming tickets 
                                    </div>
                                    <div class="project-technologies">
                                        Python, AWS SDK
                                    </div>
                                </div>
                            </div>
                            <div class="project-container">
                                <img class="project-img" src="assets/images/myngly-mv.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        For my senior project we were tasked with creating a web app for a company to be able to host ads on their mobile app. I was the team lead and one of the primary developers.  
                                    </div>
                                    <div class="project-technologies">
                                        React, Agile, Node
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="two-container">
                            <div class="project-container">
                                <img class="project-img" src="assets/images/budget-app.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        I created a landing page for a budget app website using React and typescript. I managed to fine tune some settings to make it extremly smooth! 
                                    </div>
                                    <div class="project-technologies">
                                        React, Typescript
                                    </div>
                                </div>
                            </div>
                            <div class="project-container">
                                <img class="project-img" src="assets/images/myngly-mv.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        For my senior project we were tasked with creating a web app for a company to be able to host ads on their mobile app. I was the team lead and one of the primary developers.  
                                    </div>
                                    <div class="project-technologies">
                                        React, Agile, Node
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="two-container">
                            <div class="project-container">
                                <img class="project-img" src="assets/images/budget-app.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. 
                                    </div>
                                    <div class="project-technologies">
                                        React, Typescript
                                    </div>
                                </div>
                            </div>
                            <div class="project-container">
                                <img class="project-img" src="assets/images/myngly-mv.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. 
                                    </div>
                                    <div class="project-technologies">
                                        React, Agile, Node
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="two-container">
                            <div class="project-container">
                                <img class="project-img" src="assets/images/budget-app.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. 
                                    </div>
                                    <div class="project-technologies">
                                        React, Typescript
                                    </div>
                                </div>
                            </div>
                            <div class="project-container">
                                <img class="project-img" src="assets/images/myngly-mv.png"/>
                                <div class="project-description">
                                    <div class="project-name">
                                        Budget App 
                                    </div>
                                    <div class="project-summary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sit blanditiis accusamus, nesciunt placeat quidem voluptate. Corporis commodi atque similique, deserunt laborum, asperiores perferendis praesentium mollitia, maiores natus delectus. 
                                    </div>
                                    <div class="project-technologies">
                                        React, Agile, Node
                                    </div>
                                </div>
                            </div>
                        </div>
    `
    console.log(protfolio.outerHTML);
    return protfolio
}

let window_content = document.querySelector("#window-content");

let about_me_button = document.querySelector("#icon-1");
let experience_button = document.querySelector("#icon-2");
let portfolio_button = document.querySelector("#icon-3");

const get_nav_bar = () => {
    let nav_bar = document.createElement("div");

    nav_bar.innerHTML = `
        <header id="navbar">
                        <div id="about-me-button">About Me</div>
                        <div id="experience-button">Experience</div>
                        <div id="portfolio-button">Portfolio</div>
                    </header>
    `

    return nav_bar;
}

let nav_bar = get_nav_bar();



about_me_button.addEventListener("click", () => {
    window_content.innerHTML = nav_bar.innerHTML + get_about_me().innerHTML;
})


experience_button.addEventListener("click", () => {
    window_content.innerHTML = nav_bar.innerHTML + get_experience().outerHTML;
})

portfolio_button.addEventListener("click", () => {
    window_content.innerHTML = nav_bar.innerHTML + get_portfolio().outerHTML;
})


