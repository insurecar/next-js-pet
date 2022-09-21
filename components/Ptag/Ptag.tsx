import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'm', children, className, ...props }: PtagProps): JSX.Element =>
    <p className={cn('.p', className, {
        [styles[size]]: size,

    })}
        {...props}
    >
        {children}
    </p>;