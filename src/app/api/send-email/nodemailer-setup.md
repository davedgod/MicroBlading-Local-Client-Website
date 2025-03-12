# Configurare NodeMailer pentru Gmail

Pentru a configura trimiterea de emailuri prin Gmail folosind NodeMailer, urmați acești pași:

## 1. Instalați NodeMailer

```bash
npm install nodemailer
```

## 2. Configurați variabilele de mediu

Creați un fișier `.env.local` în directorul rădăcină al proiectului și adăugați:

```
EMAIL_USER=jofielartmicropigmentare@gmail.com
EMAIL_PASSWORD=parola_aplicatie_gmail
```

Notă: Pentru `EMAIL_PASSWORD` nu folosiți parola normală a contului, ci o parolă de aplicație generată din setările Google.

## 3. Generați o parolă de aplicație pentru Gmail

1. Accesați contul Google și activați autentificarea în doi pași
2. Accesați [Parole de aplicații](https://myaccount.google.com/apppasswords)
3. Selectați aplicația: "Mail"
4. Selectați dispozitivul: "Altul (nume personalizat)" și introduceți "Jofiel Art Website"
5. Copiați parola generată și folosiți-o în `.env.local`

## 4. Actualizați codul din route.ts

Decomentați și folosiți codul NodeMailer din fișierul `route.ts`.

## 5. Testați funcționalitatea

Trimiteți un formular de test pentru a verifica dacă emailurile sunt trimise corect.

## Alternativă: Servicii de email

În loc de configurarea directă a NodeMailer, puteți folosi servicii precum:

- SendGrid
- Mailchimp
- AWS SES
- Resend.com

Acestea oferă API-uri simple și rate mai bune de livrare a emailurilor.
