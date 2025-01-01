import { Outlet, Navigate } from "react-router-dom"
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/index';
import PageLoader from "../loader/page-loader";



const Protected = () => {

    const [user, setUser] = useState(undefined)

    // kullanıcı oturumverilerni al
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user))

        return () => unsub();
    }, [])


    //  oturum verileri gelene kadar yükleniyor bas

    if (user === undefined) {

        return <PageLoader />
    }


    // eger kullanıcı oturum kapalıysa logine yönlendir

    if (user === null || !user?.emailVerified) {
        // eposta dogrulanmışsa bild,irim gönder
        if (!user?.emailVerified === false)
            toast.info("Lütfen mail adresini dogrulayınız")
        return <Navigate to="/" replace />
    }



    // oturumu açık ve eposta dogrulamışsa sayfayı göster
    return <Outlet context={user} />;
}

export default Protected