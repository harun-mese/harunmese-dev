<?php



// POST isteğini aldığınızda çalışacak kod
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // POST verilerine erişim
    $htmlContent = file_get_contents('php://input');

    // İşlemleri gerçekleştirme (örneğin, dosyaya yazma, veritabanına kaydetme vb.)
    // Bu örnekte POST ile gelen HTML içeriğini dosyaya yazıyoruz
    $dosya = fopen("index.html", "w") or die("Dosya açılamadı!");

    //fwrite($dosya, $htmlContent);
    fclose($dosya);

    // İşlem başarılı olduysa bir yanıt gönderme (isteğe bağlı)
    echo "POST isteği başarıyla alındı ve işlendi.";
} else {
    // POST isteği gelmediyse uygun bir yanıt gönderme
    echo "Sadece POST istekleri kabul edilmektedir.";
}



?>