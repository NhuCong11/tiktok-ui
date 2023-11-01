import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1637511740316674.jpeg?x-expires=1699020000&x-signature=hYLqIc3wDlCHmo08gAi8qLdNjms%3D" alt="Timo" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Feng Timo</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>fengtimo1219</span>
        </div>
    </div>;
}

export default AccountItem;
