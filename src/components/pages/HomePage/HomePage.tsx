import clsx from "clsx"
import AllTables from "../../features/AllTables/AllTables"
import { FaPlus } from "react-icons/fa"
import styles from "./HomePage.module.scss"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="ms-3">All tables</h1>
        <Link to="/add/table">
          <FaPlus className={clsx("me-3", styles.plusIcon)} />
        </Link>
      </div>
      <AllTables />
    </>
  )
}

export default HomePage
