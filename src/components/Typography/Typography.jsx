import cn from 'classnames';

import styles from '@/components/Typography/Typography.module.scss';

export const Typography = props => {
  const { children, className } = props;
  return <p className={cn({ [styles.text]: true, [className]: className })}>{children}</p>;
};
