# @pliancy/eslint-config-ts

Base eslint config for all TypeScript projects

## Usage

- Auth
  - [Create a Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
  - Edit your global .npmrc to include the following:
    ```shell
    @pliancy:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=my_personal_access_token
    always-auth=true
    ```
- Install `yarn add -D @pliancy/eslint-config-ts`
- Add a `.eslintrc.js` file to your project with the following:
    ```js
    module.exports = {
        extends: ['@pliancy/eslint-config-ts'],
    }
    ```

