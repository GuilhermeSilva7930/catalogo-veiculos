CREATE DATABASE catalogo;

use catalogo;

INSERT INTO veiculo(marca, modelo, nome, preco, foto) VALUES("Volkswagen", "Volkswagen Up TSI MOVE UP", "Volkswagen Up TSI MOVE UP", 53.999, "https://images.kavak.services/images/127798/EXTERIOR-frontSidePilotNear-16367498679596.jpg?d=540x310");
INSERT INTO veiculo(marca, modelo, nome, preco, foto) VALUES("Bmw", "328i SPORT GP", "Bmw 328i SPORT GP", 115.999, "https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310");
INSERT INTO veiculo(marca, modelo, nome, preco, foto) VALUES("Suzuki", "Jimny 4ALL", "Suzuki Jimny 4ALL", 74.299, "https://images.kavak.services/images/130053/EXTERIOR-frontSidePilotNear-16367489553727.jpg?d=540x310");
INSERT INTO veiculo(marca, modelo, nome, preco, foto) VALUES("Toyota", "Corolla ALTIS", "Toyota Corolla ALTIS", 94.999, "https://images.kavak.services/images/126960/EXTERIOR-frontSidePilotNear-16370909549766.jpg?d=540x310")
INSERT INTO veiculo(marca, modelo, nome, preco, foto) VALUES("LAND ROVER", "DISCOVERY SPORT TD4 TURBO HSE", "LAND ROVER DISCOVERY SPORT TD4 TURBO HSE", 214.999, "https://images.kavak.services/images/112456/EXTERIOR-frontSidePilotNear-16315568921606.jpg?d=540x310");

INSERT INTO usuario(username, password, authorities) values("guilherme", "{bcrypt}$2a$10$WANOfn2JQoQqhNfnE/uaBeyf49ULPyQjECv94QrdM4mUyL4h/VQLW", "ROLE_ADMIN,ROLE_USER");