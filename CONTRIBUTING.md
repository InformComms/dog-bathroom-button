# Contributing

- Ensure you have [Git](https://git-scm.com/) and [Node](https://nodejs.org) installed on your machine
- Add a `.env` file with sensitive environment variables like:
  ```
  ACCOUNT_SID='abc'
  AUTH_TOKEN='abc'
  FROM_PHONE_NUMBER='+12223334444'
  TO_PHONE_NUMBER='+12223334444'
  ```
- Run `npm install` to install libraries
- Run `npm run dev` to develop
- Submit a pull request to `master`
- Continuous Integration runs `npm run verify` to ensure things are working as expected
- An admin merges your pull request into `master` and releases a new version
