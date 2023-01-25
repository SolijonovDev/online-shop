import { useRouter } from 'next/router';

import { useMonthlyPayment } from '@/layout/MainLayout/MonthlyPayment/MonthlyPaymentProvider';

export const useProductCard = props => {
  const { id, title, price } = props;

  const router = useRouter();

  const { openMonthlyPaymentPopup } = useMonthlyPayment();

  const handleClick = id => {
    router.push(`/product-details/${id}`);
  };

  const handleClickMonthlyPayment = e => {
    e.stopPropagation();
    openMonthlyPaymentPopup(id, title, price);
  };

  const handleClickPurchase = e => {
    e.stopPropagation();
  };

  return { handleClick, handleClickMonthlyPayment, handleClickPurchase };
};
