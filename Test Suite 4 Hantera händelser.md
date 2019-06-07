### TC4 Lägg till Observation
Krav: 1.3 - Välja händelse, 1.5.2 - Karta - Händelsesammanfattning 
  
Scenario: Användaren ska skapa ett dagboksinlägg och lägga till en händelse - "Observation".  
  
Precondition: Användare är inloggad.  
  
**Steg**  
  1. Klicka på "Skapa inlägg" i navigeringen eller gå till localhost:3000/diarypost.  
  2. Klicka på "Lägg till händelse" och välj "Observation".  
  3. Välj djur - "Rödräv".
  4. Välj antal - "1 Okänd", "1 Hane", "1 Hona"
  5. Sätt klockslag till "12:34".
  6. Klicka på kartan för att märka ut en plats.
  7. Klicka på "Spara".  

Förväntat utfall: Platsen för händelsen visas med en markör på kartan som är kopplad till inlägget. Observationen läggs till i en tabell över händelser. Tabellen ska ange en rad för den nyss tillagda händelsen enligt: 
   
Händelse | Djur | Antal | -  
--- | --- | --- | ---  
Observation | Rödräv | 3 | Ta bort  

### TC4.1 Lägg till Skott  
Krav: 1.3 - Välja händelse, 1.5.2 - Karta - Händelsesammanfattning 
  
Scenario: Användaren ska skapa ett dagboksinlägg och lägga till en händelse - "Skott".  
  
Precondition: Användare är inloggad.  
  
**Steg**  
  1. Klicka på "Skapa inlägg" i navigeringen eller gå till localhost:3000/diarypost.  
  2. Klicka på "Lägg till händelse" och välj "Skott".  
  3. Välj djur - "Älg".
  4. Välj antal - "0 Okänd", "1 Hane", "0 Hona"
  5. Sätt klockslag till "12:34".
  6. Klicka på kartan för att märka ut en plats.
  7. Klicka på "Spara".  

Förväntat utfall: Platsen för händelsen visas med en markör på kartan som är kopplad till inlägget. Observationen läggs till i en tabell över händelser. Tabellen ska ange en rad för den nyss tillagda händelsen enligt: 

Händelse | Djur | Antal | -  
--- | --- | --- | ---  
Skott | Älg | 1 | Ta bort 

### TC4.2 Ta bort händelse
Krav: 1.3 - Välja händelse, 1.5.2 - Karta - Händelsesammanfattning  

Scenario: Användaren tar bort händelse från lista över händelser.  

Precondition: Användare är inloggad och minst en händelse finns i listan över händelser, enligt TC4 eller TC4.1.  

**Steg**  
  1. Klicka på "Ta bort" på raden som ska tas bort i listan över händelser.   

Förväntat utfall: Raden tas bort från listan. Händelsemarkören på kartan som hör till denna händelse tas bort.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1NjMxNjUxMDddfQ==
-->