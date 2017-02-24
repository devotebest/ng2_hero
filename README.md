## Putting the Angular 2 “Tour of Heroes” Tutorial on a Rails 5 and PostgreSQL.

Angular 2 offers excellent tutorial to review the framework. See more: https://angular.io/docs/ts/latest/tutorial/
But there is one simple problem - in this case Angular use a mock data source instead of real backend.
So I implemented Ruby on Rails Web Api on server side for Angular client.
Before run project please install PostgreSQL DB on your machine.

The best option would be to open backend and client folders in separated editor(or IDE) windows.

#### Setting up the Rails server:

###### Open 'backend' folder in text editor and run the following commands in Terminal:
```
bundle install
rails server -p 3001
```


#### Setting up the Angular client:

###### Open 'client' folder in text editor and run the following commands in Terminal:
```
npm install
npm start
```
