import React from "react";
import * as containerStyles from "./tableofcontents.module.css"
import TableOfContentsItem from "./TableOfContentsItem";

const TableOfContents = (props) => {
    const nodes = props.nodes;

    const listItems = nodes.filter((node) => {
        return node.html?.length;
    }).map((node, index) =>
        <TableOfContentsItem
            indexKey={index}
            title={node.frontmatter.title}
            openNotes={props.openNotes}
            noteId={node.id}
        />
    );

    return (
        <section>
            <ul className={containerStyles.list}>
                {listItems}
            </ul>
        </section>
    )
}

export default TableOfContents;