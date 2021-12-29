import React, { useState } from "react";
import * as containerStyles from "./tableofcontents.module.css"

const TableOfContents = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const nodes = props.nodes;

    const listItems = nodes.filter((node) => {
        return node.html?.length;
    }).map((node, index) =>
        <li
            key={node.id}
            onClick={() => props.openNotes(node.id)}
        >
            {node.frontmatter.title}
        </li>
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