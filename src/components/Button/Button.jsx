import cn from 'classnames';

import styles from '@/components/Button/Button.module.scss';

export const Button = props => {
  const { children, className, variant = 'contained', color = 'primary', ...rest } = props;
  return (
    <button
      className={cn({
        [className]: className,
        [styles.button]: true,
        [styles[variant]]: variant,
        [styles[color]]: color,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
