import React, { useState } from "react";
import Header from "../components/Header";
import TableOfContents from "../components/TableOfContents";
import Notes from "../components/Notes";
import { graphql, useStaticQuery } from 'gatsby'
import "./index.css";

export default function Home() {
    const [currentNote, setCurrentNote] = useState({});
    const data = useStaticQuery(graphql`
      query MyQuery {
        allMarkdownRemark {
          nodes {
            html
            frontmatter {
              title
            }
            id
          }
        }
      }
   `);

    const nodes = data.allMarkdownRemark.nodes;

    const openNotes = (id) => {
        const currentNote = nodes.find((node) => {
            return node.id === id;
        });
        setCurrentNote(currentNote);
    }

    return (
        <div className="app">
            <Header />
            <TableOfContents openNotes={openNotes} nodes={nodes}/>
            <Notes note={currentNote}/>
        </div>
    )
}
