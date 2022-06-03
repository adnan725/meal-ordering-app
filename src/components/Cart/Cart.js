import styles from './Cart.module.scss';
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
    const cartItems = <ul className={styles['cart-items']}>
        {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => item.name)}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart