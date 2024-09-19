import s from "./topbar.module.css";
import Burgermenu from "./Hamburger-dropdown/burgerdropdown";
import { Link } from "react-router-dom";

const Bar = (props) => (
    <div>
         <nav className={s.navbar}>
            <div className={s.navitems}>
                <Link to = "/"><button>Home</button></Link>
                <Link to = "/about_me"><button>About Me</button></Link>
                <Link to = "/education"><button>Education</button></Link>
                <Link to = "/work_experience"><button>Work Experience</button></Link>
                <Link to = "/skills"><button>Skills</button></Link>
                <Link to = "/websites_created"><button>Websites Created</button></Link>
                <Link to = "/contact_me"><button>Contact Me</button></Link>
            </div>
        </nav>
        <Burgermenu />
    </div>
);

export default Bar;