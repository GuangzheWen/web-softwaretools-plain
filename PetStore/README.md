# PetStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ng serve

If you got error when 'ng serve', you might need need this command`npm i --save-dev @angular-devkit/core`

```shell
example
wayne@Mac PetStore % ng serve
An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'
Require stack:
- /usr/local/lib/node_modules/@angular/cli/node_modules/@angular-devkit/architect/node/node-modules-architect-host.js
- /usr/local/lib/node_modules/@angular/cli/node_modules/@angular-devkit/architect/node/index.js
- /usr/local/lib/node_modules/@angular/cli/models/architect-command.js
- /usr/local/lib/node_modules/@angular/cli/commands/serve-impl.js
- /usr/local/lib/node_modules/@angular/cli/node_modules/@angular-devkit/schematics/tools/export-ref.js
- /usr/local/lib/node_modules/@angular/cli/node_modules/@angular-devkit/schematics/tools/index.js
- /usr/local/lib/node_modules/@angular/cli/utilities/json-schema.js
- /usr/local/lib/node_modules/@angular/cli/models/command-runner.js
- /usr/local/lib/node_modules/@angular/cli/lib/cli/index.js
- /usr/local/lib/node_modules/@angular/cli/lib/init.js
- /usr/local/lib/node_modules/@angular/cli/bin/ng
See "/private/var/folders/4f/7_h4yfcd60z1c1jtf4gj94vm0000gn/T/ng-YZipz5/angular-errors.log" for further details.
wayne@Mac PetStore % ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 12.2.0
Node: 16.5.0 (Unsupported)
Package Manager: npm 7.19.1
OS: darwin x64

Angular: <error>
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.0 (cli-only)
@angular-devkit/build-angular   <error>
@angular-devkit/core            12.2.0 (cli-only)
@angular-devkit/schematics      12.2.0 (cli-only)
@angular/cli                    12.2.0 (cli-only)
@schematics/angular             12.2.0 (cli-only)
rxjs                            6.6.7 (cli-only)
typescript                      <error>

Warning: The current version of Node (16.5.0) is not supported by Angular.
wayne@Mac PetStore % npm i --save-dev @angular-devkit/core
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142

added 1340 packages, and audited 1341 packages in 26s

87 packages are looking for funding
  run `npm fund` for details

5 moderate severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

```

