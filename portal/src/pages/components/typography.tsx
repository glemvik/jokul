import React from "react";
import ReactMarkdown from "react-markdown";

import { ComponentLayout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { TypographyExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-typography-react/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-core/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-typography-react/CHANGELOG.md";

export default function TypographyPage() {
    return (
        <ComponentLayout
            title="Typografi"
            mainExample={<TypographyExample />}
            packageNames={{ react: "typography-react", scss: "core" }}
        >
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
