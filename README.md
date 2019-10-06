# Homested JavaScript projekter

Denne Homestead definition af en vagrant instans, anvendes af udvalgte JavaScript projekter.
 
Laravel anvendes ikke.

## Etablering
Denne defintion er oprettet som en lokal instans ved med composer at installere **laravel/homestead** 

```
    composer require laravel/homestead --dev
    php vendor/bin/homestead make
```

Instansen opdateres ved at opdatere versionsnummeret i **composer.json**

Projektet forudsætter at vagrant boxen **laravel/homstead er installaret.

## Homestead.yaml

Følgende JavaScript projekter er aktiveret i filen:

- jstraining
- nodedemo
- mongodemo
- imgploadr

Yderligere projekter kan tilføjes i Homestead.yaml.
