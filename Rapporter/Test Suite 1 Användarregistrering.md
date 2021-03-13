### TC1 Skapa användarkonto
Krav: 6.1 - Skapa användarkonto  
  
Scenario: Användaren skapar ett konto för att kunna logga in på webbplatsen.  
  
Precondition: I utvecklingsmiljön startas både server och klient med kommandot "npm run devStart".  
  
**Steg**  
  1. Gå till localhost:3000/register.  
  2. Skriv "testAccount@test.com" i fältet för E-postadress.
  3. Skriv "testPassword" i fältet för lösenord.   
  4. Skriv "Test Testsson" i fältet för namn.
  5. Klicka på knappen "Registrera".  
 
Förväntat utfall: Kontot sparas i databasen och användaren vidarebefordras till /login. 

### TC1.1 Skapa användarkonto - tomma fält  
Krav: 6.1 - Skapa användarkonto  
  
Scenario: Användaren fyller inte i ett eller flera fält vid registrering.  
  
Precondition: Som TC1.  
  
**Steg**  
  1. Gå till localhost:3000/register. 
  2. Lämna ett av fälten tomt, i de andra skrivs samma data in som för TC1.  
  3. Klicka på "Registrera".
  4. Upprepa steg 2 och 3 för vart och ett av fälten.  
  
Förväntat utfall: Validering ska ske och det ska visas ett meddelande om att alla fält måste fyllas i.  
  
### TC1.2 Skapa användarkonto - redan registrerad email  
Krav: 6.1 - Skapa användarkonto  
  
Scenario: Användaren använder en email som redan finns registrerad i databasen.  
  
Precondition: Som TC1. Användaren "testUser@test.com" måste finnas sparad i databasen.    
  
**Steg**  
  1. Gå till localhost:3000/register.  
  2. Skriv "testUser@test.com" i fältet för E-postadress.  
  3. Fyll i de övriga fälten som i TC1.  
  4. Klicka på knappen "Registrera".  
  
Förväntat utfall: Validering ska ske och det visas ett meddelande om att något gick snett.  


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI0MjI4Njg4M119
-->