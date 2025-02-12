/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import { Footer, Header, Menu } from "..";

import "./Layout.scss";

const getTheme = () => {
    if (typeof window !== `undefined`) {
        return window.localStorage.getItem("portal-theme") || "light";
    }
    return "light";
};

interface ContextProps {
    theme: string;
    toggleTheme: (checked: boolean) => void;
}

export const ThemeContext = React.createContext<ContextProps>({ theme: "light", toggleTheme: () => {} });

interface Props {
    children: ReactNode;
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    showFooter?: boolean;
}

export const Layout = ({ children, title, header, isComponentPage = false, showFooter = true }: Props) => {
    const [theme, toggleDarkMode] = React.useState(getTheme());

    const toggleTheme = (showDark: boolean) => {
        if (showDark) {
            return toggleDarkMode("dark");
        }
        return toggleDarkMode("light");
    };

    React.useEffect(() => {
        if (theme === "dark") {
            window.localStorage.setItem("portal-theme", "dark");
            document.body.classList.add("portal-dark");
        } else {
            window.localStorage.setItem("portal-theme", "light");
            document.body.classList.remove("portal-dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header siteHeader={header} siteTitle={title} />
            <Menu />
            <main className={`portal-content ${isComponentPage ? "portal-content--component-page" : ""}`}>
                {children}
            </main>
            {showFooter && <Footer />}
        </ThemeContext.Provider>
    );
};

export default Layout;
