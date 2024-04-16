import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";

import styles from "../../styles/Header.module.css";

import Logo from "../../images/logo.svg";
import Avatar from "../../images/avatar.jpg";
import { toggleForm } from "../../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="Stuff logo" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <g clipPath="url(#clip0_9_19)">
                <path d="M12.8416 12.0758L9.60783 8.84204C10.4886 7.76481 10.9216 6.39027 10.8173 5.00273C10.7131 3.61519 10.0795 2.3208 9.04763 1.3873C8.01577 0.453803 6.66459 -0.0473866 5.27357 -0.0126007C3.88255 0.0221852 2.55811 0.590285 1.57421 1.57419C0.5903 2.5581 0.0222005 3.88254 -0.0125854 5.27356C-0.0473713 6.66458 0.453818 8.01576 1.38732 9.04761C2.32081 10.0795 3.6152 10.7131 5.00274 10.8173C6.39029 10.9216 7.76483 10.4886 8.84205 9.60782L12.0758 12.8416C12.1791 12.9339 12.3139 12.9832 12.4524 12.9793C12.5909 12.9754 12.7227 12.9186 12.8207 12.8207C12.9187 12.7227 12.9754 12.5909 12.9793 12.4524C12.9832 12.3139 12.9339 12.1791 12.8416 12.0758ZM5.41737 9.75001C4.55987 9.75041 3.72153 9.49647 3.00838 9.02033C2.29523 8.54418 1.73933 7.86721 1.411 7.07507C1.08266 6.28293 0.996649 5.4112 1.16384 4.57016C1.33103 3.72913 1.74391 2.95657 2.35025 2.35023C2.95659 1.74389 3.72914 1.33101 4.57018 1.16382C5.41121 0.996633 6.28294 1.08265 7.07509 1.41098C7.86723 1.73931 8.5442 2.29522 9.02034 3.00836C9.49649 3.72151 9.75042 4.55986 9.75002 5.41735C9.74841 6.56595 9.29142 7.66704 8.47924 8.47922C7.66705 9.2914 6.56596 9.74839 5.41737 9.75001Z"></path>
              </g>
              <defs>
                <clipPath id="clip0_9_19">
                  <rect width="13" height="13" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything ..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>

          {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <path
                d="M3 12C0.75 9 1.5 4.5 5.25 3C9 1.5 11.25 4.5 12 6C12.75 4.5 15.75 1.5 19.5 3C23.25 4.5 23.25 9 21 12C18.75 15 12 21 12 21C12 21 5.25 15 3 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <path d="M20.94 18.06L19.26 8.31C19.1453 7.47997 18.7404 6.71734 18.1172 6.15725C17.4939 5.59716 16.6926 5.27576 15.855 5.25H15.75C15.75 4.25544 15.3549 3.30161 14.6517 2.59835C13.9484 1.89509 12.9946 1.5 12 1.5C11.0055 1.5 10.0516 1.89509 9.34837 2.59835C8.64511 3.30161 8.25002 4.25544 8.25002 5.25H8.14502C7.30749 5.27576 6.50611 5.59716 5.88287 6.15725C5.25963 6.71734 4.85477 7.47997 4.74002 8.31L3.06002 18.06C2.95683 18.6256 2.97926 19.2071 3.12572 19.7631C3.27217 20.3191 3.53907 20.8361 3.90752 21.2775C4.21796 21.6565 4.60803 21.9625 5.05003 22.1738C5.49204 22.385 5.97513 22.4964 6.46502 22.5H17.535C18.0249 22.4964 18.508 22.385 18.95 22.1738C19.392 21.9625 19.7821 21.6565 20.0925 21.2775C20.461 20.8361 20.7279 20.3191 20.8743 19.7631C21.0208 19.2071 21.0432 18.6256 20.94 18.06ZM12 3C12.5968 3 13.1691 3.23705 13.591 3.65901C14.013 4.08097 14.25 4.65326 14.25 5.25H9.75002C9.75002 4.65326 9.98707 4.08097 10.409 3.65901C10.831 3.23705 11.4033 3 12 3ZM18.945 20.31C18.7755 20.522 18.5612 20.6938 18.3174 20.8131C18.0736 20.9325 17.8064 20.9963 17.535 21H6.46502C6.19362 20.9963 5.92643 20.9325 5.68263 20.8131C5.43883 20.6938 5.2245 20.522 5.05502 20.31C4.82646 20.0365 4.66149 19.7157 4.57199 19.3707C4.4825 19.0257 4.47073 18.6651 4.53752 18.315L6.21752 8.565C6.27335 8.08382 6.49737 7.63782 6.85004 7.30574C7.20271 6.97365 7.66135 6.77683 8.14502 6.75H15.855C16.3387 6.77683 16.7973 6.97365 17.15 7.30574C17.5027 7.63782 17.7267 8.08382 17.7825 8.565L19.4625 18.315C19.5293 18.6651 19.5175 19.0257 19.428 19.3707C19.3386 19.7157 19.1736 20.0365 18.945 20.31Z"></path>
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
