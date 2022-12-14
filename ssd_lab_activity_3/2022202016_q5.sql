SELECT DEPARTMENT.Mgr_ssn, COUNT(*) FROM DEPENDENT, DEPARTMENT
WHERE DEPARTMENT.Mgr_ssn=DEPENDENT.Essn AND DEPARTMENT.Dnumber in (
    SELECT Dnumber FROM DEPT_LOCATIONS
    GROUP BY Dnumber
    HAVING COUNT(Dnumber)>=2)
GROUP BY DEPARTMENT.Mgr_ssn;