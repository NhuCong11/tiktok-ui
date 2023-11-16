import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://yt3.ggpht.com/sRhKv0BM8jaNEWohgVcxv4bengflseeCPUtzINiGe_grG2CPZXIriR5ytxvZlxOVv8LEgV9-J_M=s88-c-k-c0x00ffffff-no-rj"
                alt=""
            />
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>NguyenNhuCong</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Như Công</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
