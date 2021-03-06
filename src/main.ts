import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


/*function mainController($scope, $http){
  $scope.formData = {};

  $scope.hazAlgo = function(){
    $http.get('localhost:3000/api/setxh')
    .succes(function(data){
      console.log("peticion enviada");
    })
    .error(function(data){
      console.log("error");
    });
  };
}*/