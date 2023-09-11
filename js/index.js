const passLength = 12

if(passLength >= 10) {
    console.log(`Masz bardzo dobre hasło`);
}
else if (passLength < 10 && passLength > 5) {
    console.log(`Masz dobre hasło`);
}
else {
    console.log(`Masz słabe hasło`);
}