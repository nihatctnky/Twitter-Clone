import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa"
import { FaShareNodes } from "react-icons/fa6"
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"
import { db, auth } from "../../firebase/index"



const Buttons = ({ tweet }) => {

    // oturumu açık olan kullanıcı bu tweete likelayanların arasında mı

    const isLiked = tweet.likes.includes(auth.currentUser.uid)

    // like butonuna tıklayınca
    const tooggleLike = () => {
        const tweetRef = doc(db, "tweets", tweet.id)

        // kullanıcı idsini like dizisine ekle

        updateDoc(tweetRef, {
            likes: isLiked
                ? arrayRemove(auth.currentUser.uid)
                : arrayUnion(auth.currentUser.uid)
        })
    }
    return (
        <div className="flex justify-between items-center text-zinc-500 ">

            <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
                <FaRegComment />
            </button>

            <button className="post-icon hover:bg-green-300/20 hover:text-green-400">
                <FaRetweet />
            </button>

            <button className="flex items-center hover:text-pink-500 relative" onClick={tooggleLike}>
                <div
                    className="post-icon hover:bg-red-400/20 ">
                    {isLiked ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}

                </div>


                <span className={`${isLiked && "text-pink-500"} absolute -end-1`}>{tweet.likes.length}
                </span>

            </button>


            <button className="post-icon hover:bg-blue-400/20 hover:text-blue-400">
                <FaShareNodes />
            </button>


        </div>
    )
}

export default Buttons