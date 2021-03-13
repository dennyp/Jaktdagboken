### TC9 Autentisering "/"
Scenario: En icke inloggad användare ska inte nå localhost:3000/.

Precondition: Utloggad från applikationen.

**Steg**
  1. Gå till localhost:3000/

Förväntat utfall: Applikationen vidarebefordrar dig till localhost:3000/login.

### TC9.1 Autentisering Skapa inlägg
Scenario: En icke inloggad användare ska inte nå localhost:3000/diarypost.

Precondition: Utloggad från applikationen.

**Steg**
  1. Gå till localhost:3000/diarypost.

Förväntat utfall: Applikationen vidarebefordrar dig till localhost:3000/login.

### TC9.2 Sökvägen kan inte hittas
Scenario: Användare får felmeddelande då sökvägen inte kan hittas.

Precondition: Utloggad från applikationen.

**Steg** 
  1. Gå till localhost:3000/finnsej.
  2. Se förväntat utfall och repetera sedan steg 1 då inloggad.

Förväntat utfall: Ett felmeddelande '"Fel: Sökvägen kan inte hittas." dyker upp oavsett om man är inloggad eller ej.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM4NDU5NzAzMF19
-->