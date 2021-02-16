# Burger Application

[![GitHub](https://img.shields.io/github/license/thompson-1657/professional_readme_generator?color=%230288d1)](LICENSE)

## Description

---

This Burger application is a fun application with a simple user interface that allows the user to input a kind of burger they would like to try. It then lets them choose to "devour it". Once devoured, the burger will move to the right side of the webpage and become slightly transluscent to show that it has been devoured. There is also an "x" box next to every burger variety if the user should choose to delete it.

This application utilizes the npm dependencies [express](https://www.npmjs.com/package/express), [express-handlebars](https://www.npmjs.com/package/express-handlebars) and [MySQL](https://www.npmjs.com/package/mysql) to build the functionality of the app.

## Table of Contents

---

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Questions](#questions)

## Installation

---

To install the Burger application the user can start by cloning the application from the repository onto their local machine.

```
https://github.com/thompson-1657/burger.git
```

Once cloned the user can run

```
npm install
```

in the terminal to install the package.json and the node modules. Be sure to change the user and password in the connection.js file to your MySQL username and password in order to connect. The application can then be run in the terminal command line by entering

```
node server.js
```

## Usage

---

[![recording](https://user-images.githubusercontent.com/71091515/108019616-39528980-6fe0-11eb-9e01-04a105208588.gif)](https://drive.google.com/file/d/1Jjb0NUyI-AALulRalL1uvB9k41XBIpe_/view)
Click gif to link to the full usage video.

To use the application enter a kind of burger into the text box in the center of the web page. Once the burger is entered the user can click add burger to add their burger choice to the database. The burger that was input will appear on the left side of the webpage with a button to the right which reads "Devour it!" To devour the burger the user can click the button and the and the burger will disappear from the left column and appear on the right. The devour button will disappear and the burger itself becomes transluscent to signify the burger being deavoured. If the user would like to get rid of any of the burgers or the previously devoured burgers they can click the "x" next to the specific burger to delete it.

## Technologies

---

- Node.js
- MySQL
- Express
- Handlebars
- HTML5
- CSS3
- Javascript
- JQuery
- MySQL Workbench

## License

---

[MIT License](LICENSE)

## Questions

---

If you have any questions regarding the functionality or use of this application feel free to contact me via the information below.

GitHub: [thompson-1657](https://github.com/thompson-1657)

Email: thompson.1657@gmail.com
