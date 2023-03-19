CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id int(11) not null auto_increment,
    name varchar(50) default null,
    salary int(5) default null,
    primary key (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, 'Joe', 1000),
    (2, 'Henry', 2000),
    (3, 'Sam', 4000),
    (4, 'John', 3000),
    (5, 'Tim', 2500);