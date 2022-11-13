// console.log("Hello Word");

const gunung = document.querySelector('#gbr-gunung');
const gurun = document.querySelector('#gbr-gurun');

gunung.addEventListener('click', function(even){
    document.querySelector('.detail-gunung').innerHTML ="<p>Gunung Bromo memiliki kawah dengan panjang diameter sekitar 800 meter dari utara ke selatan dan 600 meter dari barat ke timur. Dengan kandungan belerang yang ada di kawah, tak mengherankan jika bau belerang cukup tajam tercium saat anda berada berdiri di tepiannya. Untuk dapat menikmati keindahan kawah ini, anda harus menaiki 250 anak tangga terlebih dahulu. Jika ini terdengar melelahkan, tersedia kuda-kuda milik warga sekitar yang bisa anda sewa.</p>"
});

gurun.addEventListener('click', function(even){
    document.querySelector('.detail-gurun').innerHTML="<p>Pasir Berbisik merupakan lautan pasir yang berada di atas ketinggian. Lautan pasir ini terbentang 10 Km dan berada tak jauh dari tangga menuju kawah Gunung Bromo. Penduduk setempat menyebutnya sebagai Segara Wedi. Nama Pasir Berbisik adalah nama yang diberikan karena tempat ini pernah menjadi lokasi syuting film dengan judul yang sama. Selain itu, saat angin berhembus, pasir akan berterbangan dan menimbulkan bunyi lirih seperti suara orang yang sedang berbisik.</p>"
});