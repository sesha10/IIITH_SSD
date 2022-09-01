DELIMITER $$
CREATE PROCEDURE LISTIN()
BEGIN
    DECLARE finished INTEGER DEFAULT 0;
    DECLARE cname, city, country VARCHAR(100);
    DECLARE cgrade DECIMAL(10, 0);
    DECLARE details CURSOR FOR
        SELECT CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE FROM customer WHERE AGENT_CODE LIKE 'A00%';

    DECLARE CONTINUE HANDLER 
        FOR NOT FOUND SET finished = 1;

    OPEN details;
    find: LOOP
    FETCH details INTO cname, city, country, cgrade;
        IF finished = 1 THEN LEAVE find;
        END IF; 
        SELECT cname as Name, city as City, country as Country, cgrade as Grade;
    END LOOP;
    CLOSE details;
END$$

DELIMITER ;

CALL LISTIN();