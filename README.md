# Aurelia-Node

This is a NodeJS Express App bundled with the [Skeleton App](https://github.com/aurelia/skeleton-navigation) of the [Aurelia](http://www.aurelia.io/) platform. It sets up a standard navigation-style app using gulp to build your ES6 code with the babel compiler. Karma/Jasmine testing is also configured.

For more info please visit the official site: http://www.aurelia.io/


## Running The App

1. Fork or download this repo
2. Navigate into the folder
3. Install the Apps dependencies

  ```shell
  npm install
  ```
4. Download a fresh copy of the skeleton app by issuing following command:

  ```shell
  node bin/install
  ```
5. Navigate to the frontend folder

  ```shell
  cd public/app
  ```
6. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
7. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm endpoint config github` and following the prompts.
8. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
9. To run the app go back to the project root and execute the following command:

  ```shell
  gulp watch
  ```
10. Browse to [http://localhost:7000](http://localhost:7000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

  >**Note:** If you prefer to run the node app without Gulp just do ``` node app.js ```


## Serving views from Node

You can easily serve your Views from the Node Backend. This example uses the [Swig](http://paularmstrong.github.io/swig/) Templating Engine, but you are of course free to choose whatever you want :)
If you take a look at the folder `views/welcome.html` you'll see the welcome View being served by NodeJS. The route association can be found in `routes/api.js`. The code below demonstrates how to reply with the html file.

```
/* GET welcome view */
router.get('/views/welcome', function(req, res) {
  res.render('welcome', {nodePort: require('../app').get('port')});
});
```

In order to use this in Aurelia open the file `public/app/src/welcome.js` and add following method to the Welcome Class. This will make sure that the VM requests the server-side View during the navigation instruciton.

```
getViewStrategy() {
  return '../../views/welcome';
}
```


## E2E Testing
An example of how to use Protractor for E2E Testing with Aurelia has been added.
In order to run them you need to make sure protractor and the necessary webdriver is installed

  ```shell
  npm install -g protractor
  webdriver-manager update
  ```

Now start up the application in one Terminal with from the project root with the command:
  ```shell
  node app.js
  ```

After that, in another Terminal, from the project root, just type following:
  ```shell
  protractor protractor.conf.js
  ```
