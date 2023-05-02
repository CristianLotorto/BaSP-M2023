# Mega Rocket!

## Week 02: Gym Management Web Application HTML :paintbrush:

We've written the HTML for the landing page (desktop size) that we'd designed a week ago, which is going to serve as structure to be stylize in future weeks.

So far, landing page has a responsive design with three sizes:

-   **_Desktop:_** 1512x982 px :desktop_computer:
-   **_Tablet:_** 834x1194 px :pager:
-   **_SmartPhone:_** 390x844 px :iphone:

So it's going to be used in every kind of devices. :raised_hands: :raised_hands:

You can find information about different services, buttons for **_Log In_**, if you are member and **_Sign Up_** if you aren't part of the MegaRocket community yet, but you want to be. :muscle: :mechanical_arm:

## Week 03: Gym Management Web Application stylized with CSS :artist:

-   We stylize the landing page (desktop size) with **CSS**, using **only**:

```
selector {
    display: inline-box
}

selector {
    position: relative;
    top: X px;
    bottom: X px;
    left: X px;
    right: X px;
}

selector {
    float: left;
        or
    float: right;
}
```

for HTML elements **flow ordering**.

-   Color palette is composed by: :art:

```
    primary-dark: #373867;

    primary-light-green: #AACE9B;

    background-gray: #D9D9D9;

    background-navbar: #E5F2ED;

    background-navbar-links: #51A884;

    background-info-title: #88A47C;
```

used mostly for **backgrounds** in specified sections of the landing page,

-   and:

```
    text-light: #fff;

    text-dark: #000;
```

used for **font colors**. The main font-family used was **Roboto**.

## Visual Results: :framed_picture:

![image](https://user-images.githubusercontent.com/91099276/229694989-d12f1823-c481-445b-998c-b6c57223bfda.png)
![image](https://user-images.githubusercontent.com/91099276/229695134-da305652-3dc5-44b4-bd61-c81420a38105.png)

Hope you like it as we do! :star_struck::star_struck:

## Week 04: Gym Management Web Application stylized Flexbox CSS :paintbrush: :artist:

-   We stylize the landing page (mobile-first/responsive) with Flexbox **CSS** for HTML elements **flow ordering**.

-   We applied **media query** for different devices resolution styles setting.

-   We deployed [our project in github-pages](https://cristianlotorto.github.io/BaSP-M2023/Week-04/index.html) for easier access. :grin:

Hope you like the results! :partying_face: :partying_face:

## Week 05: JS ECMAScript 5 :clown_face:

### Introduction to ECMAScript 5 features. :nerd_face:

**We worked with**:

-   Variables definition and learned about how they behave in JS code flow.
-   Arrays definition and applied methods to modify them.
-   Conditional structures and methods to work with conditions.
-   For loops for load arrays and to show their content.
-   Function definition and earned about how to work efficiently with them.

**Last but not least**:

We worked in W04 CSS Flexbox project corrections following tutors advice.

## Week 06: JS ECMAScript 5 Validations. :computer::policeman:

### Form validation using **ECMAScript 5** methods :nerd_face:

-   At first we worked on the HTML/CSS models for the login and sign up pages forms.

-   We wrote a requirements document listing the form validation requirements that we'll apply for improve UX.

-   We worked with JS conditional structures combined with DOM manipulation methods for realize form validations listed on the requirements document.

**Some of the methods we've used for DOM manipulation and validations were**: :keyboard:

-   `document.getElementById()` - used for catch a DOM element with the id.
-   `.className` - used to define or overwrite a class name attribute in a tag (object).
-   `.innerHtml` - used for create and manipulate HTML tags and their content.
-   `.split()` - used for get a string elements array, divided on a condition, out of a string.
-   `.filter()` - used for get an array with the elements of another array who fulfill the conditions that filter() callback function provides.
-   `isNaN()` - used for analyze if an element is "not a number" data type.
-   `parseInt()` - this method parses an element and converts it into an Integer data type.
-   `.trim()` - this method removes all blank spaces in a string's start and end positions.
-   `.test()` - used for search a coincidence between a regular expression and a text string.
-   `.addEventListener()` - this method has two parameters, one of them defines the event who is going to execute the function defined in the second parameter. Some of this events are "focus", "blur", "click", etc.
-   `new Date().toLocaleDateString()` - this method allows to modify the date layout format.
-   `.preventDefault()` - this method stops any default event of an object.

### Take a look! :see_no_evil: :hear_no_evil: :speak_no_evil:

-   Feel free to test the forms in [our project in github-pages.](https://cristianlotorto.github.io/BaSP-M2023/Week-06/views/index.html)

Hope you enjoy the results! :boom:

## Week 07: JS ECMAScript 6 Validations. Asynchronous HTTP Requests :handshake:

### We've made asynchronous requests to an API (finally) using **ECMAScript 6** methods.:grin:

These GET requests were made by an URL with query params in a **fetch** method:

```
fetch("URL?key1=value1&key2=value2")
.then(function (response) {return response.json()})
.then(function (data) {return data})
.catch(function (err) {return err})
```

With this structure, though an URL, we make a request to an API. The API manages the request and gives us a response. This response is turned into a JSON format object for finally been used to take this object information and use it into our project.

Also, we worked in modals to show the data responses with customized styles. We had really cool outcomes. :star_struck:

As always, you're invited to [take a look.](https://cristianlotorto.github.io/BaSP-M2023/Week-07/views/index.html) :see_no_evil: :hear_no_evil: :speak_no_evil:

Hope you enjoy the results. :bomb:

## Author

-   Cristian Lotorto
