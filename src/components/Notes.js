import React from "react";
import * as containerStyles from "./notes.module.css"

const Notes = ({ note }) => {
    return (
        <section
            className={containerStyles.section}
            dangerouslySetInnerHTML={{ __html: `${note.html || ''}` }}
        >
        </section >
    );
}

export default Notes;