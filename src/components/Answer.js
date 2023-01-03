import React from 'react';

export default function Answer({children, answer}) {
    return(
        <details class="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module">
            <summary>
                Answer: {answer}
            </summary>
            <p>
                {children}
            </p>
        </details>
    );
}