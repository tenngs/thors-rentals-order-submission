

![thors-rentals-order-submission-high-resolution-color-logo](https://user-images.githubusercontent.com/85033252/217022803-fe315caf-b5bf-4d47-b18e-211d285417e6.png)

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

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftenngs%2Fthors-rentals-order-submission%2Fblob%2Fmain%2FREADME.md&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%237E7E7E&title=visits&edge_flat=false)](https://hits.seeyoufarm.com)
</div>

<div align="center">
 


</div>
 
 <div align="center">
 
<h2> Table of Contents
</div>

- [What does it do?](#what-does-it-do)
- [How does it do it?](#How-does-it-do-it)
- [OK, but why?](#ok-but-why)
- [Let's have a look-see, shall we?](#lets-have-a-look-see-shall-we)
   - [Landing Page](#Landing-Page)
   - [View All Orders](#view-all-orders)
   - [View Inventory](#view-inventory)
   - [Customers](#customers)
   - [Staff Members](#staff-members)
   - [Rental Duration](#rental-duration)
   - [Rental Review](#rental-review)
   - [Confirmation Modal](#confirmation-modal)
- [Possible additions](#possible-additions)


## What does it do?
Thors Rentals Order Submission application provides a rental shop employee a modern application to submit rental orders by selecting an inventory item to be rented, a customer that is renting the equipment and an employee who is responsible for the rental order. It further allows an employee to specify the rental duration and opportunity to view all submitted rental orders. Additionally, the system automatically calculates the cost of the rental and the date and time when the equipment is due to be returned from loan. <br><br>
TL;DR select equipment, customer, employee in charge of the rental and calculate rental cost and return datetime.

## How does it do it?
The application's Java Spring Boot backend creates inventory items, customers and employees on application's first startup to the MySql database utilised by the application. Once the user navigates to the application's website that is deployed in AWS public cloud utilising Docker, the user is presented an user interface created in React to select whether to view all submitted orders or to submit a new order. If a user chooses to submit a new order, the user is prompted to select the inventory item, customer, employee in charge of the rental and to enter the rental duration. Once these details are entered and a user confirms that the order entered has the correct information in it, the order is saved in a MySql database from which it can be viewed by selecting 'View All Orders' from the landing page. <br><br>
TL;DR React UI interacts with MySQL database and a Java Spring Boot backend deployed in AWS utilising Docker.

## OK, but why?
I wanted to create a three-tier architecture full-stack application to further showcase my skills.<br><br>

## Let's have a look-see, shall we?

<div align="center">
 
### Landing Page
![image](https://user-images.githubusercontent.com/85033252/217074193-7b312eae-4a17-4a20-86cd-d339434c091a.png)
 
### View All Orders
![image](https://user-images.githubusercontent.com/85033252/217074569-593cdf19-914c-4fc4-b2aa-0c2ae5efc685.png)
 
### View Inventory
![image](https://user-images.githubusercontent.com/85033252/217075453-413a9e7c-0caf-4cde-8c8d-0f9d63281a75.png)
 
### Customers
![image](https://user-images.githubusercontent.com/85033252/217075581-14faf9ab-f707-4b58-86d2-8fe03dae006e.png)
 
### Staff Members
![image](https://user-images.githubusercontent.com/85033252/217075902-2c1aa304-71e6-4df7-af53-351dd22d47af.png)
 
### Rental Duration
![image](https://user-images.githubusercontent.com/85033252/217076056-6b025751-4beb-4e1f-acac-d6eaaf45dffb.png)
 
### Rental Review 
![image](https://user-images.githubusercontent.com/85033252/217076177-0efc4ee7-8619-48ce-a1a5-2a7ac4163dc5.png)

### Confirmation Modal 
![image](https://user-images.githubusercontent.com/85033252/217076329-d35eb38c-2ace-422b-ba09-4ebe6248647a.png)
</div>
 
## Possible additions
Possible added features to the application include login and registration capability, HTTPS support, more robust security features developed in Java Spring Boot Security, deleting orders, looking up order by Order ID and so on. The reason that I did not implement these features is that I wanted to make demo three-tiered architecture full stack application that includes the frontend, backend, database and communication between the three. 
