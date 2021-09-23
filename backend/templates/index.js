const { getFormattedDate } = require("../utilities/utils");

module.exports = ({
  name,
  email,
  github,
  linkedin,
  mobile,
  skills,
  education,
  experience,
  projects,
  achievement,
}) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet">
        
        <title>Resume Template</title>
        <style>
            *{
                font-family: 'Open Sans', sans-serif;
            }
            .header-name {
                font-size: 15px;
                font-weight: bolder;
                margin-bottom: 2px;
            }
            .section-name {
                font-size: 11px;
                font-weight: bold;
                margin-bottom: 3px;
                margin-top: 5px;
            }
            p, ul, li {
                font-size: 10px;
                text-align: left;
                margin-bottom: 3px;
                line-height: 13px;
            }
            hr {
                margin-top: 0;
                margin-bottom: 2px;
            }
            .edu-section, .exp-section, .extra-section {
                margin-top: 0
            }
    
        </style>
      </head>
      <body>
       
        <div class="container p-3 mx-auto">
            <div class="col-lg-4 mr-auto">
                <h1 class="header-name">${name}</h1>
                <p><span><strong>Email:</strong> </span>${email}, <span><strong>Contact:</strong> </span>${mobile}, <span><strong>Github:</strong> </span>${github}, <span><strong>LinkedIn:</strong> </span>${linkedin}</p>
            </div>
            
            <div class="resume-body">
                
                <h2 class="section-name"><b>Technical Skills</b></h2>
                <hr/>
                <p> 
                    ${skills.map((skill) => `${skill}`).join(", ")}
                </p>
                
                <h3 class="section-name"><strong>Education</strong></h3>
                <hr/>
                <p> 
                    <ul class="edu-section">
                        ${education
                          .map(
                            (edu) =>
                              `<li><strong>${edu.degree}</strong> in <strong>${
                                edu.discipline
                              }</strong> from ${
                                edu.college_or_uni
                              }, [<strong>${getFormattedDate(
                                edu.from
                              )} - ${getFormattedDate(edu.to)}, ${
                                edu.marks_perc_gpa
                              }</strong>]</li>`
                          )
                          .join("")}
                    </ul>
                </p>
    
                <h3 class="section-name">Projects</h3>
                <hr/>
                <p class="project-section"> 
                    <ul>
                        ${projects
                          .map(
                            (prj) =>
                              `<li><strong>${prj.title}</strong>: ${
                                prj.description
                              } ${
                                prj.link
                                  ? `<strong> Project Link - ${prj.link}</strong>`
                                  : ""
                              }</li>`
                          )
                          .join("")}
                    </ul>
                </p>
    
                <h3 class="section-name">Experience</h3>
                <hr/>
                <p class="exp-section"> 
                    <ul>
                        ${experience
                          .map(
                            (ex) =>
                              `<li><strong>${ex.organization}</strong> (${
                                ex.position
                              }, ${getFormattedDate(ex.from)} - ${
                                ex.current_job
                                  ? "Present"
                                  : `${getFormattedDate(ex.to)}`
                              }) ${ex.description}</li>`
                          )
                          .join("")}
                    </ul>
                </p>
    
                <h3 class="section-name">Extra Curriculars / Hobbies</h3>
                <hr/>
                <p class=".extra-section"> 
                    <ul>
                        ${achievement
                          .map((ac) => `<li>${ac.description}</li>`)
                          .join("")}
                    </ul>
                </p>
            </div>
        </div>
       </body>
    </html>
    `;
};
