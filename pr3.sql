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
DROP SCHEMA IF EXISTS `retotrebureus` ;

-- -----------------------------------------------------
-- Schema retotrebureus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `retotrebureus` DEFAULT CHARACTER SET latin1 ;
-- -----------------------------------------------------
-- Schema base
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `base` ;

-- -----------------------------------------------------
-- Schema base
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `base` DEFAULT CHARACTER SET utf8 ;
USE `retotrebureus` ;

-- -----------------------------------------------------
-- Table `retotrebureus`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`categoria` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`categoria` (
  `nombrecat` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`nombrecat`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`usuario` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`usuario` (
  `idusu` INT(11) NOT NULL AUTO_INCREMENT,
  `nombreusu` VARCHAR(45) NOT NULL,
  `contrasenausu` VARCHAR(20) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `gmail` VARCHAR(45) NOT NULL,
  `tlfno` INT(9) NOT NULL,
  `direccion` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idusu`),
  UNIQUE INDEX `nombreusu_UNIQUE` (`nombreusu` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`producto` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`producto` (
  `idproducto` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `stock` INT(3) NOT NULL,
  `fechasubida` DATE NOT NULL,
  `usuariosubido` INT(11) NOT NULL,
  PRIMARY KEY (`idproducto`),
  INDEX `fk_producto_usuario1_idx` (`usuariosubido` ASC) VISIBLE,
  CONSTRAINT `fk_producto_usuario1`
    FOREIGN KEY (`usuariosubido`)
    REFERENCES `retotrebureus`.`usuario` (`idusu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`imagen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`imagen` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`imagen` (
  `idfotos` INT(11) NOT NULL,
  `imagenfoto` LONGBLOB NOT NULL,
  `producto_idproducto` INT(11) NULL,
  `usuario_idusu` INT(11) NULL,
  PRIMARY KEY (`idfotos`),
  INDEX `fk_imagen_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  INDEX `fk_imagen_usuario1_idx` (`usuario_idusu` ASC) VISIBLE,
  CONSTRAINT `fk_imagen_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `retotrebureus`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_imagen_usuario1`
    FOREIGN KEY (`usuario_idusu`)
    REFERENCES `retotrebureus`.`usuario` (`idusu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`compra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`compra` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`compra` (
  `usuario_idusu` INT(11) NOT NULL,
  `producto_idproducto` INT(11) NOT NULL,
  `fecha` DATE NOT NULL,
  `cantidad` INT(3) NOT NULL,
  `comprado` VARCHAR(2) NOT NULL DEFAULT 'NO',
  PRIMARY KEY (`usuario_idusu`, `producto_idproducto`),
  INDEX `fk_usuario_has_producto_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  INDEX `fk_usuario_has_producto_usuario1_idx` (`usuario_idusu` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_producto_usuario1`
    FOREIGN KEY (`usuario_idusu`)
    REFERENCES `retotrebureus`.`usuario` (`idusu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_producto_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `retotrebureus`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `retotrebureus`.`lista_categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`lista_categoria` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`lista_categoria` (
  `producto_idproducto` INT(11) NOT NULL,
  `categoria_monbrecat` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`producto_idproducto`, `categoria_monbrecat`),
  INDEX `fk_producto_has_categoria_categoria1_idx` (`categoria_monbrecat` ASC) VISIBLE,
  INDEX `fk_producto_has_categoria_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  CONSTRAINT `fk_producto_has_categoria_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `retotrebureus`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_has_categoria_categoria1`
    FOREIGN KEY (`categoria_monbrecat`)
    REFERENCES `retotrebureus`.`categoria` (`nombrecat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

USE `base` ;

-- -----------------------------------------------------
-- Table `base`.`Profesores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Profesores` ;

CREATE TABLE IF NOT EXISTS `base`.`Profesores` (
  `Codigo_Profesores` INT NOT NULL AUTO_INCREMENT,
  `Codigo_interno` VARCHAR(15) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellidos` VARCHAR(45) NOT NULL,
  `Telefono` DECIMAL(10,0) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Codigo_Profesores`),
  UNIQUE INDEX `Codigo interno_UNIQUE` (`Codigo_interno` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Familias_Profesionales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Familias_Profesionales` ;

CREATE TABLE IF NOT EXISTS `base`.`Familias_Profesionales` (
  `Codigo_Familia_Profesional` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Familia_Profesional` VARCHAR(45) NULL DEFAULT NULL,
  `Profesores_Codigo_Profesores` INT NOT NULL,
  PRIMARY KEY (`Codigo_Familia_Profesional`),
  INDEX `fk_Familias Profesionales_Profesores1_idx` (`Profesores_Codigo_Profesores` ASC) VISIBLE,
  CONSTRAINT `fk_Familias Profesionales_Profesores1`
    FOREIGN KEY (`Profesores_Codigo_Profesores`)
    REFERENCES `base`.`Profesores` (`Codigo_Profesores`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Ciclos_Formativos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Ciclos_Formativos` ;

CREATE TABLE IF NOT EXISTS `base`.`Ciclos_Formativos` (
  `Codigo_Ciclos_Formativos` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Abreviatura` VARCHAR(45) NOT NULL,
  `Nivel` VARCHAR(45) NOT NULL,
  `Familias_Profesionales_Codigo_Familias_Profesionales` INT NOT NULL,
  PRIMARY KEY (`Codigo_Ciclos_Formativos`),
  INDEX `fk_Ciclos Formativos_Familias Profesionales1_idx` (`Familias_Profesionales_Codigo_Familias_Profesionales` ASC) VISIBLE,
  CONSTRAINT `fk_Ciclos Formativos_Familias Profesionales1`
    FOREIGN KEY (`Familias_Profesionales_Codigo_Familias_Profesionales`)
    REFERENCES `base`.`Familias_Profesionales` (`Codigo_Familia_Profesional`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Grupos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Grupos` ;

CREATE TABLE IF NOT EXISTS `base`.`Grupos` (
  `Codigo_Grupos` INT NOT NULL AUTO_INCREMENT,
  `Abreviatura` VARCHAR(45) NOT NULL,
  `Denominacion` VARCHAR(45) NOT NULL,
  `Tutor_Grupo` INT NOT NULL,
  `Tutor_FCT` INT NOT NULL,
  `Ciclos_Formativos_Codigo_Ciclos_Formativos` INT NOT NULL,
  PRIMARY KEY (`Codigo_Grupos`),
  INDEX `fk_Grupos_Ciclos Formativos1_idx` (`Ciclos_Formativos_Codigo_Ciclos_Formativos` ASC) VISIBLE,
  INDEX `fk_TutorGrupo_idx` (`Tutor_Grupo` ASC) VISIBLE,
  INDEX `fk_TutorFCT_idx` (`Tutor_FCT` ASC) VISIBLE,
  CONSTRAINT `fk_Grupos_Ciclos Formativos1`
    FOREIGN KEY (`Ciclos_Formativos_Codigo_Ciclos_Formativos`)
    REFERENCES `base`.`Ciclos_Formativos` (`Codigo_Ciclos_Formativos`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_TutorGrupo`
    FOREIGN KEY (`Tutor_Grupo`)
    REFERENCES `base`.`Profesores` (`Codigo_Profesores`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_TutorFCT`
    FOREIGN KEY (`Tutor_FCT`)
    REFERENCES `base`.`Profesores` (`Codigo_Profesores`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Alumnos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Alumnos` ;

CREATE TABLE IF NOT EXISTS `base`.`Alumnos` (
  `Codigo_Alumnos` INT NOT NULL AUTO_INCREMENT,
  `DNI` VARCHAR(45) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellidos` VARCHAR(45) NOT NULL,
  `Fecha_Nacimiento` DATE NOT NULL,
  `Telefono` DECIMAL(10,0) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Curso_escolar` VARCHAR(45) NOT NULL,
  `Euskera` VARCHAR(45) NOT NULL,
  `Coche` TINYINT(1) NOT NULL,
  `Carnet_de_conducir` TINYINT(1) NOT NULL,
  `Otros_comentarios` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`Codigo_Alumnos`, `Curso_escolar`),
  UNIQUE INDEX `DNI_UNIQUE` (`DNI` ASC) VISIBLE,
  UNIQUE INDEX `Telefono_UNIQUE` (`Telefono` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`nombre_responsables`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`nombre_responsables` ;

CREATE TABLE IF NOT EXISTS `base`.`nombre_responsables` (
  `cod_responsabilidad` INT NOT NULL AUTO_INCREMENT,
  `nombre_empresario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cod_responsabilidad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Empresas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Empresas` ;

CREATE TABLE IF NOT EXISTS `base`.`Empresas` (
  `Codigo_Empresas` INT NOT NULL AUTO_INCREMENT,
  `Nombre_de_la_empresa` VARCHAR(45) NOT NULL,
  `Nif` VARCHAR(45) NOT NULL,
  `Titularidad` VARCHAR(45) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `Poblacion` VARCHAR(45) NOT NULL,
  `Provincia` VARCHAR(45) NOT NULL,
  `Codigo_Postal` VARCHAR(45) NOT NULL,
  `Telefono` VARCHAR(45) NOT NULL,
  `Fax` VARCHAR(45) NULL DEFAULT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Representante_de_la_empresa` VARCHAR(45) NOT NULL,
  `Telefono_del_representante` VARCHAR(45) NOT NULL,
  `Email_del_representante` VARCHAR(45) NOT NULL,
  `Persona_de_contacto` VARCHAR(45) NOT NULL,
  `Telefono_de_la_persona_de_contacto` VARCHAR(45) NOT NULL,
  `Email_de_la_persona_de_contacto` VARCHAR(45) NOT NULL,
  `Actividad_de_la_empresa` VARCHAR(45) NOT NULL,
  `CNAE` VARCHAR(45) NOT NULL,
  `Numero_de_trabajadores` VARCHAR(45) NOT NULL,
  `KMs_al_centro` VARCHAR(45) NOT NULL,
  `Horarios_de_empresa` VARCHAR(45) NOT NULL,
  `Convenio` TINYINT(1) NOT NULL,
  `Responsable_de_practicas` INT NOT NULL,
  PRIMARY KEY (`Codigo_Empresas`),
  UNIQUE INDEX `Nif_UNIQUE` (`Nif` ASC) VISIBLE,
  INDEX `fk_responsabilidad_idx` (`Responsable_de_practicas` ASC) VISIBLE,
  CONSTRAINT `fk_responsabilidad`
    FOREIGN KEY (`Responsable_de_practicas`)
    REFERENCES `base`.`nombre_responsables` (`cod_responsabilidad`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Asignaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Asignaciones` ;

CREATE TABLE IF NOT EXISTS `base`.`Asignaciones` (
  `Codigo_Asignaciones` INT NOT NULL AUTO_INCREMENT,
  `Codigo_empresa_donde_realiza_practicas_el_alumno` INT NOT NULL,
  `Codigo_Alumnos` INT NOT NULL,
  `Curso_escolar` VARCHAR(45) NOT NULL,
  `Horario` VARCHAR(45) NOT NULL,
  `Observaciones` VARCHAR(250) NULL DEFAULT NULL,
  `Trabajo_desempenado` VARCHAR(45) NOT NULL,
  `Contratacion_del_alumno` TINYINT(1) NOT NULL,
  PRIMARY KEY (`Codigo_Asignaciones`),
  INDEX `fk_CodEmpresa_idx` (`Codigo_empresa_donde_realiza_practicas_el_alumno` ASC) VISIBLE,
  INDEX `fk_CodAlumno_idx` (`Codigo_Alumnos` ASC) VISIBLE,
  CONSTRAINT `fk_CodEmpresa`
    FOREIGN KEY (`Codigo_empresa_donde_realiza_practicas_el_alumno`)
    REFERENCES `base`.`Empresas` (`Codigo_Empresas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CodAlumno`
    FOREIGN KEY (`Codigo_Alumnos`)
    REFERENCES `base`.`Alumnos` (`Codigo_Alumnos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `base`.`Usuarios` (
  `Codigo_Usuarios` INT NOT NULL AUTO_INCREMENT,
  `Nombre_usuario` VARCHAR(45) NOT NULL,
  `Contrasena` VARCHAR(45) NOT NULL,
  `Tipo_de_usuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Codigo_Usuarios`),
  UNIQUE INDEX `Nombre usuario_UNIQUE` (`Nombre_usuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `base`.`Grupos_Alumnos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Grupos_Alumnos` ;

CREATE TABLE IF NOT EXISTS `base`.`Grupos_Alumnos` (
  `Grupos_Codigo_Grupos` INT NOT NULL,
  `Alumnos_Codigo_Alumnos` INT NOT NULL,
  `Alumnos_Curso_escolar` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Grupos_Codigo_Grupos`, `Alumnos_Codigo_Alumnos`, `Alumnos_Curso_escolar`),
  INDEX `fk_Grupos_has_Alumnos_Alumnos1_idx` (`Alumnos_Codigo_Alumnos` ASC, `Alumnos_Curso_escolar` ASC) VISIBLE,
  INDEX `fk_Grupos_has_Alumnos_Grupos1_idx` (`Grupos_Codigo_Grupos` ASC) VISIBLE,
  CONSTRAINT `fk_Grupos_has_Alumnos_Grupos1`
    FOREIGN KEY (`Grupos_Codigo_Grupos`)
    REFERENCES `base`.`Grupos` (`Codigo_Grupos`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Grupos_has_Alumnos_Alumnos1`
    FOREIGN KEY (`Alumnos_Codigo_Alumnos` , `Alumnos_Curso_escolar`)
    REFERENCES `base`.`Alumnos` (`Codigo_Alumnos` , `Curso_escolar`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
