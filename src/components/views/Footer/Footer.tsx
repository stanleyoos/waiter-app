import clsx from "clsx"
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={clsx('text-center mt-4', styles.footer)}>Copyright © WaiterApp 2023</div>
  )
}

export default Footer