/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import { Shop } from '@/libs/my-shop/type-my-shop'

import UiMyShopDetailButton from './ui-my-shop-detail-button'
import styles from './ui-my-shop-detail.module.scss'

const cx = classNames.bind(styles)
export default function UiMyShopDetail({ shop }: { shop: Shop }) {
  return (
    <div className={cx('detailCardWrapper')}>
      <div className={cx('imgContainer')}>
        <img className={cx('img')} src={shop.imageUrl} alt={shop.name} />
      </div>
      <div className={cx('card')}>
        <div className={cx('content')}>
          <div className={cx('contentHeader')}>
            <h3 className={cx('category')}>{shop.category}</h3>
            <h2 className={cx('shopName')}>{shop.name}</h2>
          </div>
          <div className={cx('addressContainer')}>
            <div className={cx('imgContainer', 'icon')}>
              <img
                className={cx('img')}
                src="/images/location.svg"
                alt="location"
              />
            </div>
            <p className={cx('address')}>{shop.address1}</p>
          </div>
          <p className={cx('description')}>{shop.description}</p>
        </div>
        <UiMyShopDetailButton shop={shop} />
      </div>
    </div>
  )
}
