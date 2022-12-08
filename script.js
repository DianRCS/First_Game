let nama = prompt('Siapa namamu?');
let tanya = true;
while( tanya == true) {
    // Player
    let P = prompt('Silahkan pilih : (batu, gunting, kertas).');


    // pilihan random computer
    let comp = Math.random();


    if( comp < 0.34 ) {
        comp = 'gunting';
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = 'batu';
    } else {
        comp = 'kertas'
    }


    let hasil = '';

    // Rules / peraturan
    if( P == comp ) {
        hasil = 'SERI';
    } else if( P == 'batu' ) {
        hasil = ( comp == 'gunting' ) ? 'MENANG' : 'KALAH';
    }
    else if( P == 'gunting') {
        hasil = ( comp == 'batu' ) ? 'KALAH': 'MENANG';
    }
    else if( P == 'kertas' ) {
        hasil = ( comp == 'gunting' ) ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Maaf yang kamu masukkan salah, silahkan isi dengan benar!';
    }

    // result/hasil
    alert('Kamu memilih ' + P + ' dan computer memilih : ' + comp + '\nDan hasilnya : kamu ' + hasil);
    hasil = confirm( nama + ' apakah kamu mau bermain lagi?');
}
