

const morgan = require("morgan")
var rfs = require('rotating-file-stream')
//var fs = require('fs')
// var path = require('path')
// var accessLogStream = rfs.createStream('access.log', {
//     interval: '1d', // rotate daily
//    // path: path.join(__dirname, '../log')
//    path:__dirname+"xzy"

 // })

 module.exports = morgan('combined', {
       stream: rfs.createStream(`./logs/abc.log`,)
    })








//module.exports = morgan('combined', { stream: accessLogStream })


//hocanin yaptigi

// const morgan = require('morgan')
// const fs = require('node:fs')

// const now = new Date()
// const today = now.toISOString().split('T')[0]

// module.exports = morgan('combined', {
//     stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
// })



// Bu JavaScript kodu, muhtemelen bir Node.js uygulamasında kullanılan "rotating-file-stream" (rfs) modülünü kullanarak bir erişim günlüğü dosyasını oluşturuyor. Bu tür bir modül, günlük dosyalarını belirli bir aralıkta döndürmeye ve eski günlükleri temizlemeye yardımcı olur.
// rfs.createStream fonksiyonu, günlük dosyasını oluşturmak için kullanılır. Parametre olarak iki ana değer alır:

// İlk parametre, günlük dosyasının adı (örneğin, 'access.log').
// İkinci parametre, bir konfigürasyon nesnesi içerir:
// interval: Günlük dosyasının dönme aralığını belirtir. Bu durumda '1d', yani her gün.
// path: Günlük dosyasının oluşturulacağı dizini belirtir. __dirname ile uygulamanın bulunduğu dizin ve 'log' klasörü kullanılmış.
// Sonuç olarak, accessLogStream değişkeni, oluşturulan günlük dosyasına yazmak için kullanılacak bir akış nesnesini temsil eder.

// Bu kodun çalışabilmesi için, proje dizininde "log" adında bir klasörün bulunması ve rotating-file-stream modülünün yüklü olması gerekmektedir. Bu kod, her gün bir günlük dosyası oluşturacak ve eski günlük dosyalarını belirtilen dizinde saklayacaktır.




