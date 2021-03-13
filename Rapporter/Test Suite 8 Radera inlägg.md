### TC8 Radera inlägg
Krav: 10 - Radera inlägg

Scenario: Användaren vill radera ett av sina inlägg.

Precondition: Användaren är inloggad och minst ett inlägg är skapat enligt TC6.

**Steg**
  1. På varje inlägg som listas på localhost:3000/ ska en radera-knapp finnas.
  2. Klicka på "Radera" vid det inlägg som ska tas bort.
  3. Klicka på "OK" i den modal som poppar upp för att bekräfta borttagning.

Förväntat utfall: Inlägget raderas och försvinner från inläggen som listas. Även händelser kopplade till inlägget försvinner från kartan.

### TC8.1 Radera inlägg Avbryt radering
Krav: 10 - Radera inlägg

Scenario: Användaren vill radera ett av sina inlägg men avbryter raderingen.

Precondition: Användaren är inloggad och minst ett inlägg är skapat enligt TC6.

**Steg**
  1. På varje inlägg som listas på localhost:3000/ ska en radera-knapp finnas.
  2. Klicka på "Radera" vid det inlägg som ska tas bort.
  3. Klicka på "Avbryt" eller "x" i övre högra hörnet i den modal som poppar upp för att avbryta borttagning.

Förväntat utfall: Inlägget raderas inte och användaren återgår till sina listade inlägg.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM0MzM1MTA3OSwtMTE1MTI1NTU2NV19
-->