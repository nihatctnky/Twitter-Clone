
import { useEffect, useState } from 'react';
import Form from '../../components/form';
import Post from '../../components/post';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './../../firebase/index';
import { orderBy } from 'firebase/firestore/lite';
import Loader from '../../components/loader';


const Main = ({ user }) => {

    const [tweets, setTweets] = useState(null)

    useEffect(() => {
        const tweetsCol = collection(db, "tweets")
        const q = query(tweetsCol, orderBy("createdAt", "desc"))

        const unsub = onSnapshot(q, (snapshot) => {
            const temp = []

            snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }))
            setTweets(temp)
        })

        return () => unsub()
    }, [])






    return (
        <main className='border border-fourth overflow-y-auto'>
            <header className='border border-fourth p-4 font-bold'>Anasayfa</header>

            <Form user={user} />


            {!tweets ? (
                <Loader desings="my-20 scale-[1.2]" />
            ) : (tweets.map((tweet, key) => (
                <Post key={key} tweet={tweet} />
            )))}



        </main>
    )
}

export default Main