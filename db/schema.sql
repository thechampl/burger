create DATABASE burgers_db;
use burgers_db;
create table burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN DEFAULT false,

);