import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

export const Home = () => {
    const [title, setTitle] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [contentValue, setContentValue] = useState("");
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();

    const createPaste = () => {
        const paste = {
            title: title,
            content: contentValue,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString()
        }

        if(pasteId){
            //update
            dispatch(updateToPaste(paste));
        } else {
            //create
            dispatch(addToPaste(paste));
        }

        setTitle('');
        setContentValue('');
        setSearchParams({});
    }

    return (<div>
        <div>
            <input
                className="m-4 p-2 bg-[#1a1a1a] border border-transparent rounded-lg"
                type="text"
                placeholder="Enter title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={createPaste} className="hover:cursor-pointer">
                {
                    pasteId ? "Update your data" : "Create your data"
                }
            </button>
        </div>

        <div>
            <textarea
                cols={50}
                rows={15}
                className="p-4 bg-[#1a1a1a] border border-transparent rounded-lg"
                placeholder="Enter content here"
                value={contentValue}
                onChange={(e) => setContentValue(e.target.value)}
            />
        </div>

    </div>
    )
}