// ==UserScript==
// @name         LaTeX Claude v2
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Render LaTeX formulas in Claude AI chatbot messages and responses using MathJax library
// @author       Ovler
// @match        https://claude.ai/chat/*-*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    // Load MathJax library
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML");
    document.head.appendChild(script);

    // Configure MathJax to render LaTeX formulas
    window.MathJax = {
        tex2jax: {
            inlineMath: [ ['$','$'], ['\\(','\\)'] ],
            processEscapes: true
        },
        CommonHTML: { scale: 100 }
    };

    // Wait for MathJax to load and render LaTeX formulas
    var checkLoaded = setInterval(function() {
        if (typeof MathJax !== "undefined" && MathJax.Hub.queue.queue.length === 0) {
            clearInterval(checkLoaded);
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.body]);
        }
    }, 100);

    // Listen for changes to the page content and re-render LaTeX formulas
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "childList" || mutation.type === "subtree") {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, mutation.target]);
            }
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
