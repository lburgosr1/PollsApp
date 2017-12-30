const angular = require('angular')
const angularRoute = require('angular-route')
const angularjwt = require('angular-jwt')

const homeController = require('./routes/home/controller')
const homeConfing = require('./routes/home/index')

const privateAreaController = require('./routes/privateArea/controller')
const privateAreaConfing = require('./routes/privateArea/index')

const registerController = require('./routes/register/controller')
const registerConfing = require('./routes/register/index')

const loginController = require('./routes/login/controller')
const loginConfing = require('./routes/login/index')

const resultsController = require('./routes/results/controller')
const resultsConfing = require('./routes/results/index')

const dataService = require('./services/dataService')
const StorageService = require('./services/StorageService')
const AuthService = require('./services/AuthService')
const AuthInterceptor = require('./services/AuthInterceptor')
const ChartService = require('./services/ChartService')

const interceptor = require('./interceptor/interceptor')
const run = require('./run/run')

angular.module('pollspro', [angularRoute, angularjwt])
  .run(run)
  .controller('homeController', homeController)
  .controller('privateAreaController', privateAreaController)
  .controller('loginController', loginController)
  .controller('registerController', registerController)
  .controller('resultsController', resultsController)
  .config(homeConfing)
  .config(privateAreaConfing)
  .config(loginConfing)
  .config(registerConfing)
  .config(resultsConfing)
  .config(interceptor)
  .config(($routeProvider) => $routeProvider.otherwise('/login'))
  .factory('dataService', dataService)
  .factory('StorageService', StorageService)
  .factory('AuthService', AuthService)
  .factory('AuthInterceptor', AuthInterceptor)
  .factory('ChartService', ChartService)
