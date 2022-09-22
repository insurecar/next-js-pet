import { FooterProps } from "./Footer.props";
import styles from './Header.module.css';

export const Footer = ({ ...props }: FooterProps): JSX.Element =>
    <div {...props}>
        Footer
    </div>;

