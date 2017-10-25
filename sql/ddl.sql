create database livros_api;

use livros_api;

create table autor(
	id int(11) primary key auto_increment,
    nome varchar(255) not null,
    email varchar(255) not null
);

create table livro(
	id int(11) primary key auto_increment,
    titulo varchar(255) not null,
    lancamento int(4) not null,
    autor int(11) not null,
    foreign key(autor) references autor(id)
);
