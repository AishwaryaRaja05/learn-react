/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from "react-dom/client" package
 * 2. Use that root to render some JSX. For now, just render
 *     an h1 element that says anything you want.
 */

import {createRoot} from "react-dom/client";

const root = document.getElementById("root");
root.render(
    // when rendering multiple elements, use a semantically correct container like main to render them
    <main>
        <img src="react-logo.png"  alt="react-logo"/>
        <h1>This is another element</h1>
    </main>
)