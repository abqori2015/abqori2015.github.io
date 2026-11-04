var tanya = true;
while (tanya) {
    var p = prompt('pilih woy poke : Guajah, semuth, ourang');

    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'Guajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'ourang';
    } else {
        comp = 'semuth';
    }

    var hasil = '';
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'Guajah') {
        hasil = (comp == 'ourang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'ourang') {
        hasil = (comp == 'Guajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semuth') {
        hasil = (comp == 'ourang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }

    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('main lagi gak?');
}

alert('terima kacih sudah bermain main life.');