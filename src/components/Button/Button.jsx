import cn from 'classnames';

import styles from '@/components/Button/Button.module.scss';

export const Button = props => {
  const { children, variant = 'contained', color = 'primary', ...rest } = props;
  return (
    <button
      className={cn({
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
