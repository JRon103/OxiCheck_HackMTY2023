-- Base de Datos OxiCheck

-- Inicialización de la base de datos.
DROP DATABASE IF EXISTS oxi;
CREATE DATABASE oxi;
USE oxi;

-- Definición y creación de Tablas

CREATE TABLE `data`(
    INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
    Alta INT NOT NULL,
    Baja INT NOT NULL,
    Promedio INT NULL 
);

