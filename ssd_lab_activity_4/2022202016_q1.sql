DELIMITER $$
CREATE PROCEDURE ADDN (IN A INT, IN B INT, OUT C INT)
BEGIN
SELECT A+B INTO C;
END$$

DELIMITER ;


CALL ADDN(5,10,@C);
SELECT @C;

