import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { useState } from "react";

export const Paste = () => {
    const pastes = useSelector((state: RootState) => state.paste.pastes)
    console.log(pastes);
    const [searchData, setSearchData] = useState("");
    const dispatch = useDispatch();

    const filterdData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchData.toLowerCase())
    )

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
                        return (<div className="border m-4 p-2">
                            <div>
                                {paste.title}
                            </div>
                            <div>
                                {paste.content}
                            </div>
                            <div className="flex flex-row m-2 p-2 gap-4 place-content-evenly">
                                <button>Edit</button>
                                <button>View</button>
                                <button>Delete</button>
                                <button>Copy</button>
                                <button>Share</button>
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