-- Base de Datos OxiCheck

-- Inicialización de la base de datos.
DROP DATABASE IF EXISTS oxi;
CREATE DATABASE oxi;
USE oxi;

-- Definición y creación de Tablas

CREATE TABLE `data` (
  `Dia` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Alta` INT NOT NULL,
  `Baja` INT NOT NULL,
  `Promedio` INT NOT NULL
);
