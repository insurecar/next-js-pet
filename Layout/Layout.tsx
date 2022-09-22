import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';

import { Header, Sidebar, Footer } from "./indexLayoutExport";
import { Component, FunctionComponent } from "react";
export const Layout = ({ children }: LayoutProps): JSX.Element =>
    <>
        <Header />
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
        <Footer />
    </>;

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout>
            <Component {...props} />
        </Layout>;
    };
};