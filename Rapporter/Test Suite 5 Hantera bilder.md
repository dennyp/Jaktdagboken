### TC5 Lägg till bild i dagboksinlägg
Krav: 1.2 - Lägga till bild  

Scenario: Användaren lägger till en bild kopplat till ett dagboksinlägg.  

Precondition: Användaren är inloggad.  

**Steg** 
  1. Klicka på "Skapa inlägg" i navigeringen eller gå till localhost:3000/diarypost.
  2. Klicka på "Välj fil" under "Ladda upp bild".
  3. Lägg till en bild genom dialogrutan.

Förväntat utfall: Bildens namn listas i en lista under "Ladda upp bild".

### TC5.1 Ta bort bild från dagboksinlägg
Krav: 1.2 - Lägga till bild  

Scenario: Användaren tar bort en bild denne kopplat till dagboksinlägget.  

Precondition: Användaren är inloggad. TC5 är utfört så att minst en bild ligger i listan över bilder.  

**Steg** 
  1. Klicka på X som är kopplat till en bild i listan över bilder.

Förväntat utfall: Endast bilden som menades tas bort försvinner från listan över bilder.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgxMDE0MjYxN119
-->