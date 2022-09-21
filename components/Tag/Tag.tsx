import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 's', children, color = 'ghost', className, href, ...props }: TagProps): JSX.Element =>
    <div
        className={cn(styles.tag, className, {
            [styles[size]]: size,
            [styles[color]]: color,
        })}
        {...props}
    >
        {
            href
                ? <a href={href}>{children}</a>
                : <>{children}</>
        }
    </div>;