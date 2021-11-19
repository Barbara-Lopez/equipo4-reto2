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
  PRIMARY KEY (`idusu`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE UNIQUE INDEX `nombreusu_UNIQUE` ON `retotrebureus`.`usuario` (`nombreusu` ASC);


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
  `localidad` VARCHAR(45) NOT NULL,
  `fechasubida` DATETIME NOT NULL DEFAULT NOW(),
  `usuariosubido` INT(11) NOT NULL,
  PRIMARY KEY (`idproducto`),
  CONSTRAINT `fk_producto_usuario1`
    FOREIGN KEY (`usuariosubido`)
    REFERENCES `retotrebureus`.`usuario` (`idusu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

CREATE INDEX `fk_producto_usuario1_idx` ON `retotrebureus`.`producto` (`usuariosubido` ASC);


-- -----------------------------------------------------
-- Table `retotrebureus`.`imagen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`imagen` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`imagen` (
  `idfotos` INT(11) NOT NULL,
  `imagenfoto` VARCHAR(30) NOT NULL,
  `producto_idproducto` INT(11) NULL,
  `usuario_idusu` INT(11) NULL,
  PRIMARY KEY (`idfotos`),
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

CREATE INDEX `fk_imagen_producto1_idx` ON `retotrebureus`.`imagen` (`producto_idproducto` ASC);

CREATE INDEX `fk_imagen_usuario1_idx` ON `retotrebureus`.`imagen` (`usuario_idusu` ASC);


-- -----------------------------------------------------
-- Table `retotrebureus`.`compra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`compra` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`compra` (
  `usuario_idusu` INT(11) NOT NULL,
  `producto_idproducto` INT(11) NOT NULL,
  `fecha` DATETIME NOT NULL DEFAULT NOW(),
  `cantidad` INT(3) NOT NULL,
  `estado` VARCHAR(3) NOT NULL DEFAULT 'no',
  PRIMARY KEY (`usuario_idusu`, `producto_idproducto`),
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

CREATE INDEX `fk_usuario_has_producto_producto1_idx` ON `retotrebureus`.`compra` (`producto_idproducto` ASC);

CREATE INDEX `fk_usuario_has_producto_usuario1_idx` ON `retotrebureus`.`compra` (`usuario_idusu` ASC);


-- -----------------------------------------------------
-- Table `retotrebureus`.`lista_categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `retotrebureus`.`lista_categoria` ;

CREATE TABLE IF NOT EXISTS `retotrebureus`.`lista_categoria` (
  `producto_idproducto` INT(11) NOT NULL,
  `categoria_monbrecat` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`producto_idproducto`, `categoria_monbrecat`),
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

CREATE INDEX `fk_producto_has_categoria_categoria1_idx` ON `retotrebureus`.`lista_categoria` (`categoria_monbrecat` ASC);

CREATE INDEX `fk_producto_has_categoria_producto1_idx` ON `retotrebureus`.`lista_categoria` (`producto_idproducto` ASC);

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
  PRIMARY KEY (`Codigo_Profesores`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Codigo interno_UNIQUE` ON `base`.`Profesores` (`Codigo_interno` ASC);


-- -----------------------------------------------------
-- Table `base`.`Familias_Profesionales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Familias_Profesionales` ;

CREATE TABLE IF NOT EXISTS `base`.`Familias_Profesionales` (
  `Codigo_Familia_Profesional` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Familia_Profesional` VARCHAR(45) NULL DEFAULT NULL,
  `Profesores_Codigo_Profesores` INT NOT NULL,
  PRIMARY KEY (`Codigo_Familia_Profesional`),
  CONSTRAINT `fk_Familias Profesionales_Profesores1`
    FOREIGN KEY (`Profesores_Codigo_Profesores`)
    REFERENCES `base`.`Profesores` (`Codigo_Profesores`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_Familias Profesionales_Profesores1_idx` ON `base`.`Familias_Profesionales` (`Profesores_Codigo_Profesores` ASC);


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
  CONSTRAINT `fk_Ciclos Formativos_Familias Profesionales1`
    FOREIGN KEY (`Familias_Profesionales_Codigo_Familias_Profesionales`)
    REFERENCES `base`.`Familias_Profesionales` (`Codigo_Familia_Profesional`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_Ciclos Formativos_Familias Profesionales1_idx` ON `base`.`Ciclos_Formativos` (`Familias_Profesionales_Codigo_Familias_Profesionales` ASC);


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

CREATE INDEX `fk_Grupos_Ciclos Formativos1_idx` ON `base`.`Grupos` (`Ciclos_Formativos_Codigo_Ciclos_Formativos` ASC);

CREATE INDEX `fk_TutorGrupo_idx` ON `base`.`Grupos` (`Tutor_Grupo` ASC);

CREATE INDEX `fk_TutorFCT_idx` ON `base`.`Grupos` (`Tutor_FCT` ASC);


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
  PRIMARY KEY (`Codigo_Alumnos`, `Curso_escolar`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `DNI_UNIQUE` ON `base`.`Alumnos` (`DNI` ASC);

CREATE UNIQUE INDEX `Telefono_UNIQUE` ON `base`.`Alumnos` (`Telefono` ASC);

CREATE UNIQUE INDEX `Email_UNIQUE` ON `base`.`Alumnos` (`Email` ASC);


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
  CONSTRAINT `fk_responsabilidad`
    FOREIGN KEY (`Responsable_de_practicas`)
    REFERENCES `base`.`nombre_responsables` (`cod_responsabilidad`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Nif_UNIQUE` ON `base`.`Empresas` (`Nif` ASC);

CREATE INDEX `fk_responsabilidad_idx` ON `base`.`Empresas` (`Responsable_de_practicas` ASC);


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

CREATE INDEX `fk_CodEmpresa_idx` ON `base`.`Asignaciones` (`Codigo_empresa_donde_realiza_practicas_el_alumno` ASC);

CREATE INDEX `fk_CodAlumno_idx` ON `base`.`Asignaciones` (`Codigo_Alumnos` ASC);


-- -----------------------------------------------------
-- Table `base`.`Usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `base`.`Usuarios` (
  `Codigo_Usuarios` INT NOT NULL AUTO_INCREMENT,
  `Nombre_usuario` VARCHAR(45) NOT NULL,
  `Contrasena` VARCHAR(45) NOT NULL,
  `Tipo_de_usuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Codigo_Usuarios`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Nombre usuario_UNIQUE` ON `base`.`Usuarios` (`Nombre_usuario` ASC);


-- -----------------------------------------------------
-- Table `base`.`Grupos_Alumnos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `base`.`Grupos_Alumnos` ;

CREATE TABLE IF NOT EXISTS `base`.`Grupos_Alumnos` (
  `Grupos_Codigo_Grupos` INT NOT NULL,
  `Alumnos_Codigo_Alumnos` INT NOT NULL,
  `Alumnos_Curso_escolar` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Grupos_Codigo_Grupos`, `Alumnos_Codigo_Alumnos`, `Alumnos_Curso_escolar`),
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

CREATE INDEX `fk_Grupos_has_Alumnos_Alumnos1_idx` ON `base`.`Grupos_Alumnos` (`Alumnos_Codigo_Alumnos` ASC, `Alumnos_Curso_escolar` ASC);

CREATE INDEX `fk_Grupos_has_Alumnos_Grupos1_idx` ON `base`.`Grupos_Alumnos` (`Grupos_Codigo_Grupos` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `retotrebureus`.`categoria`
-- -----------------------------------------------------
START TRANSACTION;
USE `retotrebureus`;
INSERT INTO `retotrebureus`.`categoria` (`nombrecat`) VALUES ('Otros');
INSERT INTO `retotrebureus`.`categoria` (`nombrecat`) VALUES ('Tecnologia');
INSERT INTO `retotrebureus`.`categoria` (`nombrecat`) VALUES ('Escolar');
INSERT INTO `retotrebureus`.`categoria` (`nombrecat`) VALUES ('Juguetes');

COMMIT;


-- -----------------------------------------------------
-- Data for table `retotrebureus`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `retotrebureus`;
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (1, 'unaitxo', '12345', 'unai', 'unai.diez@ikasle.egibide.org', 942112233, 'markole kalea 26 1izq');
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (2, 'barbarita', '54321', 'barbara', 'barbara.lopez@ikasle.egibide.org', 934556677, 'arena 33');
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (3, 'cerdan', '53124', 'roberto', 'roberto.cerdan@ikasle.egibide.org', 944552211, 'arriaga 31');
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (4, 'alex', '85246', 'alejandro', 'alejandro777@gmail.com', 688521346, 'Txabal 32 bajo b');
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (5, 'cutxicu', '22223', 'maria', 'marcutxi@gmail.com', 722113355, 'Cantina 06 7izq');
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (6, 'ositini', '52025', 'ander', 'andositi@gmail.com', 722114455, 'gaztea kalea 32 2izq');
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (7, 'kanaka', '88552', 'kepa', 'kepakan@gmail.com', 943552268, 'gipuzkoa iribilbidea 24 3der');
INSERT INTO `retotrebureus`.`usuario` (`idusu`, `nombreusu`, `contrasenausu`, `nombre`, `gmail`, `tlfno`, `direccion`) VALUES (8, 'ejemeje', '75319', 'barbara', 'ejebarba@gmail.com', 677642584, 'Tuon 23 5der');

COMMIT;


-- -----------------------------------------------------
-- Data for table `retotrebureus`.`producto`
-- -----------------------------------------------------
START TRANSACTION;
USE `retotrebureus`;
INSERT INTO `retotrebureus`.`producto` (`idproducto`, `titulo`, `descripcion`, `precio`, `stock`, `localidad`, `fechasubida`, `usuariosubido`) VALUES (1, 'Grapadora Petrus 226 Retro Blanco 624401 AG', 'Grapadora Petrus 226 Retro Blanco 624401. Petrus 226 de edición Retro color Blanco, Grapa hasta 30 hojas. Resistente grapadora de metal para uso cotidiano. Robusto y fiable. ', 25.31, 50, 'Vitoria', DEFAULT, 1);
INSERT INTO `retotrebureus`.`producto` (`idproducto`, `titulo`, `descripcion`, `precio`, `stock`, `localidad`, `fechasubida`, `usuariosubido`) VALUES (2, 'Agenda Espiral Finocam Tempus 4º', ' Con la agenda anual Finocam Tempus podrás planificar tus metas, objetivos y compromisos, porque es una herramienta que te facilitará la gestión diaria de tu tiempo personal y de trabajo, adaptándose a ti.', 17, 40, 'Vitoria', DEFAULT, 1);
INSERT INTO `retotrebureus`.`producto` (`idproducto`, `titulo`, `descripcion`, `precio`, `stock`, `localidad`, `fechasubida`, `usuariosubido`) VALUES (3, 'Libreta Mr. Wonderful Set de 2', 'Da igual si la pospones hasta diez veces o si saltas de la cama a la primera, tu cabecita ya está en marcha y no parará hasta que te vuelvas a acostar (si es que con todos los sueños que tienes se puede llamar parar a eso). ', 3.5, 30, 'Bilbao', DEFAULT, 2);
INSERT INTO `retotrebureus`.`producto` (`idproducto`, `titulo`, `descripcion`, `precio`, `stock`, `localidad`, `fechasubida`, `usuariosubido`) VALUES (4, 'Masters of the Universe Origins', 'Mattel presenta la nueva colección Origins para la serie Masters of the Universe. Se trata de una revisión actualizada de las figuras originales de los años 80 basadas en este mundo ficticio de Sword & Sorcery y SciFi.  ', 17.09, 15, 'San Sebastian', DEFAULT, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `retotrebureus`.`imagen`
-- -----------------------------------------------------
START TRANSACTION;
USE `retotrebureus`;
INSERT INTO `retotrebureus`.`imagen` (`idfotos`, `imagenfoto`, `producto_idproducto`, `usuario_idusu`) VALUES (1, 'imagen1.jpg', 1, NULL);
INSERT INTO `retotrebureus`.`imagen` (`idfotos`, `imagenfoto`, `producto_idproducto`, `usuario_idusu`) VALUES (2, 'imagen2p1.jpg', 2, NULL);
INSERT INTO `retotrebureus`.`imagen` (`idfotos`, `imagenfoto`, `producto_idproducto`, `usuario_idusu`) VALUES (3, 'imagen2p2.jpg', 2, NULL);
INSERT INTO `retotrebureus`.`imagen` (`idfotos`, `imagenfoto`, `producto_idproducto`, `usuario_idusu`) VALUES (4, 'imagen2p3.jpg', 2, NULL);
INSERT INTO `retotrebureus`.`imagen` (`idfotos`, `imagenfoto`, `producto_idproducto`, `usuario_idusu`) VALUES (5, 'imagen2p4.jpg', 2, NULL);
INSERT INTO `retotrebureus`.`imagen` (`idfotos`, `imagenfoto`, `producto_idproducto`, `usuario_idusu`) VALUES (6, 'imagen3.jpg', 3, NULL);
INSERT INTO `retotrebureus`.`imagen` (`idfotos`, `imagenfoto`, `producto_idproducto`, `usuario_idusu`) VALUES (7, 'perfil1.jpg', NULL, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `retotrebureus`.`compra`
-- -----------------------------------------------------
START TRANSACTION;
USE `retotrebureus`;
INSERT INTO `retotrebureus`.`compra` (`usuario_idusu`, `producto_idproducto`, `fecha`, `cantidad`, `estado`) VALUES (1, 1, DEFAULT, 0, 'fav');

COMMIT;


-- -----------------------------------------------------
-- Data for table `retotrebureus`.`lista_categoria`
-- -----------------------------------------------------
START TRANSACTION;
USE `retotrebureus`;
INSERT INTO `retotrebureus`.`lista_categoria` (`producto_idproducto`, `categoria_monbrecat`) VALUES (2, 'Otros');
INSERT INTO `retotrebureus`.`lista_categoria` (`producto_idproducto`, `categoria_monbrecat`) VALUES (3, 'Escolar');
INSERT INTO `retotrebureus`.`lista_categoria` (`producto_idproducto`, `categoria_monbrecat`) VALUES (3, 'Tecnologia');

COMMIT;

