

![](Images/Thor's_Arctic_Equipment_Rentals.png)
 <div align="center">

 <h3> Thors Rentals Order Submission<br>
 
 </div>
 
 <div align="center">
  

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
&nbsp;&nbsp;&nbsp;&nbsp;
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
&nbsp;&nbsp;&nbsp;&nbsp;
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
&nbsp;&nbsp;&nbsp;&nbsp;
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
&nbsp;&nbsp;&nbsp;&nbsp;
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
&nbsp;&nbsp;&nbsp;&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
&nbsp;&nbsp;&nbsp;&nbsp;
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
&nbsp;&nbsp;&nbsp;&nbsp;
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

</div>

<div align="center">
 
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftenngs%2Fthors-rentals&count_bg=%23000000&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visits+%5Btoday%5D+%2F+%5Ball+time%5D&edge_flat=false)](https://hits.seeyoufarm.com)

</div>
 
 <div align="center">
 
<h2> Table of Contents
</div>

- [What does it do?](#what-does-it-do)
- [How does it do it?](#How-does-it-do-it)
- [OK, but why?](#ok-but-why)
- [Let's have a look-see, shall we?](#lets-have-a-look-see-shall-we)
   - [Main menu](#main-menu)
   - [Statistics menu](#statistics-menu)
   - [Initiating ATV rental](#initiating-atv-rental)
   - [Receiving ATV back from loan](#receiving-atv-back-from-loan)
- [Dependencies](#dependencies)
- [How to install dependencies for Windows](#how-to-install-dependencies-for-windows)
   - [MinGW & gcc compiler](#mingw--gcc-compiler)
   - [MinGW threads](#mingw-threads)
   - [Sqlite3](#sqlite3)
   - [Notes](#notes)
- [Compiling](#compiling)
- [Possible additions](#possible-additions)




## What does it do?
Thor's Rentals provides an arctic rental equipment management system which is aimed to be utilised by a rental shop staff member. Currently, Thor's stocks skis, snowboards and All Terrain Vehicles (ATVs). It allows for adding customers, granting system access for existing staff members, adding rental items, managing outgoing and incoming rental equipment and providing inventory and business-related statistics. The system further provides moderate to high user input validation and a login facility.<br><br>
TL;DR add customers, system access staff, equipment, provide statistics, calculate when equipment is due back and update inventory.

## How does it do it?
Thor's Rentals' 90s-inspired and ASCII Art-rich user interface interacts with thors_rentals sqlite3 database containing various tables where information can be added to and retrieved from and manipulated. For example, adding a customer involves gathering customer details and saving them into a table in the database and logging in involves querying a database to validate login credentials.<br>
Furthermore, the system oversees when rental items are due to be returned and the state of current inventory by retrieving information from a database and computing the result when requested.<br><br>
TL;DR "old-school" UI interacts with sqlite3 database to write, retrieve and compute rental-related stuff.

## OK, but why?
I have a passion for C++ language. Whilst contemplating a project idea, I came across a myriad of car rental, hospital and student management systems made by others. I also wanted to make a management system of some sort, but simultaneously one that is not so common and fits my preferences.<br><br>
TL;DR C++ rocks and I wanted use it to make something that I like.

## Let's have a look-see, shall we?

<div align="center">

### Main menu<br>



![](Images/thors-main-menu.jpg)<br>





### Statistics menu<br>


![](Images/thors-stats.jpg)<br>




### Initiating ATV rental<br>



![](Images/thors-init-rental.gif)



### Receiving ATV back from loan<br>




![](Images/thors-receive-item.gif)<br><br>

</div>

## Dependencies
Apart from the provided C++ and ASCII Art files, this project requires the following:
1) MinGW
2) gcc compiler (built with MinGW)
3) MinGW threads
4) Sqlite3

## How to install dependencies for Windows<br>
### MinGW & gcc compiler
1) As it is a slightly lengthy process, please check out this video: https://www.youtube.com/watch?v=Zcy981HhGw0&t=80s<br>
### MinGW threads
1) I have included the required mingw.thread.h file in the repo. However, if you would like to get it yourself, please clone this repo: https://github.com/meganz/mingw-std-threads.git
### Sqlite3 
1) Download precompiled binaries for Windows (32 or 64 bit) from https://www.sqlite.org/download.html
2) Place binaries into a directory. For example: C:\sqlite3
3) Add the directory where binaries were placed in step 2) to PATH (please check out https://www.youtube.com/watch?v=gb9e3m98avk if not familiar)
4) Download "sqlite amalgation" C source code from  https://www.sqlite.org/download.html (at the time of writing, first link from top to bottom)
5) Place sqlite3.c and sqlite3.h from "sqlite amalgation" download into a C++ project directory
6) Compile using: gcc sqlite3.c -c to produce sqlite3.o file
### Notes
1) I have provided the required sqlite3.o and sqlite3.h files in the repo. However, it is not guaranteed that they will work on your computer just because they work on mine. If in doubt, please follow the installation steps above to create your own.
2) Sadly, I am unable to provide build and dependency details for Mac OS / Linux
## Compiling
Please compile the project using g++ *.cpp sqlite3.o -LC:\sqlite3<br>
(where: C:\sqlite3 is the directory for sqlite that
was added to PATH)
## Possible additions
Adding more functionality such as adding different types of equipment to the inventory, removing or banning customers, adding staff (staff without system access) from the UI, sending an invoice via email to a customer could be accomplished.
