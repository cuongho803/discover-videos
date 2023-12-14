import styles from "./navbar.module.css";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";

const NavBar = (props) => {

    const [username, setUsername] = useState(props.userName || "");
    const [showDropdown, setShowDropdown] = useState(false);
    const [didToken, setDidToken] = useState("");
    const router = useRouter();
    const {userName} = props;
    //  setUsername(username);
    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push("/");
    };

    const handleOnClickMyList = (e) => {
        e.preventDefault();
        router.push("/browse/my-list");
    };

    const handleShowDropdown = (e) => {
        e.preventDefault();
        console.log("!231231");
        setShowDropdown(!showDropdown);
    };

    const handleSignout = async (e) => {
        e.preventDefault();
        console.log("Sign Out");
        /*  try {
              const response = await fetch("/api/logout", {
                  method: "POST",
                  headers: {
                      Authorization: `Bearer ${didToken}`,
                      "Content-Type": "application/json",
                  },
              });

              const res = await response.json();
          } catch (error) {
              console.error("Error logging out", error);
              router.push("/login");
          }*/
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/static/netflix.svg"
                            alt="Netflix logo"
                            width="128"
                            height="34"
                        />
                    </div>
                </Link>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>
                        Home
                    </li>
                    <li className={styles.navItem2} onClick={handleOnClickMyList}>
                        My List
                    </li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn}>
                            <p className={styles.username} onClick={handleShowDropdown}>{username}</p>
                            {/** Expand more icon */}
                            <Image
                                src={"/static/expand_more.svg"}
                                alt="Expand dropdown"
                                width="24"
                                height="24"
                            />
                        </button>
                        {showDropdown && (
                            <div className={styles.navDropdown}>
                                <div>
                                    <a className={styles.linkName}>
                                        Sign out
                                    </a>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};
export default NavBar;
