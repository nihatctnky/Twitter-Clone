import moment from "moment";
import { MdEdit } from "react-icons/md";

const User = ({ tweet }) => {

    // Kullanıcı  ismi oluştur
    const username = tweet.user.name.toLowerCase().replaceAll(" ", "_");

    // tarihi objectveri formatına verdik
    let date = tweet.createdAt?.toDate()

    // gönderi tarihinin şuanın tarihinden uzaklıgını hesapla

    date = moment(date).fromNow(true)
    return (
        <div className="flex gap-2 items-center whitespace-nowrap text-gray-400">
            <p className="text-white fw-semibold">{tweet.user.name}</p>
            <p className="text-sm">@{username}</p>
            <p className="text-sm">{date}</p>

            {tweet.isEdited && (
                <p>
                    <MdEdit className="md:hidden" />
                    <span className="max-md:hidden text-xs">Düzenlendi</span>
                </p>
            )}
        </div>
    )
}

export default User