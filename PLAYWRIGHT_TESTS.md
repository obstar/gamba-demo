# How to run tests

### Pre-installed on local:

- npm and node js
- allure e.g. from brew if macos
- add .env to root folder

```
# .env example
APPLICATION_URL=http://localhost:4001


```

---

### Test run in local:

1. Install all packages locally

```
npm install
```

2. Install playwright

```
npx playwright install
```

3. Generate bdd execution files

```
npx bddgen
```

4. Build and run web app
```
npm run build
npm run start
```

5. Run tests for chosen project e.g.

```
npx playwright test --project='chrome'
```


---

### Test run with allure report

1. Run tests in root folder

```
ALLURE_RESULTS_DIR=./tests/.reports/allure-results && npx bddgen && npx playwright test --project='chrome'
```

- there is also shorter command from package.json scripts to run all tests

```
npm run playwright
```

- more examples [here](https://playwright.dev/docs/running-tests)

---

2. Generate and open report

```
allure serve .reports/allure-results 
```
