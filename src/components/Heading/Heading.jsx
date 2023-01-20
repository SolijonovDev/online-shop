import cn from 'classnames';

import styles from '@/components/Heading/Heading.module.scss';

export const Heading = props => {
  const { children, className } = props;
  return <h2 className={cn({ [styles.heading]: true, [className]: className })}>{children}</h2>;
};
