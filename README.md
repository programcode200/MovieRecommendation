# Netflix Gpt

    - create react App
    - configured tailwind css by using docs
    




# Features
    - login/ signup page
        - sign in/signup form
        - redirect to Browse page

    - Browse Page (after auth)
        - Header
        - main movie
            - trailer in bg
            - movie title & description
            - movie suggestion
                - movie list * n Categories
    
    - Netflitgpt
        - Search bar
        - movie suggestions


for Browse page design
    - main video container
        - video bg
        - video title
    
    - secondory container
        - cards n*
    - movielist component
        - popular
            - movies list n*
        - Now playing
            - movies list n*

Gpt search feature
    - gpt search bar
    - gpt movie suggestion


       
    

# setup firebase with authentication and deployment of proj

    - create proj in fire base
    - authenticate 
    - install firebase CLI => npm i -g firebase-tools 
# for deploy 
    -run firebase login
    - firebase init
    - y, Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys, Use an existing project, select you project, build, no, no
    - npm build
    - firebase deploy


# -D

-D or --save-dev: This flag tells npm to add the installed package to the devDependencies section of your package.json file. These dependencies are typically used during development (e.g., build tools, testing libraries) but are not needed in the production environment.

devDependencies vs dependencies:

dependencies: These are the packages required to run the application in production. They are installed when you run npm install.
devDependencies: These are only needed during development (e.g., tools for testing, building, or linting the code). They are installed when you run npm install --dev or npm install in a development environment.


# Routing
    - npm i -D react-router-dom


# useRef

use for get the reference from element or input using that value check that wheather it is valid or not

  const password = useRef("");
  <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="text-white w-full box-border my-2 p-4 bg-transparent border border-gray-600 rounded-md"
    />

# router

routing done only from child of routing parent means body is parent and Login, Browse is child so you can do navigate inside only children no in parent

check header for navigate, when user is signin so he can't go back to signin page or when he is not signup or signin he can't go onto the browse page.

# TMDB

    - Register or login for tmdb api 
    - create an app and then you will get the access token
    - get data from TMDB now playing movies list API

# Memoization

Memoization is a programming technique used to optimize code by storing the results of expensive function calls and reusing them when the same inputs occur again. It essentially trades space for time by caching the results of function calls to avoid redundant computations.

How Memoization Works
Function Call: When a function is called with a specific input, the result is computed and stored in a cache (often a dictionary or object).
Cache Check: Before computing the result for a new input, the function checks if the result is already in the cache.
Reuse: If the result is in the cache, it is returned immediately, saving computational effort.
Compute if Missing: If the result is not in the cache, the function computes it, stores it in the cache, and then returns it.