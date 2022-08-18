SELECT e.Fname, e.ssn, s.cnt FROM EMPLOYEE e
INNER JOIN (
    SELECT Super_ssn, COUNT(Ssn) AS cnt FROM EMPLOYEE 
    WHERE Super_ssn is NOT NULL 
    GROUP BY Super_ssn
) as s on s.Super_ssn=e.ssn
ORDER BY s.cnt;