# Group Working

# Team Roles

# Sprints

## Timeline

We used the Gantt chart to plan our overall project timeline, which began after our first meeting and was adjusted after the second. This chart is a shared status, and each team member can set the expected start date and cycle for the task he is responsible for, as well as the actual start date and cycle. Of course these tasks and dates are discussed at the meeting.

![Project Timeline](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/project%20timeline.jpg)

## Startup Phase

In this part, on the one hand, we are in the warm-up phase before the formal start of a project. We are familiar with the team members, understand the background of the existing project, make plans and divide the roles. On the other hand, once we have settled on the roles, Wenzhe and Chongyan in charge of technology began testing the API.

#### Meeting Log

##### Meeting 1

Time: 11:00am-12:00pm

Date: 28th July

Place: Teams

Attendees: Guangzhe Wen, Chongyan Qi, Jiangqi Lou, Alfymora Joseph, Gang Li

The Meeting Point:

1. The team members broke the ice and summarized the reasons for the failure of the first group project. We should focus on teamwork, not just code.
2. Discussed *Resit Brief* in detail and familiarized the background of the new project.
3. Ensured each member of group has access to Github repo.
4. The project requirements were analyzed, the roles of team members and the project timeline and steps were simply discussed.
5. It was preliminarily confirmed that the teams meeting would be held daily, and the teams would share their information and progress in the team chat box before the meeting began.
6. The tasks for each member of the day were determined: Guangzhe and Chongyan learn the API, Gang makes timeline and the meeting log, and Alfymora and Jiangqi do background research on the project.

##### Meeting 2

Time: 11:00am-11:30am

Date: 29th July

Place: Teams

Attendees: Guangzhe Wen, Chongyan Qi, Jiangqi Lou, Alfymora Joseph, Gang Li

The Meeting Point:

1. Shared the findings of the members, Guangzhe has found a bug on the site to which it was sent, which cannot be added or removed due to the long ID.
2. Discussed agile development methods, Finally chose Scrum.
3. The goal of the first Sprint is clarified, that is, the list of features that users want to add is obtained through interviews and questionnaires, and then the fearture to be developed is determined through research and discussion. The first sprint is scheduled to be completed in two days.
4. Determined the work of the day: Guangzhe fixed the bug that couldn't add or remove pets, Alfy designed the list of questions needed for the interview, and after the list was obtained, everyone on the team needed to find at least one potential user to conduct the actual interview and Keep a written record.

#### Technical Log

**28th July**: Trying to test the functionality of the API using the framework and plain Javascript. during the process, by comparing the pure response in the chrome debug section, the results of the POSTMAN tool and the response preview obtained from the code snippet, we found that the 'id' obtained from the request in code was distorted in accuracy because of the large int value. 'id' is critical and this bug This bug causes almost all APIs to be unavailable.

**29th July:** Tried using different ways of requesting APIs, e.g. Javascript's fetch method, Angular's HttpClient class and the ajax toolkit, but the resulting 'id's were all out of precision, (showing as not "id":9223372000001031353 but id: 9223372000001031000). At this point I found a third party library called jsonBig, but couldn't import it into Angular without problems, and searching on Google, someone else had exactly the same problem. Might have to try a curveball.

**30th July:** After checking a lot of information, I found that loss of precision was a common occurrence in JS and has been a problem since its inception, as the backend uses more Java and has a wide range of precision. JS later introduced Big Int to store huge values beyond the normal int storage range, marked by adding the n-letter to the number. But json() still can't convert values to Big Int when processing a response to an http request, so the best solution so far has been one of two: the first, to let the backend use smaller values. The second, if large values are unavoidable, is to have the backend return a string type id for the corresponding request, which is stored as a string on the front end and then processed as Big Int, thus avoiding loss of precision when json() is used.
But given that both of these better solutions require the cooperation of the backend, however for this project we can only use the existing api, we would not be able to use the above method, but it is good to know its existence.
The alternative, a curveball approach, is to generate our own ids as part of the request body when we create a new pet, avoiding the huge ids generated by the backend. also in order to mark our group-specific pets (as it is still good to have our own markers since we have to share a public api with other groups) we decided to sacrifice the functionality that comes with the status attribute In its place, it is possible to get our unique pets.
## Project Implementation Phase

### Sprint 1: User Research

#### High level overview

In order to maximize the profits of pet stores, we must really understand the needs of customers. So in this sprint, finding out what the users want is the goal of our five team members.

#### Highlights

1. Through user interviews, we need to initially understand what the main needs of users are when using the Pet Shop website, and through analysis, we need to generate a list of website features that users need.
2. The list of features obtained from the first step needs to be presented on a questionnaire and voted on by potential users in order to obtain the priority of the features in their minds.
3. Based on the results of user voting, the team needs to discuss whether the requirements are reasonable and whether the technology can be implemented.

#### Meeting Log

#### Technical Log
**31st July:** As planned yesterday, we use property " status" as our group's exclusive channel to mark our pets. (Because the data in the public api is so messy and difficult to debug at the beginning of the project, we use this approach to simplify debugging for the time being) (because the data in the public api is so messy and difficult to debug at the beginning of the project, we use this approach to temporarily simplify the debugging process and make the data more intuitive).
Secondly, we are still using angular framework as a front-end framework, which is more stable and easier to use, and its framework allows us to better apply MVC theory. We will gradually improve the View at a later stage.
Thirdly, we have really implemented the concept of assigning ids to the front end to prevent getting into the awkward situation of having too large a backend ID and not being able to change the backend api. This step is based on the exclusive channel "status" function, which filters out our unique pets, whose IDs are 8 digits, like 10000012. Fetch all our pets and map the id attribute, take the maximum value and add value (+2 here to try and avoid another bug) to the new pet.
Fourthly, we have unfortunately and fortunately found another bug. when sending the same request every second, we get two responses that change periodically, like when we send RRRRRRR and get, ABABABAB. looks like some thing like odd/even response. still don't know why, but Based on our last experience of fixing a bug for 4 hours to no avail, we decided to leave it alone for now and lower its priority to more important functions.
To sum up: we have implemented add, delete, change and check, five functions, where the query can be done by id for a single pet, but also past the pets list.

# Continuous Integration
