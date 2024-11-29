# UI Testing with Playwright and Allure Reporting

## Overview
This project demonstrates Web UI testing using Playwright and generating test reports using Allure. Playwright is a Node.js library for automating browsers, and Allure is a flexible and attractive test reporting tool.
The project includes the setup for running Playwright tests and generating detailed, interactive test reports with Allure.

## Installation
### Prerequisites
Before setting up the project, make sure you have the following installed:
- Node.js (version 14.x or higher)
- npm (Node Package Manager)

## 1. Clone the Repository
First, clone the repository to your local machine:    

$ git clone https://github.com/niketsathe1997/PlaywrightUITesting.git

## 2. Install Dependencies  
Use npm  to install all necessary dependencies: 
$ npm install

## 3. Install Playwright Browsers 
$ npx playwright install

## 4. Install Allure-Playwright module  
  $ npm -i -D @playwright/test allure-playwright

## 5. Install Allure Command-Line Tool  
To generate Allure reports, you need to install the Allure CLI. You can install it globally using npm:   
$ npm install -g allure-commandline --save-dev 

## 6. Running Tests 

- The Playwright tests are located in the tests directory  
- To run the tests, simply use the following command:  
  $  npx playwright test --reporter=allure-playwright  
This will run the tests in the tests directory and creates a "allure-results" directory

## 7 Generate Allure Reports 

allure generate allure-results -o allure-report --clean  

## 8 Open Allure Reports

allure open allure-report

## Screenshots  
Screeshots are being captured dynamically in tests/screeshots directory

## Video Recording 
Video recording is being stored under playwright-report/data


  
      


 



