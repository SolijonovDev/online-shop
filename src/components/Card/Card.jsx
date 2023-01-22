import cn from 'classnames';

import styles from '@/components/Card/Card.module.scss';

export const Card = props => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn({ [styles.card]: true, [className]: className })} {...rest}>
      {children}
    </div>
  );
};
