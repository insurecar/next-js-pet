import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element =>
    <div className={cn(className, styles.footer)} {...props}>
        <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Всі права захищені</div>
        <a href="#" target='_blank'>Користувацькі угоди</a>
        <a href="#" target='_blank'>Політика конфіденційності</a>
    </div>;

