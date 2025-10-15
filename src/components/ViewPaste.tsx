import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ViewPage = () => {
    const { id } = useParams();
    
    const allPaste = useSelector((state: RootState) => state.paste.pastes);
    const paste = allPaste.find(p => p._id === id)
    console.log("final paste", paste)

    return (<div>
        <div>
            <input
                className="m-4 p-2 bg-[#1a1a1a] border border-transparent rounded-lg"
                type="text"
                disabled
                placeholder="Enter title here"
                value={paste.title}
            />
        </div>

        <div>
            <textarea
                cols={50}
                rows={15}
                disabled
                className="p-4 bg-[#1a1a1a] border border-transparent rounded-lg"
                placeholder="Enter content here"
                value={paste.content}
            />
        </div>

    </div>
    )
}