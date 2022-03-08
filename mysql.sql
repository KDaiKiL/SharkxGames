CREATE DATABASE sharkx
 
CREATE TABLE usuario (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone CHAR(13) NOT NULL,
    cpf CHAR(14) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    data_nascimento CHAR(10) NOT NULL,
    cep CHAR(9) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(10) NOT NULL,
    bairro VARCHAR(10) NOT NULL,
    referencia VARCHAR(20) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado ENUM("AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT" , "MS" , "MG" , "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO") NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE cartao (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    bandeira ENUM('mastercard','alelo','visa','elo','cielo','hipercard','bradesco','nukebank') NOT NULL,
    numero CHAR(19) NOT NULL,
    tipo ENUM('debito','credito') NOT NULL,
    validade CHAR(5) NOT NULL,
    cvv VARCHAR(5) NOT NULL,
    PRIMARY KEY (id)
); 

CREATE TABLE produto (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    usuario_id INT(10) UNSIGNED NOT NULL,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    preco DECIMAL(10, 2) NOT NULL,
    desconto DECIMAL(10),
    descricao VARCHAR(1000),
    imgPath VARCHAR(100),
    PRIMARY KEY (id),
    FOREIGN KEY user_fk (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE compra (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    usuario_id INT(10) UNSIGNED NOT NULL,
    produto_id INT(10) UNSIGNED NOT NULL,
    cartao_id INT(10) UNSIGNED NOT NULL,
    frete VARCHAR(10),
    PRIMARY KEY (id),
    FOREIGN KEY cliente_fk (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY mercadoria_fk (produto_id) REFERENCES produto(id),
    FOREIGN KEY cartao_fk (cartao_id) REFERENCES cartao(id)
);