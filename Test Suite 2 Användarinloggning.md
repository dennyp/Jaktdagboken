### TC2 Logga in
Krav: 6.2 - Inloggning
  
Scenario: Användaren loggar in i applikationen.  
  
Precondition: TS1 har genomförts och användaren "testAccount@test.com" finns registrerad i databasen.  

**Steg**  
  1. Gå till localhost:3000/login.  
  2. Skriv "testAccount@test.com" i fältet för E-postadress.  
  3. Skriv in "testPassword" i fältet för lösenord.  
  4. Klicka på knappen "Logga in".  
  
Förväntat utfall: Man redigeras till localhost:3000/ och en cookie skapas benämnd "jdbjwt".
  
### TC2.1 Logga in - tomma fält
Krav: 6.2 - Inloggning
  
Scenario: Användaren försöker logga in i applikationen utan att fylla i ett eller flera fält.  
  
Precondition:   

**Steg**  
  1. Gå till localhost:3000/login.  
  2. Lämna ett av fälten tomt, i det andra skrivs samma data in som för TC2.  
  3. Klicka på knappen "Logga in".  
  4. Upprepa steg 2 och 3 för båda fälten.  
  
Förväntat utfall: Meddelande visas om att man måste fylla i alla fält.  
  
### TC2.2 Logga in - fel lösenord
Krav: 6.2 - Inloggning
  
Scenario: Användaren försöker logga in i applikationen med ett konto som finns registrerat men anger fel lösenord.  
  
Precondition: Användarkontot "testAccount@test.com" måste finnas registrerad i databasen.  

**Steg**  
  1. Gå till localhost:3000/login.  
  2. Skriv "testAccount@test.com" i fältet för E-postadress.  
  3. Skriv in något lösenord som inte är "testPassword" i fältet för lösenord.  
  4. Klicka på knappen "Logga in".    
  
Förväntat utfall: Meddelande visas om att login är felaktig.  
  
### TC2.3 Logga in - ej registrerad email
Krav: 6.2 - Inloggning
  
Scenario: Användaren försöker logga in i applikationen med en email som inte finns registrerad i databasen.  
  
Precondition: Användarkontot som skrivs in i fältet för E-postadress ska inte finnas i databasen.  

**Steg**  
  1. Gå till localhost:3000/login.  
  2. Skriv "ejregistrerad@test.com" i fältet för E-postadress.  
  3. Skriv valfri text i fältet för lösenord.  
  4. Klicka på knappen "Logga in".    
  
Förväntat utfall: Meddelande visas om att login är felaktig. 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA1ODI4NDgwOF19
-->