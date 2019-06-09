Nedan tabell visar vilka krav som finns i projektet. Krav med prioritet 1 måste implementeras, 2 om tid finns över. TS i kolumnen för Test står för Test Suite.
  
Krav 7 Redigera inlägg med prio 1 har jag diskuterat under de sista mötena om jag hinner genomföra. Jag implementerade en fungerande backend till detta men frontenden kommer ta för lång tid så jag bestämde mig för att prioritera ner denna funktionaliteten. Detta krav är dock prioriterat först vid fortsatt utveckling.  

ID | Namn | Typ | Status | Beskrivning | Test | Prio | Beroende
--- | --- | --- | --- | --- | --- | :---: | :---:
1 | Skapa nytt inlägg | Funktionellt | Klar | Som användare vill jag kunna skapa ett nytt dagboksinlägg | [TS6](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-6---Spara-inl%C3%A4gg) | 1 | -
1.1 | Välja datum  | Funktionellt | Klar | Som användare vill jag kunna välja ett datum på ett nytt inlägg | [TS6](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-6---Spara-inl%C3%A4gg) | 1 | 1
1.2 | Lägga till bild | Funktionellt | Klar | Som användare vill jag kunna lägga till en eller flera bilder kopplade till ett nytt inlägg | [TS5](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-5-Hantera-bilder) | 1 | 1
1.3 | Välja händelse | Funktionellt | Klar | Som användare vill jag kunna lägga till en eller flera händelser kopplade till ett nytt inlägg och de ska visas i en lista | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1
1.3.1 | Typ av händelse | Funktionellt | Klar | Som användare vill jag kunna välja typ (observation, skott) på en händelse | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1.3
1.3.2 | Välja djur | Funktionellt | Klar | Som användare vill jag kunna välja ett eller flera djur från den svenska faunan kopplade till en händelse | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1.3
1.3.3 | Visa karta | Funktionellt | Klar | Som användare vill jag se och kunna använda en karta ifrån Google Maps kopplat till inlägget | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1.3
1.3.4 | Markera på karta | Funktionellt | Klar | Som användare vill jag markera på karta var någonstans händelsen utspelade sig | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1.3
1.3.5 | Välja klockslag  | Funktionellt | Klar | Som användare vill jag kunna välja ett klockslag på en ny händelse | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1.3
1.4 | Ange väder | Funktionellt | - | Som användare vill jag kunna ange väderförhållandet (temperatur, vind, lufttryck) den aktuella dagen | - | 2 | 1
1.4.1 | Hämta väder automatiskt | Funktionellt | - | Som användare vill jag kunna hämta vädret automatiskt för aktuell dag och tidpunkt | - | 2 | 1.4
1.5 | Karta | Funktionellt | Klar | Som användare vill jag kunna se och använda en karta | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1
1.5.1 | Karta - överblick | Funktionellt | Klar | Som användare vill jag kunna se alla mina händelser på kartan | [TS7](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-7-Visa-inl%C3%A4gg) | 1 | 1.5
1.5.2 | Karta - Händelsesammanfattning  | Funktionellt | Klar | Som användare vill jag kunna se en sammanfattning av händelsen då jag väljer den | [TS4](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-4---Hantera-h%C3%A4ndelser) | 1 | 1.5.1
1.5.3 | Karta - geolocation | Funktionellt | - | Som användare vill jag kunna ladda kartan ifrån min position | - | 2 | 1.5
1.5.4 | Karta - bestämma plats | Funktionellt | - | Som användare vill jag kunna ställa in vilken plats som ska laddas in som default | - | 2 | 1.5
2 | Spara inlägg | Funktionellt | Klar | Som användare vill jag kunna spara ett dagboksinlägg | [TS6](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-6---Spara-inl%C3%A4gg) | 1 | 1
3 | Språk | Projektövergripande | Klar | Som användare vill jag navigera webbplatsen på svenska | - | 1 | -
4 | Statistik | Funktionellt | - | Som användare vill jag se statistik över mina händelser | - | 2 | -
4.1 | Statistik - Antal djur | Funktionellt | - | Som användare vill jag se statistik över antal djur som observerats | - | 2 | 4
4.2 | Statistik - Tid på dygnet | Funktionellt | - | Som användare vill jag se statistik över tid på dygnet som händelserna inträffade | - | 2 | 4
5 | Mobilanpassad | Funktionellt | Påbörjat | Som användare vill jag att applikationen ska fungera i mobilen | - | 2 | -
5.1 | Ta foton direkt i appen| Funktionellt | - | Som användare vill jag kunna ta foton med mobilkameran direkt i appen | - | 2 | 5
6 | Användarkonto | Funktionellt | Klar | Som användare vill jag kunna skapa ett konto och kunna logga in med mina uppgifter | [TS1](https://github.com/1dv430/dp222gj-project/wiki/Test-suite-1---Anv%C3%A4ndarregistrering), [TS2](https://github.com/1dv430/dp222gj-project/wiki/Test-suite-2---Anv%C3%A4ndarinloggning), [TS3](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-3---Utloggning) | 1 | -
6.1 | Skapa användarkonto | Funktionellt | Klar | Som användare vill jag kunna skapa ett användarkonto | [TS1](https://github.com/1dv430/dp222gj-project/wiki/Test-suite-1---Anv%C3%A4ndarregistrering) | 1 | 6
6.2 | Inloggning | Funktionellt | Klar | Som användare vill jag kunna logga in i applikationen så att jag kan komma åt mina sparade inlägg | [TS2](https://github.com/1dv430/dp222gj-project/wiki/Test-suite-2---Anv%C3%A4ndarinloggning) | 1 | 6
6.3 | Authentication | Funktionellt | Klar | Man måste vara authenticerad för att se sina inlägg, komma åt profil etc. | [TS2](https://github.com/1dv430/dp222gj-project/wiki/Test-suite-2---Anv%C3%A4ndarinloggning) | 1 | 6
6.4 | Utloggning | Funktionellt | Klar | Som användare ska man kunna logga ut från sitt konto. | [TS3](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-3---Utloggning) | 1 | 6 
7 | Redigera inlägg | Funktionellt | Påbörjat | Som användare vill jag kunna redigera ett redan skapat inlägg | - | 2 | -
8 | Profil | Funktionellt | - | Som användare vill jag ha en profil där jag kan ange inställningar så som startplatsens koordinater på kartan | - | 2 | -
9 | Visa alla  inlägg | Funktionellt | Klar | Som användare vill jag se alla mina inlägg då jag loggat in | [TS7](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-7-Visa-inl%C3%A4gg) | 1 |  2
10 | Radera inlägg | Funktionellt | Klar | Som användare vill jag kunna radera mina inlägg | [TS8](https://github.com/1dv430/dp222gj-project/wiki/Test-Suite-8-Radera-inl%C3%A4gg) | 1 | 2
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NTU5MDE1MiwtOTQ3ODU2MTE4XX0=
-->