# Homested JavaScript projekter

Denne Homestead definition af en vagrant instans, anvendes af udvalgte JavaScript projekter.
 
Laravel anvendes ikke.

## opdateringsstatus november 2019

- opdateret til Homestead ^9.0
- anvender laravel/homested box 8.2.1
- aktiveret pm2 
- jsdemo.test er en proxy som anvendes af alle apps

### pm2 konfigurationsfil

- konfigurationsfilen ecosystem.config.js indehodler definition af alle apps til brug ved start inde fra Vagrant instansen.

- husk kun at starte en app ad gangen på port 3000

```
    cd /vagrant
    pm2 start ecosystem.config.js --only mysqldemo
```
    
når der skiftes så skal den aktive app standses

```
    pm2 stop mysqldemo
```

Apps der anvender port 3000 er imgploadr, jstraining og mysqldemo

mysqldemo json-server på port 3300 er ikke implementeret

monitering foregår med

```
    pm2 monit
```

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

- jstraining-jasmine som jstraining
- mongodemo
- imgploadr

Yderligere projekter kan tilføjes i Homestead.yaml.

Der er defineret en proxy jsdemo på port 3000

