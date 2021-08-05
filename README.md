# RoR Blog Project
This is a RoR project of a blog platform.  
這是一個實作 Ruby on Rails 的部落格平台專案。

## About this Project
### Log-In: Internal & FB-auth 
The platform provides two way of log-in, internal-user-log-in and FB-auth log-in,  which are implemeted by Devise and Omniauth-facebook.  
這個平台專案有兩個登入方式：內部登入、FB登入，實作方式是以Devise套件搭配Omniauth達成。

### Cloud deployment: Heroku
This project has been deployed on Heroku, see the link [PCHao's RoR Blog Project](https://pchao-ror-blog-app.herokuapp.com/).   
這個專案有被部署到Heroku上，可以上述連結進入並自由使用。

### SPA side project - Angular
This project has its main branch with the version of *Server-side rendering* website, while there's also a *minor version* in branch *Angular* implementing the website in angular for the purpose of *Single Page Applicaiton(SPA)*.  
However, due to the backend has been initially designed to be server-side render, it takes more time to change all the api into web-api design. Hence, the Angualr version *has not been fully transformed* its backend api yet.  
Currently, only the index page already has its interaction with the RoR api response, and the rest pages were *only pure SPA design in frontend* without its backend api ready.  
這個專案除了main branch上的版本外，另外有以Angular branch開發一個附屬版本，其目標是達成套用Angualr做到SPA前端。  
然而，由於原生專案是先以Server-side render的方式開發，故原有Api並無法直接提供給Angular作為Web API後台直接使用。由於時間的緣故，尚未有足夠時間將所有後台API改版（且希望傾向改版應以符合Restful API為目標，跳脫原本Server-side render的一頁一Request思維），希望計畫將於日後，以更多更充足的時間去重構、另行設計為更適合提供給前端之Web API後台。  故，此版本的平台，僅有首頁已經完成後端Api的改寫，其餘頁面與功能大多僅為SPA Demo畫面使用，尚無完成後臺Api對應改版串接，敬請見諒。

See angular SPA demo in another Heroku App: [PCHao's RoR Blog in Angular SPA Project(Demo version)](https://pchao-ror-ng-blog-app.herokuapp.com/)  
此版本也以部署上Heroku，歡迎自由使用。

### Demo video of this project
Checkout the demo vedio here in [PCHao's RoR Blog Demo](https://pchao-ror-ng-blog-app.herokuapp.com/)  

### References & Thanks to
- https://rails.ruby.tw/getting_started.html
- https://medium.com/@tienshunlo_32785/rails-devise系列文-實作兩種用戶-user-跟-admin-e86018df4e88
- https://ihower.tw/rails/auth.html
- https://rails.ruby.tw/routing.html
- http://jameshuynh.com/rails/paginate/find_by_sql/2017/09/30/how-to-paginate-rails-find-by-sql-result/
- https://naturaily.com/blog/value-based-pagination-rails
- http://jameshuynh.com/rails/paginate/find_by_sql/2017/09/30/how-to-paginate-rails-find-by-sql-result/
- https://ithelp.ithome.com.tw/articles/10218717
- https://stackoverflow.com/questions/24148723/undefined-method-devise-for-user/24148983
- https://ithelp.ithome.com.tw/articles/10199016
- https://stackoverflow.com/questions/52339221/rails-gem-error-while-installing-pg-1-1-3-and-bundler-cannot-continue/52342295
- https://stackoverflow.com/questions/44901379/gemextbuilderror-error-failed-to-build-gem-native-extension-for-rails-vers/449023466
- https://ithelp.ithome.com.tw/articles/10199016
- Rails on Heroku https://ithelp.ithome.com.tw/articles/10199014
- brew install postgresql https://stackoverflow.com/questions/52339221/rails-gem-error-while-installing-pg-1-1-3-and-bundler-cannot-continue/52342295
- FB auth YT https://www.youtube.com/watch?v=Dd8dOAL6WYs
- Ng8 with Rails https://medium.com/@samgreen_22756/angular-8-with-rails-5-55cd186a02c9
- Ng8 on Rails https://medium.com/@tommybernaciak/angular-on-rails-how-to-start-37e3851ffb60
- Heroku command & Procfile https://andyyou.github.io/2016/10/31/process-types-and-profile/
- And so much more articles on the internets.
