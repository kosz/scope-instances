[![Code Climate](https://codeclimate.com/github/kosz/scope-instances/badges/gpa.svg)](https://codeclimate.com/github/kosz/scope-instances)
## Scope Instances

- A deep dive into Angular scoping issues and related patterns with some interactive examples

## Installation

- git clone the repo
- run ```bower install && npm install``` from the project root
- run ```gulp serve``` to run the application 
- run ```gulp serve:ngdocs``` to run the ngdocs server
- run ```gulp test:auto``` for tests

## File Structure Organization

The File Organization in this project is based on a slightly modified version of the [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1), implemented in generator-modular, with the main difference between the two is that base level 'Angular Objects' are declared inside base level directories such as : routes/services/directives, while other Angular Objects which are children of only one Angular Object, get encapsulated in their parent's directory. Like with the [Google Recommendation](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1) all programatic assets such as partials/styles/tests are also encapsulated within their component's directory. Unlike as in the [Google Recommendation](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1), there is no 'components' directory ( base level components get categorized inside base level directories as mentioned above ).  

This is a system I'm much happier with, however I acknowledge that it's a bit difficult to digest at first and due to this may not be the most adequate solution everytime.  I find the system does really well when used in conjunction with things like Cmd+T or Ctrl+P, where if you find yourself on a route called 'scenario-one' wanting to edit the controller behind this route, Ctrl+P -> route/scone/contr will easily let you find the right controller. 

## More about Code Organization

Various styles are shown in the code, from dumping all angular objects in a single file ( which i only like for writing examples ), to separating every Angular Object in it's own file, to separating every Angular Object in it's own directory with it's code + test coverage file + ngDocs. For the most part, there is consistency within each route, even though the organization differs from route to route. 

Jade files and HTML files are both used. While in a serious project I would chose only one, this showcases the ability of the generator-modular development environment which can handle any directory structure and multiple preprocessors in the same project.

There is some inconsistency in how Angular injections are declared. Some code does not use the array notation, some uses it. Both codes are expected to work minified, due to ngAnnotate being configured by generator-modular. 
