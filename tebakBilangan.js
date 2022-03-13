let kesempatan = 3;
let bilangan = Math.round(Math.random() * 10);
let hasil;
let menang = false;
bilangan = (bilangan == 0) ? 1 : bilangan;

alert ("Tebak Angka Dari 1 - 10\nAnda memiliki 3 kesempatan");


    do {

        let player = prompt("Masukan Angka Tebakan : ");

        if (player == bilangan) {
            menang = true;
            break;
        } else if (player < bilangan) {
            hasil = "Angka Yang Anda Pilih Terlalu Rendah";
        } else if (player > bilangan) {
            hasil = "Angka Yang Anda Pilih Terlalu Tinggi";
        } else {
            alert("Bilangan Yang Anda Pilih Salah");
            break;
        }

        kesempatan--;

        if(kesempatan == 0){
            alert(hasil + "\nKesempatan Anda Habis");
            break;
        }

        alert(hasil + "\nSisa Kesempatan Anda : " + kesempatan);

    } while (kesempatan >= 0);
 


if (menang) {
    alert("Anda Benar \nAngka Yang Dicari Adalah " + bilangan);
} else {
    alert('Anda Kalah \nAngka Yang Dicari Adalah ' + bilangan);
}

alert("Terimakasih");
