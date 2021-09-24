module.exports = ({
  basic,
  social,
  skills,
  education,
  experience,
  projects,
  achievements,
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
                <h1 class="header-name">${basic[0].name}</h1>
                <p><span><strong>Email:</strong> </span>${
                  basic[0].email
                }, <span><strong>Contact:</strong> </span>${
    basic[0].mobile
  }, <span><strong>Github:</strong> </span>${
    social[0].github
  }, <span><strong>LinkedIn:</strong> </span>${social[0].linkedin}</p>
            </div>
            
            <div class="resume-body">
                
                <h2 class="section-name"><b>Technical Skills</b></h2>
                <hr/>
                <p> 
                  ${skills[0].skills}
                </p>
                
                <h3 class="section-name"><strong>Education</strong></h3>
                <hr/>
                <p> 
                    <ul class="edu-section">
                        ${education
                          ?.map(
                            (edu) =>
                              `<li><strong>${edu.degree}</strong> in <strong>${edu.major}</strong> from ${edu.university}, [<strong>${edu.startdate} - ${edu.enddate}, ${edu.gpa}</strong>]</li>`
                          )
                          .join("")}
                    </ul>
                </p>
    
                <h3 class="section-name">Projects</h3>
                <hr/>
                <p class="project-section"> 
                    <ul>
                        ${projects
                          ?.map(
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
                          ?.map(
                            (ex) =>
                              `<li><strong>${ex.company}</strong> (${
                                ex.position
                              }, ${ex.startdate} - ${
                                ex.current_job ? "Present" : `${ex.enddate}`
                              }) ${ex.description}</li>`
                          )
                          .join("")}
                    </ul>
                </p>
    
                <h3 class="section-name">Extra Curriculars / Hobbies</h3>
                <hr/>
                <p class=".extra-section"> 
                    <ul>
                        ${achievements
                          ?.map((ac) => `<li>${ac.description}</li>`)
                          .join("")}
                    </ul>
                </p>
            </div>
        </div>
       </body>
    </html>
    `;
};
