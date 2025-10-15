import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { useState } from "react";
import { removeFromPaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Paste = () => {
    const pastes = useSelector((state: RootState) => state.paste.pastes)
    console.log(pastes);
    const [searchData, setSearchData] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filterdData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchData.toLowerCase())
    )

    const deletPaste = (pasteId: string) => {
        dispatch(removeFromPaste(pasteId))
    }

    const copyPaste = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy)
        toast.success("copied to clipboard")
    }

    const viewPaste = (pasteId: string) => {
        navigate(`/pastes/${pasteId}`)
    }

    const editPaste = (pasteId: string) => {
        navigate(`/?pasteId=${pasteId}`)
    }

    return (<div>

        <div>
            <input
                className="m-4 p-2 w-xl h-[50px] bg-[#1a1a1a] border border-transparent rounded-lg"
                type="search"
                placeholder="Search here"
                onChange={(e) => setSearchData(e.target.value)}
            />
        </div>

        <div>
            {
                filterdData.length > 0 &&
                filterdData.map(
                    (paste) => {
                        return (
                            <div className="border m-4 p-2" key={paste?._id}>
                                <div>
                                    {paste.title}
                                </div>
                                <div>
                                    {paste.content}
                                </div>
                                <div className="flex flex-row m-2 p-2 gap-4 place-content-evenly">
                                    <button onClick={() => editPaste(paste?._id)}>
                                        Edit
                                    </button>
                                    <button onClick={() => viewPaste(paste._id)}>
                                        View
                                    </button>
                                    <button onClick={() => deletPaste(paste._id)}>
                                        Delete
                                    </button>
                                    <button onClick={() => copyPaste(paste.content)}>
                                        Copy
                                    </button>
                                    <button>Share</button>
                                </div>
                                <div>
                                    {paste.createdAt.toLocaleString()}
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>


    </div>
    )
}