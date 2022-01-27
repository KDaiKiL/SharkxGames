CREATE DATABASE sharkx
 
CREATE TABLE users (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    cpf CHAR(14) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    data_nascimento CHAR(10) NOT NULL,
    cep CHAR(9) NOT NULL,
    endereço VARCHAR(100) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(10) NOT NULL,
    bairro VARCHAR(10) NOT NULL,
    referencia VARCHAR(20) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado ENUM("AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT" , "MS" , "MG" , "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO") NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE cartoes (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    bandeira ENUM('mastercard','alelo','visa','elo','cielo','hipercard','bradesco','nukebank') NOT NULL,
    numero CHAR(19) NOT NULL,
    tipo ENUM('debito','credito') NOT NULL,
    validade CHAR(5) NOT NULL,
    cvv VARCHAR(5) NOT NULL,
    PRIMARY KEY (id)
); 

CREATE TABLE produtos (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    usuario_id INT(10) UNSIGNED NOT NULL,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco VARCHAR(10) NOT NULL,
    desconto VARCHAR(10) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY user_fk (usuario_id) REFERENCES users(id)
);

CREATE TABLE imagens (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    carrinho VARCHAR(100) NOT NULL,
    produto_id INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY produto_fk (produto_id) REFERENCES produtos(id)
);

CREATE TABLE compras (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    usuario_id INT(10) UNSIGNED NOT NULL,
    produto_id INT(10) UNSIGNED NOT NULL,
    cartao_id INT(10) UNSIGNED NOT NULL,
    frete VARCHAR(10),
    PRIMARY KEY (id),
    FOREIGN KEY cliente_fk (usuario_id) REFERENCES users(id),
    FOREIGN KEY mercadoria_fk (produto_id) REFERENCES produtos(id),
    FOREIGN KEY cartao_fk (cartao_id) REFERENCES cartoes(id)
);

