import img1 from '../../assets/deposit.png'
import img2 from '../../assets/borrow.png'
import img3 from '../../assets/average-deposit.png'
import img4 from '../../assets/average-borrow.png'
export const cardList = [
  {
    img: img1,
    class_name: 'bg-primary-600',
    text: 'Deposit & Borrow TVL',
    value: '1444,754.53',
    unit: 'ETH',
  },
  {
    img: img2,
    class_name: 'bg-purple',
    text: 'Total borrowed',
    value: '211',
    unit: 'ETH',
  },
  {
    img: img3,
    class_name: 'bg-primary-700',
    text: 'Average Deposit APR',
    value: '6',
    unit: '%',
  },
  {
    img: img4,
    class_name: 'bg-yellow',
    text: 'Average Borrow APR',
    value: '9',
    unit: '%',
  },
]
