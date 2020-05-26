# koa-sys-design
Repo for multiple purpose of sys design and koa tutoring

## CLASS-1-koa
This branch contains initialization of essential dependencies of koa dev environment.
Major packages are: koa, koa-router, babel, nodemon, eslint etc.
Eslint takes airbnb rules as its configuration

# Dev Instruction
Run locally: npm run dev
Run eslint check: npm run lint
Run eslint auto fix: npm run lint-fix
** Please update your database configuration before connecting to your local db
** ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword'; needs to be ran at later version of mysql in order to use old-way of auth
