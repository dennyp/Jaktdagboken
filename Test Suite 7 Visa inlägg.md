### TC7 Visa inlägg
Krav: 9 - Visa alla inlägg

Scenario: Användaren vill se alla sina egna inlägg.

Precondition: Användaren är inloggad. TC6 är genomförd.

**Steg**
  1. Gå till localhost:3000/.

Förväntat utfall: Användaren ser alla sina **egna** dagboksinlägg. Inga andra användares inlägg ska visas. Inläggen ska innehålla titel, själva inlägget, datum, bild och händelse. De ska sorteras i ordningen de skapades med senaste skapade inlägget överst. Kartan ska visa markör med info om händelserna som inläggen innehåller.

### TC7.1 Visa inlägg - annan användare
Krav: 9 - Visa alla inlägg

Scenario: Användaren vill se alla sina egna inlägg.

Precondition: Användaren är inloggad på annat konto än i TC7. TC6 är genomförd för detta konto.

**Steg**
  1. Gå till localhost:3000/.
 
Förväntat utfall: Användaren ser alla sina **egna** dagboksinlägg. Dessa ska vara skilda från de som ses i TC7. I övrigt ska samma information visas som TC7.
  
<!--stackedit_data:
eyJoaXN0b3J5IjpbODc2NTE2NDM0XX0=
-->