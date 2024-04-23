# Nick's Frequenz Challenge
[Link](https://apq4d83kas542423t3730dka.vercel.app) to the app hosted on Vercel

### Running the app

In order to run the app on your machine, please follow these steps:

1. Navigate on your terminal to the folder/directory where you would like to clone the app.
2. Run the command `git clone https://github.com/nickberliner1/apq4d83kas542423t3730dka`.
    - This will create a folder called "apq4d83kas542423t3730dka" in your directory
3. Run the command `cd apq4d83kas542423t3730dka` in your terminal.
4. Run the command `npm install`.
5. Run the command `npm start`.
    - This will open automatically your browser at the `localhost:3000` url
6. If you encounter errors related to Github's API call limit:
    - Change `line 15` in `SearchOrganizations.tsx` to `const data = fakeOrganizations;`
    - Change `line 82` in `RepositoriesList.tsx` to `const data = fakeRepositories;`
    - Change `line 65` in `App.tsx` to `<RepositoriesList selectedOrg='gumgum' />`
    - This will populate the app with static data and allow you to still perform all the same functions without calling the API.

### Using the app

1. Upon opening the app, you will see an input filter which allows you to choose a Github organization.
    - There will also be a switch, for you to change the app into `Light mode` if you prefer.
2. After selecting an organization, a list of their repositories will appear.
3. You can navigate to other pages to see all repositories, or you can filter them.
4. On the right side of the screen, there are filters which allow you to:
    - Filter repos by name
    - Filter repos by minimum and maximum open issues
    - Filter repos by minimum and maximum stars
