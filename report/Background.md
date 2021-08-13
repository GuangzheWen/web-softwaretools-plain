# Abstract

A local pet shop’s owner has been working on developing a website to show his available pet . However, lacking enough knowledge of computer technology led him to the failure unfortunately. He would like our team to help him continue his work and complete successfully in the end.

We are interested in the website and trying to make it more appealing and versatile. Besides, we develop an improved graphical user-interface in order to make it more functional to use based on user research.

Our team carried out sufficient user research before the developing, such as giving out questionnaires, polls and interviews  to the customers who are potentially watching his pet shop online  to find out what they are looking for and what kind of features are mostly wanted. And then, we choose [scrum methodology](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Process.md#agile-scrum-methodology) as our agile mindset to develop the website and collect feedback from users to build user-friendly products.

To maximize the benefits to the pet shop owner, the system is focus on two parts: the need from the owner and the view from customers. As for the owner, he needs the basic operation function upon the website, such as adding, deleting, and editing the information of pets. For the perspective from customers, they want the website has a beautiful UI to give a good impression on them and could be easily used to search their target pets.

In the end,  we put functional modules together which had previously passed the test to build the final page, which is considered to be useful to the owner and to be attractive to buyers.

# Objectives

We will consider two parts - the owner and the customers - to make the website more appealing and functional to use, because the owner of the website (only one person in this example) and buyers who are potentially interested in shopping online must use different features and will tackle problems under different situations.

The owner is the client who will use the app to sell pets, and he is also the person to whom we will deliver the product finally. We need to have a interview with him firstly and figure out what features he wants. Therefore, we should be responsible for him to come up with a reasonable plan to make both happy and get satisfying comment in the end.

Obviously, then we need to get requirements from customers and take it into consideration what they are looking for. As a result, we decide to focuses on understanding user behaviors, needs, and motivations through the project by user research, which  is an iterative process in the demands from users to make it sense for which solutions are proposed. Mike Kuniaysky further notes that it is “the process of understanding the impact of design on an audience.”[1] Moreover, we will collect their feedback for further development in the future.

Here is process the map for our User-Centered design.
![User-Centered Design](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/User-Centered.png)

Besides, since the system is still under active development, we must face the fact that the pet store API is imperfect and some operations remains to be fixed. Most of them are suitable to the owner. like deleting and editing existing pets.

## Checklist

The  checklist against which we can evaluate at last.

- [x] An interviewer with the owner to learn about his attitudes, ideas, and desires.
- [x] Perform Focus Groups[2] methodology to do user research and form the user stories.
- [x] Take the codebase of the pet store and improve pet store api in need.
- [x] Analyze our site according to the results of user research and the interview with customers and the owner.
- [x] Add essential new features to meet the demands from users.
- [x] Unit testing and integration testing with user input to make sure the website could run correctly.
- [x] Do a survey to find out items need to be improved in the next step.
- [x] Scheduled product delivery and get feedback from users.

# System Design

Website development work is a growing aspect of the IT activities within many organizations nowadays.[3] One of the biggest challenges faced by our teams is how to develop user friendly software . When creating a website, the first question thing that we thinks about is what qualities the online shopping website should have.

We believe creating a positive user experience is the key to developing user friendly software. So, we have paid a great deal of time to conduct user research and to collect feedback from them, which could be sufficient grounds to decide every choice in system design.

As what is illustrated by the analysis, the pet shop website should consists of two parts - the buyer mode and the sellers mode. The seller mode is designed for the owner to manage shop pets, like adding or removing them, or even changing their information, while the buyer mode is designed for customers to view pets list or to make transactions by this mode.

Overall user-interface based on user stories and user feedback could be showed in the diagram below, while boxes with a blue background are new pages or alerts, and underlined boxes are components, and green dashed lines indicate interaction events and response links.
![layout_and_interaction](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/layout_and_interaction_logic.png)

We set a pair of buttons in the top right corner of the index, "Buyer" and "Seller", to change the mode where users should login in based on their identity (only the owner could get administrator password), which could be found in the screenshot below.
![two-modes](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/images/two-modes.png)

# Description of all features 

Here is the full description of all features. When we finished a feature, we would tick the box as appropriate to inform others what we have done and what needs to be done next.

## DONE

Following completed features could be found detailed information in report [Features](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Features.md). 

- Basic editing operations for the owner, i.e listing available pets, adding new pets, and deleting a pet. These features are existing but uncompleted when our team took over the project.
- User Authentication. It could be made up of following sub items.
	- Administrator account which need password to login in. Obviously, the owner of the pet shop should get access to Administrator account and be the only one who have the right to edit, add, delete pets lists and even change the orders for customers. So, the administrator is supposed to have unique account to get this special authority when other users cannot.
	- User account register. Customers should register first when they purchase desired pets in order to follow their order details, transportation and so on.
	- User login entry where customers input their user names and passwords to login in their own accounts.
	- User account information page. Show users account information.
	- Modify user information. Users could change their personal information like name and address.
	- Delete user account. Users could delete their own account when they don't need it anymore.
- Modify pets' information
	- Modify pets details. Basic editing operation since the owner may need to change the pets' information owing to various reasons, like changes of pets' appearance or misrepresentation by mistake.
	- Add photos of pets. According to [The Results of User Research](https://github.com/GuangzheWen/web-softwaretools-plain/blob/main/report/Process.md#the-results-of-user-research), customers are eager to have chance of viewing the photos of lovely pets before making a decision.
- Searching pets by category or name. It's quite helpful if the website could filter animals by key words, such as price range, breed, color, to find the targets more quickly.
- Message Pad. Users are able to get instant feedback on the response to each action via Message Pad.

## To-Do List

The following list features which remain uncompleted and require further work.

- [ ] Make orders online. Shopping online through this website can be easy and safe, and customer can make orders whenever and wherever. 
- [ ] Show logistic delivery information of orders. Users could get logistic delivery information from their orders page easily.
- [ ] Help center. Where to find the documentation how to use the website and where to give feedback or report any issues.
- [ ] Communication Tool. Customers and the owner could have a chat with this tool to discuss or bargain.

**References**

1. Usability.gov. 2021. User Research Basics | Usability.gov. [online] Available at: <https://www.usability.gov/what-and-why/user-research.html> [Accessed 3 August 2021].
2. Usability.gov. 2021. User Research Basics | Usability.gov. [online] Available at: <https://www.usability.gov/how-to-and-tools/methods/focus-groups.html> [Accessed 3 August 2021].
3. Taylor, M., McWilliam, J., Forsyth, H. and Wade, S., 2002. Methodologies and website development: a survey of practice. Information and Software Technology, 44(6), pp.381-391.