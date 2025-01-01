//  bu fonksiyon parametre olarak dosyayı alıp egerki türü resimse firebase stroga yükle ardından url return et

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { stroga } from ".";
import { v4 } from "uuid";

const uploadStorage = async (file) => {
    // 1 dosya resim degilse veya dosya yoksa fonksiyonu durdur

    if (!file || !file.type.startsWith("image")) return null;

    // 2 maksimüm dosya boyutunu belirle
    if (file.size > 2097152) {
        toast.error("Lütfen 2mb altında medya yükleyin")
        throw new Error("Resim 2mb üstü")
    }

    // 3 dosyanın yüklenecegi konumun referansını al
    const imageRef = ref(stroga, v4() + file.name)


    //  4 referansını oluşturdugumuz konuma dosyayı yükle

    await uploadBytes(imageRef, file)

    //  5 stroga yüklenen dosyanın url al ve return et

    const url = await getDownloadURL(imageRef)
    return url;
}
export default uploadStorage