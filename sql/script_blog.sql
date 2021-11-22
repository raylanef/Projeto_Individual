use projetoIndividual;

create table postagem (
idPostagem int auto_increment primary key,
titulo varchar(200),
corpo longtext
);

describe postagem;

insert  into postagem (titulo,corpo) values ('chuchu','fala tu');

select * from postagem;
