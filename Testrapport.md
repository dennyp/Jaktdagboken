## Manuella test suites för applikationen
Applikationen har testats i Chrome, Firefox och Edge. Ingen testning har gjorts i Safari eller Internet Explorer.  Ingen testning har heller skett för mobila plattformar.  

:heavy_check_mark: - betyder att testet lyckats.  
:x: - betyder att testet misslyckats.

### Test Suite 1 Användarregistrering
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|:--:|:--:|:--:|:--:
TC1 | Skapa användarkonto | 2019-06-06 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC1.1 | Skapa användarkonto - tomma fält | 2019-06-06 |:heavy_check_mark: |:heavy_check_mark:|:heavy_check_mark:|
TC1.2 | Skapa användarkonto - redan registrerad email | 2019-06-06 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:| 

 ### Test Suite 2 Användarinloggning
 Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC2 | Logga in | 2019-06-06 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:| 
TC2.1 | Logga in - tomma fält | 2019-06-06 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:| 
TC2.2 | Logga in - fel lösenord | 2019-06-06 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC2.3 | Logga in - ej registrerad email | 2019-06-06 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

### Test Suite 3 Utloggning
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC3 | Logga ut | 2019-06-06 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

### Test Suite 4 Hantera händelser
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC4 | Lägg till Observation | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC4.1 | Lägg till Skott | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC4.2 | Ta bort händelse | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

### Test Suite 5 Hantera bilder
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC5 | Lägg till bild i dagboksinlägg | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC5.1 | Ta bort bild från dagboksinlägg | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

### Test Suite 6 Spara inlägg
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC6 | Spara inlägg | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

### Test Suite 7 Visa inlägg
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC7 | Visa inlägg | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC7.1 | Visa inlägg - annan användare | 2019-06-07 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

### Test Suite 8 Radera inlägg
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC8 | Radera inlägg | 2019-06-08 |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC8.1| Radera inlägg - Avbryt radering | 2019-06-08 |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

### Test Suite 9 Autentisering
Test Case| Beskrivning | Körd  | Chrome | Firefox | Edge
--|--|--|:--:|:--:|:--:
TC9 | Autentisering "/" | 2019-06-08 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC9.1 | Autentisering Skapa inlägg | 2019-06-08 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
TC9.2 | Sökvägen kan inte hittas | 2019-06-08 | :heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNjkzMTc3NDEsMTczMTc4MTEwOCwxMz
g4NjAxOTM5LC0xNzQxODE1MTQyLC0xMTQ5MTUzMzg3LC0xMDcw
MzU1NjMxLC0xNjU5NTI2ODI2LC05OTU2OTYxMDgsMTA1ODQ5ND
cyNywxNzY5NzkzMTE0LC0xMjg2NzcwNjk0LDg3NTMyMTMxNSwt
MTY3ODk0OTM2NSwzNDQxNzcxMTQsMTczNjAxNjAxLDYxODAxMz
ExNF19
-->