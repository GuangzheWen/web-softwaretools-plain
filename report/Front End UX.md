<h1>Content: </h1>

[UX Development](#1)

&emsp;[1. Wireframes showing planned design](#1.1)

&emsp;[2. Overall interaction logic](#1.2)

&emsp;[3. Design evolution overtime](#1.3)

[Final UX](#2)

&emsp;[1. Theoretical support](#2.1)

&emsp;[2.Frontend developing process](#2.2)

&emsp;[3. Documents](#2.3)

[Design Choices](#3)

[Evaluation](#4)

&emsp;[1. Before prgramming](#4.1)

&emsp;[2. Within prgramming](#4.2)

&emsp;[3. Positive feedback loop among versions](#4.3)



<h1>Body:</h1>

" People think it's this veneer -that the designers are handed this box and told,'Make it look good !'That's not what we think design is .It's not just what it looks like and feels like .Design is how it works. " on New York Times from Jobs. Some people think that design means appearance, and that is certainly true, but it would be a mistake to think that design is just about appearance. Because if you dig a little deeper, you'll find that the heart of good design is how it works.

In addition to having the presentation through the gorgeous design and the detailed interaction logic, good product design should also have the functioning of the product itself as its core. For one thing, only by achieving the functionality that users desire can you put your creativity to good use, and for another, a pleasing interaction design is more complex and functional than simply how it looks. Throughout the process of practice, we have to go through countless encounters with users and constantly improve and polish our products before they become treasures.

Our project was carried out with this in mind. In the previous section of the report, Features.md, we have described in detail how we have modularised the implementation of the functionality and its testing part. The first tasks have been completed, but we can't say that it has been smooth sailing and we have found many unexpected bugs in the process. Fortunately, our test-oriented development and use of the principles of modular design made it possible to work on a clear route up front, which allowed each problem to be focused on independently and avoided becoming a highly coupled problem that was twisted together.

In the following, we describe how we put together functional modules that had previously passed the test. The integration was not a simple pile-up, but a matter of thinking through the interaction logic, listening to the user and combining it all together organically. Finally, with the right cosmetic touches, the front-end development is complete.

# <a name="1"></a>UX Development

Whether it is the manufacture of machinery or the construction of a house on site, drawings are required as a basis for realisation. The same is true for our software development. Drawings enable part of the work to be broken down and completed in advance, making the rest of the realisation process industrial and efficient. Drawings are theoretically based, thought out and judged, and verified as correct when they are drawn. So at the stage of implementing there is no need to think about whether what you are doing is correct or why you are doing it, because the work has already been done before, so you can just "close your eyes" and do it. This chapter we are going to show process of generating the "drawing".

## <a name="1.1"></a>Wireframes showing planned design

The event response logic and planning layout is like an invisible thread that strings the pearls of the tested functional modules together to make a necklace.

The design of the functional modules has already been described in detail in the FEATURES section and will not be mentioned here in order to avoid repetition. I will now describe in detail, literally, the layout of the components within the page and their positions, the introduction of event-responsive components, and the logic for jumping between screens.

In this section, we have shown almost everything in one picture. It may seem a bit strange to represent everything in just one picture, but I will explain it to you. Of course, it is best to read this in conjunction with the next two sections, as this will help you to understand what I am describing.

In this session, we had previously chosen to get the team together and draw out the layout of each page on paper, responding to the changes in the layout afterwards, and then use the video format to manually turn the pages to show the interaction logic. It would then be great to demonstrate the video or GIF images in this session. Unlike in the past we won't be using this approach, due to the pandemic we are all spread out on opposite ends of the globe and can't work together face to face. We have found in practice that we can achieve the same effect if we present it in the form of diagrams and text to share with each other. The diagrams and text, on the other hand, are more suited to appear in a paper or report, but of course, it is a challenge for us and an opportunity to improve ourselves.

![wireframe](../images/wireframe.png)

We have used three colours to differentiate and emphasise different details. Roughly speaking, we use black to indicate existing frames, red circles to indicate interactable areas, red arrows to indicate actions in response to interactive events, such as page changes or jumps, and blue to indicate new sections of content on the page if the page does not jump in response to an event. If the page as a whole changes in response to an event, we use black to indicate the new page.
Having reached an agreement on the role of markup, this diagram is clear at a glance.

- Header and Buyer/Seller Buttons

At the top, in the title bar, we have an Icon and Title, and to the right of them are a pair of buttons Buyer and Seller, which toggle the site mode, as we believe that the site will have two user groups, one for buyers and one for sellers. Buyers will be viewing pet listings or making transactions on this site. The seller will manage the pets he owns on this site, adding or removing them, or even changing their information. Obviously, the needs of buyers and sellers are completely different and need to be split independently, so we use this pair of buttons to switch between the two modes of the site to present to the corresponding people.

- Buyer mode

Under the header, the main content will be presented. This is because we have created this website for the seller, who will use it to serve his customers, the buyers. In addition, the buyers will be a group with a huge number of people. We decided to give priority to the buyer's experience, which is reflected in the fact that the default mode displayed when opening the site is buyer mode and not seller mode.

In buyer mode, the page will be split into two parts, left and right, with the left side occupying a larger proportion of the width, in order to display more visual and clear information about the pet. The right-hand side takes up a smaller proportion of the width and is used to display information related to the user's account.

1. Pets list

   The pet list area will consist of a top and bottom section, at the top will be a control for filtering pets and at the bottom will be a long list of pets consisting of a number of individual pet information cards.

   1. List of pet's card

      The pet information cards are uniform in size and shape and show information about each pet, including id, name, type and picture. Of course, a buy button may be added later, but we are not considering it at this time. 

   2. Filtering by user input

      Users can filter pets by name or species, the name and species can be entered entirely by themselves and then simply click the find button to filter the pets below into the category they want to see. Clicking the clear button restores the list to its original state.

2. Account area

   In this area, users can perform a number of operations related to their accounts, such as registering, logging in, modifying information and deleting accounts. 

   1. Register and Login

      This is because the login function is considered to be used much more frequently than the registration function. So by default the login page is displayed and if the user needs to register a new account, they need to click on the register button to register a new account by username, name and password.
      The login function will check if the login account exists and if the password is correct, and if there is a problem, it will respond to the corresponding alert event, and if the account password is correct, it will jump to the account details page.

   2. Account information

      On this page the user can see their account information and can also choose to click on modify to change their account information or delete their account. After modifying your account information you should be redirected back to the details page and after deleting your account you should be redirected back to the login page as this account no longer exists.

- Seller mode

  In order to prevent ordinary users from being able to access the buyer's mode, we have added a password verification link so that only sellers who know the password can access the following content, which we will call the back office of the pet shop, as it is here that sellers are able to have a graphical interface to add, delete and modify pets. As the public API does not have a pathway for seller authentication, we have fixed the password on the front end for now, so that if more development steps are available in the future, the authentication API can be easily added.

1. Authenticating page

   This is a page with only one input box, simple and clean, without any other information to display. If the wrong password is entered, the browser should send a corresponding alert box, and if the password is correct, access to the back office of the pet shop is confirmed.

2. Pets managing page

   1. Add a pet

      In this pet shop back office graphical interface you will see two sections, top and bottom, with an input box for creating new pets. All you need to do is add the pet's name to the input box and click the add button. This is the most intuitive and logical way to create a new pet based on its name, and then if you need to add additional information to the pet, this is done later.

   2. Pets list and modify pet's information

      Apparently this is the second half of this page, which can be infinitely long, as long as it depends on how many pets there are. Below this we can see a column of pet information cards, each card shows all the information about a pet, including id, name, species, picture, plus a delete button which the seller can click to remove the pet. Of course, if the seller needs to change the pet's information, simply click on the area of the card other than the delete button and the page will be linked to another path where the individual pet's details will be displayed along with an edit input box and a save button.

## <a name="1.2"></a>Overall interaction logic

While the previous section focused on page composition and layout, this section will focus on the links between its components and between pages.

To more clearly represent the page interaction logic, we will use another diagram to show it. Without further elaboration, let's go straight to the diagram.

![image-20210810224824382](../images/layout_and_interaction_logic.png)

Those boxes with a blue background are new pages or alerts, the underlined boxes are the components that this page has, and the green dashed lines indicate interaction events and response links. If you look at the map carefully, from the start to the ends, it will be very easy to understand all the operations of our website. If you were confused in the last section, this should make everything clear to you here. We like this graphical presentation and we are sure you will too.

## <a name="1.3"></a>Design evolution overtime

In this section we will show the evolution of our design in the form of a screenshot set.

- The initial state: 

  Only the necessary functions and button logic are completed, the diagram below shows all the pages.

![image-20210811005710592](../images/UI_plain.png)

- First steps taken:
  Two developers work separately on the design, one starting with the overall framework and one with the detailed features and subsequent integration. As the Swagger API uses a black and green colour scheme, we continued the visual style to achieve a uniform visual effect.

![image-20210811011302928](../images/UI_first_dev.png)

- Buyer mode - Pets list:

  The diagram below shows the complete iterative upgrade process of the pet list in buyer mode.

![image-20210811042110290](../images/UI_buyer_petsList_evolution.png)

- Buyer mode - Account area:

  The diagram below shows the complete iterative upgrade process of the account area in buyer mode.

![image-20210811011613230](../images/UI_buyer_mode_account_evolution.png)

- Seller mode: 

  The diagram below shows the iterative process of the authentication page, the pet listing, and the edit message page in seller mode.

![image-20210811012158784](../images/UI_Seller_mode_evolution.png)

- Message box：

  The diagram below illustrates the evolution of the design of the Message Box, both in terms of its appearance and the improved readability of the text messages.

![image-20210811012209714](../images/UI_message_box_evolution.png)

# <a name="2"></a>Final UX

In the previous section the results of our user interface were presented, in this section we describe the more technical aspects, some of the code and documentation including the use of the framework.
Along with this task, we received the demo website, which does not use the framework, but only pure JavaScript. pure JavaScript can certainly implement this page, but in general, it is not as beneficial as the framework, where we benefit the most from the modular design and the MVC design pattern.

## <a name="2.1"></a>Theoretical support

We developed frontend by using a coulple of principles, MVC design model, test-driven development, Modular design, Parallel development. With using Angular framework, we can create components for each feature, in which there are mainly three files, *-component.html, *-component.css, and *-component.ts. HTML and CSS file construct the view of one component, while TS file is the controller for the components. 

All the components are the modules in the practise of Modular design, and each component has a View and a Controller. All the Model of MVC is implemented in Data services of Angular. So component is independent, Data is independent, which means eveything could be irrelevant and we can develop each of them paralleled. This way we can save development time and speed up the development process tremendously when we are in a team, because the work is divided up to the point where each person does different jobs at the same time, without affecting each other, and then integrates them together.

![image-20210811022008486](../images/Principles.png)

The diagram above shows the time flow from left to right, with the top and bottom shown side by side to indicate that tasks can be done at the same time.

## <a name="2.2"></a>Frontend developing process

![image-20210811030436987](../images/process_dev.png)

## <a name="2.3"></a>Documents

First, we should construct the data model we need to facilitate the extraction of valid information from the responses to the http requests.

<img src="../images/doc_model.png" alt="image-20210811030656183" width="200px" />

```typescript
// pet.ts
export interface Pet {
    id: number,
    category: {
      id: number,
      name: string
    },
    name: string,
    photoUrls: [
        string
    ],
    tags?: [
      {
        id: number,
        name: string
      }
    ],
    status: string
}
  
// user.ts
export interface User {
    id?: number,
    username: string,
    firstName: string,
    lastName: string,
    email?: string,
    password: string,
    phone?: string,
    userStatus?: number
}
  
// apiResponse.ts
export interface ApiResponse {
    code: number,
    type: string,
    meassage: string
}
```

Then there are the Data services, the Model part of MVC, where we are requesting the real API, using Angular's built-in HTTPClient class.

<img src="../images/file_service.png" alt="image-20210811030724527"  width="200px"  />

```typescript
// pet.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from '../models/pet';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, max, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private baseUrl = 'https://petstore.swagger.io/v2/pet'
  private petsUrl = 'https://petstore.swagger.io/v2/pet/findByStatus?status=team2';  // URL to web api

  // get all pets
  getPets(): Observable<Pet[]> {
    // Seems like some bug with api, response has two side(A/B), 
    // you will get like ABABABA when you request same api again and again
    // just like it has odd/even side
    // so before return target response, 
    this.http.get(this.petsUrl).subscribe()
    this.http.get<Pet[]>(this.petsUrl)
    return this.http.get<Pet[]>(this.petsUrl)
    .pipe(
      tap(_ => this.log('Get pets list')),
      catchError(this.handleError<Pet[]>('getPets', []))
    );
  }

  // get pet by id
  getPet(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/${id}`
    this.http.get(url).subscribe()
    return this.http.get<Pet>(url)
    .pipe(
      tap(_ => this.log(`Get pet with id: \n\t${id}`)),
      catchError(this.handleError<Pet>(`getPet id=${id}`))
    )
  }

  /** PUT: update the pet on the server */
  updatePet(pet: Pet): Observable<any> {
    this.http.put(this.baseUrl, pet, this.httpOptions).subscribe()
    return this.http.put(this.baseUrl, pet, this.httpOptions).pipe(
      tap(_ => this.log(`Updated pet with id: \n\t${pet.id}`)),
      catchError(this.handleError<any>('updatePet'))
    );
  }

  /** POST: add a new pet to the server */
  addPet(pet: Pet): Observable<Pet> {
    this.http.post<Pet>(this.baseUrl, pet, this.httpOptions).subscribe()
    return this.http.post<Pet>(this.baseUrl, pet, this.httpOptions).pipe(
      tap((newPet: Pet) => this.log(`Added pet with id:\n\t${newPet.id}`)),
      catchError(this.handleError<Pet>('addPet'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePet(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/${id}`;
    this.http.delete<Pet>(url, this.httpOptions).subscribe()
    return this.http.delete<Pet>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Deleted pet with id: \n\t${id}`)),
      catchError(this.handleError<Pet>('deletePet'))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a PetService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Pet Service: \n\t${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, max, tap } from 'rxjs/operators';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'https://petstore.swagger.io/v2/user'

  // create a new user account
  addUser(user: User): Observable<ApiResponse> {
    this.http.post<ApiResponse>(this.baseUrl, user, this.httpOptions).subscribe()
    return this.http.post<ApiResponse>(this.baseUrl, user, this.httpOptions)
      .pipe(
        tap(res => {
          if (res.code == 200){
            this.log(`Added user with username: \n\t${user.username}`)
          }
        }),
        catchError(this.handleError<ApiResponse>('addUser'))
      )
  }

  // login check 
  login(user: User) : Observable<ApiResponse>  {
    let url = `${this.baseUrl}/login?username=${user.username}&password=${user.password}`
    this.http.get<ApiResponse>(url, this.httpOptions).subscribe()
    return this.http.get<ApiResponse>(url, this.httpOptions)
    .pipe(
      tap(res => {
        if (res.code == 200){
          this.log(`User login: \n\t${user.username} logged in succeed`)
        }else{
          // console.log('res')
        }
      }),
      catchError(this.handleError<ApiResponse>('user login'))
    )
  }

  // get user info by username
  getUser(useranme: string): Observable<User> {
    let url = `${this.baseUrl}/${useranme}`
    this.http.get<User>(url, this.httpOptions).subscribe()
    return this.http.get<User>(url, this.httpOptions)
    .pipe(
      tap(user => {
          this.log(`Get user info with username:\n\t ${user.username} info shows here`)
      }),
      catchError(this.handleError<User>('user info'))
    )
  }

  // Modify User
  modifyUser(user: User): Observable<User>{
    let url = `${this.baseUrl}/${user.username}`
    this.http.put<User>(url, user, this.httpOptions).subscribe()
    return this.http.put<User>(url, user, this.httpOptions)
    .pipe(
      tap(user => {
          this.log(`Modify user with username: \n\t${user.username} updated`)
      }),
      catchError(this.handleError<User>('user info updated'))
    )
  }

  // delete user
  deleteUser(user: User): Observable<User>{
    let url = `${this.baseUrl}/${user.username}`
    this.http.delete<User>(url, this.httpOptions).subscribe()
    return this.http.delete<User>(url, this.httpOptions)
    .pipe(
      tap(user => {
          this.log(`Delete user with username: \n\t${user.username} updated`)
      }),
      catchError(this.handleError<User>('user info updated'))
    )

  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a PetService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`User service:\n\t ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


// message.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

```

Finally, all the components are shown in the screenshots and are basically explained and shown in code in the Features.md documentation.

<img src="../images/doc_components.png" alt="image-20210811030610005" width="200px"  />



<img src="../images/doc_routing.png" alt="image-20210811030627467" width="200px"  />





# <a name="3"></a>Design Choices

In the UX design philosophy there is one, visual unity. The visual aspect of the website should be consistent and have a visual connection to the business or product. For this project, we decided to continue with the Petstore page on the Swagger Public API website, using green and black as the main colour scheme to maintain a uniformity on the page. In our pages, some of the components with similar functionality are also designed in the same style to give the user the right guidance and avoid misinformation.

# <a name="4"></a>Evaluation 

## <a name="4.1"></a>Before prgramming

In fact, our user research and API testing were done in parallel, and the details are documented in the Process.md file.
The core of UX design is to understand the real needs of users. Even if your pages are beautiful and your interactions are attractive, as long as you do not provide users with the functions they want, everything is for nothing.
Therefore, before development, we did sufficient user research in the form of questionnaires, polls and interviews. We had questions about what features you expect from the website as a pet buyer and what features you expect as a pet buyer.
In reality, we should leave no stone unturned to fulfil the needs of our users. But being forced to use the public API, we did some feasibility analysis in conjunction with our preliminary API testing. the functionality of the API is limited and we cannot implement all the features that users want. So we chose to develop the features that the users expected, either through the API or through the front-end code. This way we can maximise the functionality that the user wants.
Once the user's functional requirements were met, we then focused on the visual design and interactive experience of the page.

## <a name="4.2"></a>Within prgramming

The first of Nielsen's Ten Usability Principles, an important reference for product design and user experience design, is the "state of visibility principle": the idea that any action the user takes on a web page, whether it is a click, a scroll or a keystroke, should result in immediate feedback from the page. "Immediate" means that the response time is less than the user can tolerate. The "state visibility principle" is what is often referred to as "feedback".

The interactive user experience is the experience that the interface gives to the user in the process of using and communicating, emphasising the interactive and interactive characteristics. The process of interactive experience runs through the process of browsing, clicking, inputting and outputting to give visitors an experience. The feedback that users get is the most direct interaction, so we take feedback as a key indicator. For example, if the user hovers over a component that can be manipulated, there should be a corresponding response: Curser: pointer, we also designed the animation of the card becoming bigger and changing colour when the user hovers over the pet list card, and so on. We have also designed a special component, Message box, to give feedback to the user. These messages are set up to prompt a phrase in the Message box when the user's website uses an HTTP request to the API and retrieves the data.

In practice, different feedback methods need to be chosen for different scenarios and at the appropriate locations to help users understand and have a better product experience. References: iOS Human Interface Guide, Under Design, Micro Interaction, About Face, The Essence of Interaction Design.

## <a name="4.3"></a>After feedback from users

1. With the filtering function, users expect more of a fuzzy search rather than an exact search.
2. Add examples after filtering by category feature.
