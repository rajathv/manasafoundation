/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "primary",
    }}
  >
    <div className="container">
      <p>
        All Rights Reserved RVG Technologies, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">rvgtech.in</Link>
      </p>
    </div>
  </footer>
)

export default Footer
