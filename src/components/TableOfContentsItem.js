import React, { useState } from "react";
import * as containerStyles from "./tableofcontentsitem.module.css"

const TableOfContentsItem = ({ indexKey, title, openNotes, noteId }) => {
    const [hovered, setHovered] = useState(false);

    const mouseEnter = () => {
        setHovered(true);
    }

    const mouseLeave = () => {
        setHovered(false);
    }

    return (
        <li
            key={indexKey}
            onClick={() => openNotes(noteId)}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={!hovered ? containerStyles.listitem : containerStyles.listitemhovered}
        >
            {title}
        </li>
    )
}

export default TableOfContentsItem;