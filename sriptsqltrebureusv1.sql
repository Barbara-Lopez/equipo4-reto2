-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema retotrebureus
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema retotrebureus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `retotrebureus` DEFAULT CHARACTER SET latin1 ;
USE `retotrebureus` ;

-- -----------------------------------------------------
-- Table `retotrebureus`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `retotrebureus`.`categoria` (
  `monbrecat` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`monbrecat`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`imagen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `retotrebureus`.`imagen` (
  `idfotos` INT(11) NOT NULL,
  `imagenfoto` LONGBLOB NOT NULL,
  PRIMARY KEY (`idfotos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `retotrebureus`.`producto` (
  `idproducto` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(250) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `stock` INT(3) NOT NULL,
  PRIMARY KEY (`idproducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `retotrebureus`.`usuario` (
  `idusu` INT(11) NOT NULL AUTO_INCREMENT,
  `nombreusu` VARCHAR(45) NOT NULL,
  `contrasenausu` VARCHAR(20) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `gmail` VARCHAR(45) NOT NULL,
  `tlfno` INT(9) NOT NULL,
  `direccion` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idusu`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
