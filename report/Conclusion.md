# Summary

In the following, I will present a summary of this group project from two perspectives, one from a product perspective and one from a teamwork perspective.

**Product:**
We added six new API-related functions through six API calls, modify pets, register, login, get account info, delete account, modiy account, and enhanced the other three regular functions.

The user interface of the website has also been carefully designed and tested for user experience. The final version of the site was further optimised in a user test feedback session to implement a search function to meet the needs of buyers, with the ability to fuzzy search for pets by name or category.

As a result, the site is better accomplished from both a functional and UI perspective, with a high number of APIs used (including the old ones) of nine.

**Team:**
On the one hand, it has to be mentioned how much agile development helped us to complete the project quickly. On the other hand, test-driven development has been a highlight of our project, one for feature-based API testing and one for overall user testing of the site based on the experience used.  The former guarantees our development schedule and the latter ensures that we do not deviate from our customer-centric development philosophy.

In addition to this, a clear division of labour and careful planning allows the developers to focus more on the use of the Angular framework, the use of the MVC pattern and the practice of modular design. The product specialists focus on collecting user feedback, combining theories of human-computer interaction with proper requirements' analysis, and showing the developers the way to avoid detours.

The final result was a website with two modes of application (buyer and seller). The seller has a user-friendly GUI and can manage the pet database by adding, deleting, modifying and searching through authentication. The seller has the option to query the pet list through filtering and can even have functions such as managing accounts as well.

If we have further to go in the future, we will add development of the order and location sections to make this site more towards a true production level. 

# Analysis

## Project Objectives

Did we meet our project objectives?

Overall, our team successfully achieved the initial objectives and the project is well done to be given to the owner.

1. Design and build a functional pet shop website with interviews

Absolutely, running a survey is a quick and relatively easy way to get data about users. We did interviews with users and get valuable resutls (you can find them [here](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Process.md#the-answers)), which is essential and important reference of our ground when we make any plans.

Then we follow the four stages below to create the pruduct that delights end-users.
![Survey-Process](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/Survey-Process.png)


2. Complete essential API and fix bug of operations that return inconsistent results

As mentioned before, the petstore API is imperfect and some operations return inconsistent results, which may lead to limitations, such as we cannot request it to add or change functionality. Moreover, there may also be problems with many people accessing it which results in misplaced data.

We've thought about all these issues in advance and won't really ignore them because they will affect the overall functionality and we can't hide from them.

Features we've added and fixed are described [here](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Background.md#description-of-all-features). Guangzhe brilliantly completed the unit tests for all. See more information in [Testing](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Features.md#testing).

3. Develop a relevant and improved graphical user-interface for users

Of course, we have done well in building an improved GUI for buyers and sellers. Enjoy the beautiful interface.

<img src="https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/index.png" width = "70%" />

For more information refer to [Final UX](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Front%20End%20UX.md#final-ux).

4. Demonstrate the website is satisfactory and attractive

Success of any software product depends upon the kind of user-experience it offers. We always keep the end-user in mind during the development process. We may develop a totally different system in the future, one criterion that every software is judged upon is whether it is user-friendly, despite having unique functionalities and features.

So we offered our initial website to potential users to collect their opinions and suggestions. Then we discuss their ideas internally. If they are reasonable, we decide to add or modify the sections accordingly. Here are features we added to make the website satisfactory and attractive after the feedback.

- User request to add a search function
- User request to change the search function from an exact search to a fuzzy search
- Post an example of input next to the find box
- FIxed searching input as case-insensitive

5. Engage in group work to get skills how to build a user-friendly website with group practice

It is essential for us to understand our development is based on a team if teams to be high-performing. Essential engineering practices are always behind the best software that humanity has produced. In this way, we spend a new section to introduce our group practice. Please click [Group practice](#jump1) for more details.

## Checklist

Broadly, we finished the targets we set before. Every task is achieved with sufficient evidence.

- [x] An interviewer with the owner to learn about his attitudes, ideas, and desires.
- [x] Perform Focus Groups[2] methodology to do user research and form the user stories.
- [x] Take the codebase of the pet store and improve pet store api in need.
- [x] Analyze our site according to the results of user research and the interview with customers and the owner.
- [x] Add essential new features to meet the demands from users.
- [x] Unit testing and integration testing with user input to make sure the website could run correctly.
- [x] Do a survey to find out items need to be improved in the next step.
- [x] Scheduled product delivery and get feedback from users.

# Reflection

The development process has been a valuable learning opportunity for us, and we have learnt a lot from this new experience - enjoying developing user-friendly software with others - in this group project, especially affected by the coronavirus pandemic. We totally agree that the creating a positive user experience is the key to developing user-friendly software.

## Group practice

We focused a lot of our energy into engaging in group work with notable challenges, not only coding but also talking to people - the owner, customers and team members. As mentioned, this is a new and changing process for us. Individuals could finish their own coursework on his or her own pace while it is impossible occurred in group working. For teams to be effective, the people in the team must be able to work together to contribute collectively to team outcomes. In other words, in teams, the internal characteristics are the people in the team and how they interact with each other.

Here we would like to display our <span id="jump1">group practice</span>.

### Regular meeting

When our team first got together, we all were confused since we were assigned randomly after receiving the resit email. Gang advised we could have an online meeting to get familiar with each other. But just as Jiangqi once said:" We likely sit around in front of the computers and look at each other, not knowing how to begin in our first meeting." Initially we are not likely a team.

However, team effectiveness is enhanced by daily meeting at the beginning. Over time, we were getting to know each other, to know what to expect from each other, and to know how to divide the labor and assign tasks. Through this process, we begin to operate as a team instead of a collection of individuals.

Although we cannot organize daily meeting as planned because of the fact it will affect our normal work progress, we still try our best to have regular meeting which is recorded by Gang in [Process](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Process.md).

### Continuous Integration

Continuous Integration (CI) is a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily. Luckily, we were committing the work to a version control system during the coding process.

We use GitHub's remote repository to keep our code and agree that GitHub is perfect for team development, where members can share contributions to it. In our opinion, GitHub is more than just a web cloud drive, it is a platform for multiple people to work simultaneously, providing sharing features, version control features, and member contribution statistics.

### User research

To ensure that a new software is successful, the area that developers need to focus on most is user experience. User research is the methodic study of target users, so we are able to have the sharpest possible insights to coordinate our work to make a user-friendly product.

To maximize the profits of pet stores, we must really understand the needs of users, not only the customers, but also the owner.

Here is a part of our [survey](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Process.md#the-results-of-user-research), for example:

> Questions
> 1. What the most helpful feature do you think when you look for a pet online? (Image, videos, filters, pop up ads, search)
>    If the interview said filters, ask: Can you list some of the filter conditions that you usually use? (tags, categories, status, inventories etc.)
> 2. Do reviews section important for you? Why?
> 3. Which one do you prefer to sign up to use the website? Compulsory or optional? Why?
> 4. What will make you trust the website to add your personal details for signing up? Positive reviews, Best Selling, or More ads and marketing?
> 5. Do you want to see some pets’ food suggestion or other advice for pets? Why?
> 6. Do you recommend any different feature that you think will value the pets shop website?

We chose individuals to have interviews with them and had records of the conversation after permission, which is concluded in [The Answers](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Process.md#the-answers).

During this process, we learned to listen to users’ words in their perspectives, and covered any new problems and spot trends to figure out user stories. The user stories are clear on our [third meeting](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Process.md#meeting-log-1), which is really helpful for us to create software that users find desirable and easy to use.

## Teamwork

### COVID-19 effect

As the coronavirus outbreak has intensified last year, the negative consequential effects begins to appear. Obviously, our team work was affected by the COVID-19, which could be concluded in two aspects.

On the one hand, people can not have a face-to-face talk owning to relevant rules, and some members have returned to their country rather than staying in the Bristol. This increased the cost of exchanging ideas and discussion with team members. Besides, it has presented challenges when we did user research over time through interviews.

On the other hand, the pandemic impacted our physical and psychological health indeed. Some left the Bristol and returned to their home may face the self-isolation, which made it more difficult to stay enthusiastic and motivated throughout the project, specially in front of the computer screen for a whole day. Alfymore even felt uncomfortable after vaccine.

Under this difficult period, we have tried our best to tackle the problems. Regular meeting prevented us from feelings of isolation lonely as all group members were able to think aloud study and talk with each other online if he wants. If somebody feels uncomfortable today, we'd like to comfort him, persuade him to have a rest with the absence for today's meeting. He will get the information and his assigned task from the meeting log or the chat on Teams.

In a conclusion, COVID-19 cause troubles for us, but we share our feelings and encourage each other to face the problems through this tough period.


### Communication Tools

In spite of COVID-19 restrictions and working remotely, we found that our communication channels worked fluently and finished our teamwork after all.

- Microsoft Teams is main communication channels for us to discuss and organize daily meeting. We arrange the regular meeting at proper time in order that everyone could be full of energy to participate it geiven the different time zones.

	<img src="https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/Teams.png" width = "30%" />

- Before the meeting starts, each member needs to send his recent progress and discovery to the chat box, so that everyone is familiar with the content in advance. When we are not in meetings, we will also discuss the trivial issues arising from the project in the chat box at any time.

- The questions of interviews was designed and shared by Microsoft 365, so we could edit it together and comment whatever we prefer to express own thoughts.

- We use Gantt chart to plan the whole project. Team members could update the actual task start and end times.

- "Technical Log" is necessary to record development process, since other members will have better understanding of the progress.

- Owing to the fact that most of our team members are Chinese, the Chinese use WeChat to share opinions, one kind of immediate communication tool which is popular in China. Although immediate communication sometimes seems to be annoying, but it's quite suitable during short-time development.

	<img src="https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/wechat.png" width = "30%" />

## Personal feelings

> This project gave me a new experience. Fixed topics and random teammates add a lot of challenges to this project, but this is the charm of group cooperation. In future work or life scenes, we can never choose the environment we are familiar with 100%, there is always a process of adaptation. Fortunately, all five members of the team were very active in this project. I was mainly responsible for the management and progress control of the whole project, so I often communicated with each team member about their work and difficulties, and tried to solve problems together, which made me feel the importance of team communication for the completion of the project. I was also very happy to participate in the user survey and chat with users, which made me feel that our project is very meaningful. What surprised me more was that, through group cooperation, the seemingly grand work could be finished with high quality in such a short period of time. It also helps me understand what Allison said to me earlier, that we have the ability to do more than just code!
> 
> -- Gang Li

> That was a privilege to work with different friendly course mates in a project.
> I have been learning different skills through this experience. I can tell that group working can make study more efficient and fun. Working with my team project enables me to pool my ideas and see problems from different perspectives. In my group, we have achieved more tasks that couldn’t have been accomplished by myself. During that experience, I have managed to develop some essential skills such as:
> Effective communication: As we agreed to meet on daily basis at 11am via teams to discuss the project’s aspects and each one’s progress. Also, we were always available online during the day to share questions relevant to the project.
> Group roles: All five members have got a specific role to be able to monitor our progress.
> Group working is likely to become an important aspect of our working life.
> 
> -- Alfymora Joseph

> To be honest, it is really a hard period for me and I often felt depressed at the end of July. But the regular conversation in this group encourage me and keep me busy so that I have chance to forget something unhappy. I hope everyone in our group could eat healthily, have a good sleep routine, and get outside for fresh air and exercise each day. These things can all have a positive effect on your mood. Working in a new team is so amazing!
> 
> -- Jiangqi Lou

> What was different this time compared to the last group project was that I had an extremely strong sense of involvement. With the help of Gang's plan, each of us successfully completed our part of the project. It gave me a taste of the sweetness of teamwork, which is the happiness of having your head buried in a job you love and are good at. In the past, I had a fluke mentality, expecting my teammates to do more, this time I adjusted my mindset and tried to do what I could to contribute to the team, and it was in this team spirit that each of us got the job done. I also saw how we helped each other out, for example, discussing bugs when we didn't know how to fix them, helping someone upload a GitHub CLI when it wasn't working well, and so on. This Resit has allowed me to discover new possibilities for my future work, and thankfully, it has been worthwhile and has made me feel that I am more deserving of this degree.
> 
> -- Guangzhe Wen

> This project made me more deeply understand the significance of the team project. Different from the previous project, the project team has a clearer purpose and detailed records. Under Gang's organization, we hold regular meetings to discuss and improve the project. Make a schedule to make your work more efficient. What I got was front-end design, which was my last role in the team. Therefore, my work is also more efficient, and I discuss with the team members in the meeting to get a better plan. The charm of the team is to let different people learn from each other and make progress in cooperation. This summer vacation has been enriched. I think such cooperation is worth it.
>
> -- Chongyan Qi
