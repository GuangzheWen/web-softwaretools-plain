# Group Working

**Agile Scrum methodology**


Scrum is a framework utilizing an agile mindset for developing, delivering, and sustaining products in a complex environment. Our Scrum Team assess progress in daily scrums of almost 20 minutes. At the end of the sprint, we held two further meetings: the sprint review which evaluate the work we had done, and sprint retrospective which enables us to reflect and improve.

At our group's first meeting, we discussed and compared several different agile development methods, such as Scrum, Kanban, Extreme Programming, Dynamic Systems Development Method and so on.


1. Scrum is well suited to teams with five members.

   - One people is Product owner, propose or adjust strategies based on user requirements, monitor the development process, and assess whether functionality meets expectations.

   - Three people are in the Development Team, propose or adjust strategies based on user requirements, monitor the development process, responsible for back-end feature development, front-end UI design and development, and user research.

   - One people is Scrum master, remove obstacles that hinder the team from delivering the sprint goal and ensure the smooth implementation of Scrum.

   Of course, this is only the ideal situation, our team will be based on the situation of the project and the ideas of each member, timely adjustment of the specific work to keep everyone motivated. Each person's detailed contribution can be seen in Team Roles.


2. The process is very clear and efficient. After the meeting, we created a flow chart to visualize the Scrum process and motivate us to follow it.
   ![Scrum Process](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/Scrum%20Process.jpg)

   - Sprint Planning Meeting. When Scrum begins, there is a Sprint Planning meeting where the Product Owner, Scrum Master, and Dev Team work together to plan what to do for the Sprint. This is usually decided at our last meeting in each Sprint.

   - Daily Stand-up Meeting: Owing to remote cooperation, Instead of the Daily Stand-up Meeting in the scrum, we use online meeting which is held through the group based on the Microsoft Teams. Our Scrum Team assess progress in daily scrums of almost 40 minutes.

   - Review Meeting: At the end of the sprint, we held review meeting, which evaluate the work we had done and enables us to reflect and improve.

**Communication Channel**


Microsoft Teams is main communication channels for us to discuss and organize daily meeting, and the daily minutes of the meeting could be found below. Although team members are spread across multiple time zones, we arrange the regular meeting at proper time in order that everyone could be full of energy to participate it.

Before the meeting starts, each member needs to send his recent progress and discovery to the chat box, so that everyone is familiar with the content in advance. When we are not in meetings, we will also discuss the trivial issues arising from the project in the chat box at any time.

**Special Methods**

- We use Office365 to design the questionnaire. Team members could comment on it and edit it.
- We use Gantt chart to plan the whole project. Team members could update the actual task start and end times.
- We use "Technical Log" to record development process to allow other members to better understand the progress of the project.

# Team Roles

# Sprints

xxxx(After completing all the contents of this section, summarize)

## Timeline

We used the Gantt chart to plan our overall project timeline, which began after our first meeting and was adjusted after the second. This chart is a shared status, and each team member can set the expected start date and cycle for the task he is responsible for, as well as the actual start date and cycle. Of course these tasks and dates are discussed at the meeting.

![Project Timeline](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/project%20timeline.jpg)

## Startup Phase

In this part, on the one hand, we are in the warm-up phase before the formal start of a project. We are familiar with the team members, understand the background of the existing project, make plans and divide the roles. On the other hand, once we have settled on the roles, Guangzhe Wen in charge of technology began testing the API.

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
3. The goal of the first Sprint is clarified, that is, the list of features that users want to add is obtained through interviews and questionnaires, and then the feature to be developed is determined through research and discussion. The first sprint is scheduled to be completed in two days.
4. Determined the work of the day: Guangzhe fixed the bug that couldn't add or remove pets, Alfymora designed the list of questions needed for the interview, and after the list was obtained, everyone on the team needed to find at least one potential user to conduct the actual interview and Keep a written record.

#### Technical Log

**28th July**: Trying to test the functionality of the API using the framework and plain Javascript. during the process, by comparing the pure response in the chrome debug section, the results of the POSTMAN tool and the response preview obtained from the code snippet, we found that the 'id' obtained from the request in code was distorted in accuracy because of the large int value. 'id' is critical and this bug This bug causes almost all APIs to be unavailable.

**29th July:** Tried using different ways of requesting APIs, e.g. Javascript's fetch method, Angular's HttpClient class and the ajax toolkit, but the resulting 'id's were all out of precision, (showing as not "id":9223372000001031353 but id: 9223372000001031000). At this point I found a third party library called jsonBig, but couldn't import it into Angular without problems, and searching on Google, someone else had exactly the same problem. Might have to try a curveball.

**30th July:** After checking a lot of information, I found that loss of precision was a common occurrence in JS and has been a problem since its inception, as the backend uses more Java and has a wide range of precision. JS later introduced Big Int to store huge values beyond the normal int storage range, marked by adding the n-letter to the number. But json() still can't convert values to Big Int when processing a response to an http request, so the best solution so far has been one of two: the first, to let the backend use smaller values. The second, if large values are unavoidable, is to have the backend return a string type id for the corresponding request, which is stored as a string on the front end and then processed as Big Int, thus avoiding loss of precision when json() is used.
But given that both of these better solutions require the cooperation of the backend, however for this project we can only use the existing api, we would not be able to use the above method, but it is good to know its existence.
The alternative, a curveball approach, is to generate our own ids as part of the request body when we create a new pet, avoiding the huge ids generated by the backend. also in order to mark our group-specific pets (as it is still good to have our own markers since we have to share a public api with other groups) we decided to sacrifice the functionality that comes with the status attribute In its place, it is possible to get our unique pets.

## Project Implementation Phase

### Sprint 1: User Research and API Bug Fixed

#### High level overview

Unlike usual, our team's user research will also serve as our Sprint. As a short-term project, getting Product Backlog is not only the work of Product Owner, but also worth participating in by all team members. In order to maximize the profits of pet stores, we must really understand the needs of customers. So in this sprint, finding out what the users want is the goal of our five team members, and put the needs of users into our Product Backlog. On the other hand, the technical staff needs to fix bugs in the functionality already implemented in the current site. Because if it is not fixed, it will adversely affect the features that may need to be added later.

#### Highlights

1. Through user interviews, we need to initially understand what the main needs of users are when using the Pet Shop website, and through analysis, we need to generate a list of website features that users need.
2. The list of features obtained from the first step needs to be presented on a questionnaire and voted on by potential users in order to obtain the priority of the features in their minds.
3. Based on the results of user voting, the team needs to discuss whether the requirements are reasonable and whether the technology can be implemented. Put the results into our Product Backlog.
4. Fix the bugs caused by accuracy issues on the current website.

#### Meeting Log

##### Meeting 3

Time: 10:50am-11:40am

Date: 31th July

Place: Teams

Attendees: Guangzhe Wen, Chongyan Qi, Jiangqi Lou, Alfymora Joseph, Gang Li

The Meeting Point:

1. Guangzhe has shared the current API test progress and is ready to start new features development.

2. Each member described the results of their user interview in detail.

3. Prior to the meeting, Jiangqi had summarized several user stories based on user interview data, and we discussed the feasibility of these requirements during the meeting.

   | User Stories                                                 | Comments                                                     |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | As a new customer, I want enough user review so that I could know if it's a reliable pet store. | Great demand. In fact, there are many shopping sites that also have reviews. But we didn't find functionality in the API, so we couldn't do it in this project. |
   | As Bruce, I want the owner to upload pictures of pets, so I could see pets' appearance and health as it helps me to decide which one to buy. | The group members agreed that pictures of a pet are essential to the website. Nothing shows a pet's characteristics more intuitively than a picture. |
   | As the owner of this shop, I need a relevant and improved GUI for me modify the information of pets easily, so that I’m able to make the site more appealing. | A website that fails to modify information about pets can be a disaster for pet stores. Because none of us can guarantee that information about pets will never change. |
   | As a dog lover, I hope the website could provide the function to search out the list of dogs, so that I focus more on them rather than cats, birds etc. | The search function allows users to find the type of pet they want more quickly, which will definitely improve the efficiency and experience of users using the website. |
   | As a big fan of online shopping, I want to create an account to buy pets, so that my transaction is guaranteed to be fair and open. | This can be considered an advanced feature of the site. But in the early stages of building a website, sending order information to an email seems like a good alternative. |

Finally, we determined the features that need to be added to the website, which are: the feature of authenticating users as sellers or buyers, the feature of uploading pictures, the feature of modifying information, and the feature of querying specified pets. These features are put into our Product Backlog.

4. The feature to be completed in the next Sprint is discussed and decided. That is to authenticate whether the operator is a customer or the pet store owner.

#### Technical Log

**31st July:** As planned yesterday, we use property " status" as our group's exclusive channel to mark our pets. (Because the data in the public api is so messy and difficult to debug at the beginning of the project, we use this approach to simplify debugging for the time being) (because the data in the public api is so messy and difficult to debug at the beginning of the project, we use this approach to temporarily simplify the debugging process and make the data more intuitive).
Secondly, we are still using angular framework as a front-end framework, which is more stable and easier to use, and its framework allows us to better apply MVC theory. We will gradually improve the View at a later stage.
Thirdly, we have really implemented the concept of assigning ids to the front end to prevent getting into the awkward situation of having too large a backend ID and not being able to change the backend api. This step is based on the exclusive channel "status" function, which filters out our unique pets, whose IDs are 8 digits, like 10000012. Fetch all our pets and map the id attribute, take the maximum value and add 1 to the new pet.
Fourthly, we have unfortunately and fortunately found another bug. when sending the same request every second, we get two responses that change periodically, like when we send RRRRRRR and get, ABABABAB. looks like some thing like odd/even response. still don't know why, but Based on our last experience of fixing a bug for 4 hours to no avail, we decided to leave it alone for now and lower its priority to more important functions.
To sum up: we have optimized add, delete and search three features, which is implemented inside framework Angular(being deferent from demo). And fixed bugs (mainly about id precision) in demo website in our own way, because cannot modify api and back-end.

#### The Results of User Research

##### Interview Questions

1. What the most helpful feature do you think when you look for a pet online? (Image, videos, filters, pop up ads, search)

   If the interview said filters, ask: Can you list some of the filter conditions that you usually use? (tags, categories, status, inventories etc.)

2. Do reviews section important for you? Why?

3. Which one do you prefer to sign up to use the website? Compulsory or optional? Why?

4. What will make you trust the website to add your personal details for signing up? Positive reviews, Best Selling, or More ads and marketing?

5. Do you want to see some pets’ food suggestion or other advice for pets? Why?

6. Do you recommend any different feature that you think will value the pets shop website?

##### The Answers
###### Interviewee 1

1. image, categories

2. Yes, because reviews reflect reality about an unknown store. Based on the reviews I can find out if the owner of the shop is a popular one, you know, like how good the pre-sales service is in relation to that. I can also find out about other buyers' shopping experiences, so I can predict my shopping experience and decide whether to deal here or not.  

3. optional, because that is a time-wasting thing to do if I don't really wish to make an order. You know, just walking around is fairly common while people surfing online.

4. Positive reviews

5. yes. There are probably two reasons for this. The first is that the time it takes to find the right pet food at the right price and with the right quality is disgusting. There are a lot of similar products on the market and it can be confusing. The second reason comes from my own experience. I had a cat who was a very picky eater and when I adopted her from her previous owner, she stopped eating after getting a new cat food. So it may be necessary to maintain your pet's original diet, so it is best for the shop to share with the customer his choice of pet food.

6. Suggested features. I would like to be able to categorize the species so that I can focus more on the type of pet I like.

###### Interviewee 2

1. I am a big fan of pets with about 10 years’ experience, and I always have been asked from friends and families to help in looking for pets online. The Image feature is definitely my number one method that I rely on finding a pet as it is pretty similar to a dating app in swiping several profile photos until you find the right match for you. Regarding the useful categories, Filters such as( location, price range, breed, type, color, best seller) make my life easier and save my time while I am looking for a pet online.

2. Absolutely yes. As online market is huge which led to a lot of scams and frauds, reviews are surely a trustworthy method to minimize that danger. I always check reviews about the agencies in other websites or customers who post for the first time before I pay one penny.

3. Optional. Because, Data Protection is a big deal nowadays and everybody needs to be cautious when it comes to expose his details to the online world but I don’t mind to put nick name and address for buying process.

4. I think providing a trustworthy paying methods such as “PayPal” makes feel a bit safe to add my details. Clearly, positive reviews and popularity are pretty important for that matter as well.

5. I think I do. I believe that getting to know more about the pet who I am going to live with on daily basis is extremely important for me as a customer such as their food, medications, trained or not.

6. As a customer, I always make sure to see interactions from the website management before, during and after sales. Answering customers’ questions who are planning to buy and also, answering and showing help for customers who has issues after sale such as delivery, medications, refund, deliveries.

###### Interviewee 3

1. image is the most helpful, honestly the appearance of a pet determines whether I want to buy or not. I can't imagine without pictures, how should people decide

2. For the pet store review, I think it's important. Because I need user reviews to know if it's a reliable pet store. But the site was developed by the store and I don't think it will be objective. As for comments about pets, I don't think it matters. Because every pet is an independent individual, I think the pet that users buy will be different from the pet that I buy.

3. Optional. I figured when I decided to place an order, I was going to pick it up at a pet store. So just send a confirmation email to my email address. There's no need to log in.

4. Best Selling.

5. Yes, but it could be optional. I could search some information from Google. But if the website provides, better.

6. I want to know the details of the pets. Like their birthday, personality and so on.

###### Interviewee 4

1. As a customer, I surely believe showing images is most important feature because it gives me a first impression. I want the owner to upload pictures of pets, so I could see pets' appearance and health, which are of importance when choosing.
2. Absolutely. I could learn a lot from comments on this pet store, such as pet status and services.
3. It depends. When I just skim the information of lovely pets, I do not want to be asked to sign up. But if I choose one to buy, I really need to create an account to follow my order, which might be critical when I need help.
4. Best Selling. Data never tell lies. People will not buy it if the quality disappoint them.
5. Certainly. We could understand their habits by the video.
6. Comments on pets from the owner of this pet shop. On the one hand, we can focus on points he emphasizes since he adopts them for a while and know them better. On the other hand, we can discover how patient the owner is. Pets are more lively if them have patient owner.

###### Interviewee 5

1. There is no doubt that I think the pet image is an important basis for selection. I need images to confirm the appearance and health of my pet. If possible, it is best to use multi angle images.
2. Of course. A pet store with a good reputation will let me rest assured to choose my pet. I will pay attention to the opinions of customers in reviews. This will tell me whether the actual pet is as shown in the image, or whether the price is reasonable.
3. Optional. I think everyone has the right to browse pet images and information through the website. However, you must register an account to buy pets. This will ensure that the transaction is fair and open.
4. More ads and marketing. I think advertisements seen in well-known TV programs or magazines will have higher credibility. On this basis, I will pay attention to the sales and evaluation of pet stores.
5. It will be better. But I don't think it's necessary.
6. Yes. I hope the website can provide rich suggestions about my pet. I think the website should also provide effective quarantine certificates. I need to make sure that pets are free from infectious diseases.

### Sprint 2: Authenticating Users

There is a basic need for all user stories in our Product Backlog. The need is that the website needs to determine whether the person currently operating is customer or pet store owner. Only after this feature is implemented first can we continue the subsequent features. Therefore, there is no specific User story for that Sprint. All user stories from the Product Backlog belong to that Sprint.

#### High level overview

Develop the feature of authenticating users as sellers or buyers, and test it.

#### Highlights

1. Feature 1:
   1. **User Registering**.
   2. Used **API: [post] /user** with body uploaded to create a new user.
2. Feature 2:
   1. **User Login**.
   2. Used **API: [get] /suer/login** with query in path, to login.
   3. But seems like a fake api, because when we test we found that if you input a right username and a wrong password, API will still respond a successful message. We treated it as a bug and leave it there.
3. Feature 3:
   1. **User Information Displaying**.
   2. Used **API: [get] /user/{username}** with var in path to get user information.
4. Feature 4:
   1. **User Information editing**.
   2. Used **API: [put] /user/{username}** with body to upload updated user information.
5. Feature 5:
   1. **User Deleting**.
   2. Used **API: [delete] /user/{username}** to delete an existing user.
6. Feature 6:
   1. **Host Mode Authentication**.
   2. Without using any API, because of lack of source code and further information, so we have to use this method instead.

#### Meeting Log

##### Meeting 4

Time: 11:00am-11:40am

Date: 4th August

Place: Teams

Attendees: Guangzhe Wen, Jiangqi Lou, Alfymora Joseph, Gang Li, Chongyan Qi

The Meeting Point:

1. Guangzhe has demonstrated the authentication capability by sharing the desktop. We discussed the specifics of the implementation and all agreed that the feature worked very well.
2. The test method was discussed and the final decision was made to ask Allison.
3. Discussed how to optimize the front end of this feature from UI and UX.
4. Determined the feature to be made for the next Sprint. That is modifying the information, including upload picture for pet shop owner.
5. We discussed the need for the rest of the team to continue to research the background while developing the back end and front, and to continue to dig for user stories to build our Product Backlog.

#### Technical Log

**3rd Aug:** Firstly, after communication with Allison, we got inspired then successfully fix a bug we found above: for retrieving pets APIs, there seems like two side of backend because of we received alternant Response when test the API. We fixed it by making a Request twice a time, which will create a pair of synchronized  backend, though it has two back-end. Finally we got two totally same backend, which won't impact front-end features any more.

Then, we have used the tested API of user category to implement demonstrations for features as following, user registering, user login, user information displaying. By using components and HttpClient built-in tools of Angular.

**4th Aug:** Continuing on completing authentication, we decided that the website should have two mode: one is made for customer, the other is designed for the host of the pet store. On the mode Customer-side, added features like modifying user information and deleting user account. On the mode Host-side, add an authentication page to let host to input password meanwhile avoiding customer logging in then modifying pets data, after all only host can edit the pets data. Apart from these, the logic of traveling among the components also need to be designed, which we do so.

### Sprint 3: Modifying Pet Information

#### User Stories

Story 1: As Bruce, I want the owner to upload pictures of pets, so I could see pets' appearance and health that are of importance when deciding which one to buy.

Story 2: As the owner of this shop, I need a relevant and improved GUI for me modify the information of pets easily, so that I’m able to make the site more appealing.

#### High level overview

Develop the feature of modifying pet information, including uploading the pictures of pets, and test it.

#### Highlights

1. Feature 1:
   1. **Seller-Pets list**.
   2. Used **API: [post] /user** with body uploaded to create a new user.
2. Feature 2:
   1. Seller-**Pet's details**.
   2. Used **API: [get] /suer/login** with query in path, to login.
   3. But seems like a fake api, because when we test we found that if you input a right username and a wrong password, API will still respond a successful message. We treated it as a bug and leave it there.
3. Feature 3:
   1. **Seller-Modify pet's information**.
   2. Used **API: [get] /user/{username}** with var in path to get user information.
4. Feature 4:
   1. **Buyer-Pets list**.
   2. Used **API: [put] /user/{username}** with body to upload updated user information.
5. Feature 5:
   1. **User Deleting**.
   2. Used **API: [delete] /user/{username}** to delete an existing user.
6. Feature 6:
   1. **Host Mode Authentication**.
   2. Without using any API, because of lack of source code and further information, so we have to use this method instead.

#### Meeting Log

##### Meeting 5

#### Technical Log









### Sprint 4: XXXXXXXX

Story 1: As a dog lover, I hope the website could provide the function to search out the list of dogs, so that I focus more on them rather than cats, birds etc.

# Continuous Integration
