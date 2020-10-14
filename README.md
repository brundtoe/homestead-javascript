# Homested JavaScript projekter

Denne Homestead definition af en vagrant instans, anvendes af udvalgte JavaScript projekter.
 
Laravel anvendes ikke.

## opdateringsstatus oktober 2020

- opdateret til Homestead ^10.0
- anvender laravel/homested box 9.6.1
- aktiveret pm2 
- jsdemo.test er en proxy som anvendes af alle apps
- jsonserver.test er en proxy på port 3300 til json-server

scriptet after.sh installerer 

    npm install -global json-server

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

port 3300 anvendes mysqldemo controller authors.

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

Der er defineret en proxy jsdemo på port 3000 og jsonserver på port 3300

