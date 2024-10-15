# How to connect MySQL / MariaDB to JS
i am doing all the shit in terminal using MariaDB docker container, so this will be usefull if you dont use mysql workbench or smth.
all data that i have written in [square brackets] you can change by yourself.
also there are some options (i.e. [mysql / mariadb]) - you should write that one option that you use.

### Enter a SQL in terminal
```docker exec -it [name-of-your-container] [mysql / mariadb] -u root -p```
then enter the password to the root user

### Create a new User and add all the prevelegies to him
```
CREATE USER [lab5@test] IDENTIFIED BY '[password]';
GRANT ALL PRIVILEGES ON *.* TO '[lab5@test]' IDENTIFIED BY '[password]';
FLUSH PRIVILEGES;
```
instead of lab5@test and password write your data.

### Check if the prevelegies have been applied
```SHOW GRANTS FOR 'lab5@test';```

### In case you want to delete a MariaDB User
```DROP USER 'user1'@localhost;```

### Exit the mysql
```exit```
