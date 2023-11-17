import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://yt3.ggpht.com/sRhKv0BM8jaNEWohgVcxv4bengflseeCPUtzINiGe_grG2CPZXIriR5ytxvZlxOVv8LEgV9-J_M=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>NguyenNhuCong</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Như Công</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>6.7M</strong>
                <span className={cx('label')}>Follower</span>
                <strong className={cx('value')}>5.4M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
