### TC6 Spara inlägg
Krav: 2 - Spara inlägg

Scenario: Användaren skapar ett nytt inlägg till dagboken och sparar.

Precondition: Användaren är inloggad enligt TC2. Användaren har utfört TC4 och TC5.

**Steg** 
  1. Skriv "Test dagboksinlägg" i fältet för Titel.
  2. Skriv "Lorem ipsum dolor sit amet." i fältet för Inlägg.
  3. Välj "2019-05-31" i fältet för Datum.
  4. Klicka på "Spara inlägg".

Förväntat utfall: Knappen för "Spara inlägg" visar en spinner och byter text till "Sparar..." medan bilder laddas upp till databasen. Användaren hamnar på sidan localhost:3000/ som visar användarens inlägg.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3MDkwODMzMTNdfQ==
-->