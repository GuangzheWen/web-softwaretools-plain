We are intending to indicate the overview of this chapter here at first. This chapter is mainly about features, which are the functions the users will use in the reality. All the features should be created and designed for users, treating users are the center of the whole process. 

The target users of our website are in two separated groups, one is customers group, who are the potential pets-buyers, they are the people who are able to choose online shopping and meanwhile are interested in adopting a pet. The other one should be the pet store host group, or we call it seller. This group probably contains only one person, or perhaps is consist of a couple of members. No matter how many people does it have, it will never have influence on one truth, which is the sellers and buyers must use different features and have to handle problems on different pages.

As above we discussed, our website will be developed by two routes, but synchronized. From the phase of user research, to features choosing, and finally implementing, we are going to keep focus on both two sides. Deciding this working principle have efficiency of development, by avoiding different features for various user groups twisting together, then make the develop process clear, dedicated, and logical. 

Nonetheless, we will definitely not create two websites for two different groups, which looks like a bit counterproductive. Therefore we are preparing to develop a single website which has two mode, switching by a pair of buttons somewhere. In advance of programming we determined that.

# Possible Features

1. For buyers:

2. 1. Reviews from history user.
   2. Pets’ photos showing.
   3. Filtering pets’ categories.
   4. Creating account of the website.

3. For sellers:

4. 1. GUI for editing pets’ information.
   2. Adding pets (already existed)
   3. Modifying pets.
   4. Deleting pets (already existed)
   5. List all pets (already existed)
   6. Searching pets.

5. For both:

6. 1. Message pad showing operations.
   2. Reporting suggestion.
   3. Help center.



**What new feature(s) have we chosen to add ?**

1. Features already exists: (undistinguished)

2. 1. List of pets.
   2. Adding new pet.
   3. Deleting a pet.

3. New features we have chosen to add:

4. 1. For sellers:

   2. 1. Authentication of Seller mode, avoiding customer access wantonly.
      2. Add link button on list pets to show pets details.
      3. Modifying pet’s information.
      4. Uploading pet’s photo URL.
      5. Searching a certain pet.

   3. For buyers:

   4. 1. User account registering.
      2. User login.
      3. User information showing.
      4. Modifying user information.
      5. Deleting user account.
      6. Showing all pets in a list with image.

   5. For both:

   6. 1. Message box to show operations feedback.

In reality, product specialists basically choose add features by user demand research and analysis from professional team. Because making user-centered strategic decisions has commonly became a magic weapon to win in the fierce market competition. Although sometimes some user requests are obscure and not easy to achieve, developer group members still try their best to make it work, by all kinds of testing and exploring, where sparing no effort to realize the user’s vision.



Actually we are going to follow such principles, but there is going to be some minor changes, because of the using of public API, which means we cannot access any part of backend. This constraint is such of strength pulling us back, so we have to be considering existing API’s functions, which is based on feasibility analysis concept.

# Feature 1

## Justification

# Testing

Although, as mentioned above, the public API has many limitations, such as we cannot request it to add or change functionality, there may be bugs that we don't know why, and there may also be problems with a large number of people accessing it resulting in misplaced data. Please don't be disappointed, our team has prepared some surprises.



We've thought about all these issues in advance and won't really ignore them. Although the Brief says that problems caused by bugs in the API will not be scored, in the spirit of programmers who never stop exploring and are keen to pursue perfection, we will use some special code for processing on the front end to prevent some bugs from occurring. You know, if there are bugs that you don't deal with, they affect the overall functionality and you can't hide from them.



The meaning of the word 'special' here is that actual production level development doesn't take this approach, it's a temporary fix and doesn't really address the root cause of the bug in a positive way. This is to prove that we know that the right way to fix a bug is to actively communicate with the back-end developers and explore the problem together. However, due to restrictions on the use of public APIs, we have had to work around this.



The whole process, from before the start, after each feature has been implemented, and then finally taking shape, contains feedback and response policies to the user survey, but in order to focus more precisely on the feature implementation part, I will not describe it here, as I am sure you have read about it in the section above. This distributed writing style will make the article well organized and easy to read.



We will describe our test development process of features in great detail below, so here is a general list of the following to help you read this document. 

1. API features testing.
2. Some API bugs fixing.
3. Features implementing one by one as component.
4. Putting all components together then arrange routing.

#  

APIs are like spanners in the hands of a car mechanic - if you're not familiar with them, it's hard to use them properly. So our first step is to test the API functionality, both to see what they can do and to find out what problems are potentially present in the implementation. Figuring this out will save time in future development and prevent you from being stuck wondering what a bug is about.



I apologize for the title, it may be misleading as we don't have access to API configuration and naturally we can't fix bugs really, but please excuse me while I explain in detail. To use a metaphor, if you are building a wooden table and the drawing says you should use M6 nominal diameter screws, but you only have M7 screws, it's not impossible to use them. So we do the same thing and will do something on the front end to compensate for the inconvenience of a public API.
