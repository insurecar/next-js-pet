import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames'

export const Ptag = ({ size = 'm', children, ...props }: PtagProps): JSX.Element =>
    <p className={cn('.p', {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
    })}
        {...props}
    >
        {children}
    </p>;