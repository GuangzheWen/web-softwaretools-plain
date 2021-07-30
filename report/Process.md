# Group Working

# Team Roles

# Sprints

**28th July**: Trying to test the functionality of the API using the framework and plain Javascript. during the process, by comparing the pure response in the chrome debug section, the results of the POSTMAN tool and the response preview obtained from the code snippet, we found that the 'id' obtained from the request in code was distorted in accuracy because of the large int value. 'id' is critical and this bug This bug causes almost all APIs to be unavailable.

**29th July:** Tried using different ways of requesting APIs, e.g. Javascript's fetch method, Angular's HttpClient class and the ajax toolkit, but the resulting 'id's were all out of precision, (showing as not "id":9223372000001031353 but id: 9223372000001031000). At this point I found a third party library called jsonBig, but couldn't import it into Angular without problems, and searching on Google, someone else had exactly the same problem. Might have to try a curveball.

## Timeline

## Meeting Logs

### Meeting 1

#### Time:

11:00am-12:00pm

#### Date:

28th July

#### Place:

Teams

#### Attendees:

Guangzhe Wen, Chongyan Qi, Jiangqi Lou, Alfymora Joseph, Gang Li

#### The Meeting Point:

1. The team members broke the ice and summarized the reasons for the failure of the first group project. We should focus on teamwork, not just code.
2. Discussed *Resit Brief* in detail and familiarized the background of the new project.
3. Ensured each member of group has access to Github repo.
4. The project requirements were analyzed, the roles of team members and the project timeline and steps were simply discussed.
5. It was preliminarily confirmed that the teams meeting would be held daily, and the teams would share their information and progress in the team chat box before the meeting began.
6. The tasks for each member of the day were determined: Guangzhe and Chongyan learn the API, Gang makes timeline and the meeting log, and Alfymora and Jiangqi do background research on the project.

### Meeting 2

#### Time:

11:00am-11:30am

#### Date:

29th July

#### Place:

Teams

#### Attendees:

Guangzhe Wen, Chongyan Qi, Jiangqi Lou, Alfymora Joseph, Gang Li

#### The Meeting Point:

1. Shared the findings of the members, Guangzhe has found a bug on the site to which it was sent, which cannot be added or removed due to the long ID.
2. Discussed agile development methods, Finally chose Scrum.
3. The goal of the first Sprint is clarified, that is, the list of features that users want to add is obtained through interviews and questionnaires, and then the fearture to be developed is determined through research and discussion. The first sprint is scheduled to be completed in two days.
4. Determined the work of the day: Guangzhe fixed the bug that couldn't add or remove pets, Alfy designed the list of questions needed for the interview, and after the list was obtained, everyone on the team needed to find at least one potential user to conduct the actual interview and Keep a written record.

# Continuous Integration